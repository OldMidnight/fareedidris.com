<script>
import { upload } from '@/router/file-upload.service'
import { api } from '@/api'
import { required, maxLength } from 'vuelidate/lib/validators'

const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3

export default {
    name: 'midnightcore',
    data() {
        return {
	    uploadError: null,
	    currentStatus: null,
	    file: {
	        name: null,
		type: null,
		currentName: null,
		currentType: null,
		nameChecked: false,
		nameTaken: false,
		ignore_similar: false
	    },
	    variants: [
	        { name: 'regular', uploaded: false, text: 'Regular Variant' },
		{ name: 'bold', uploaded: false, text: 'Bold Variant' },
		{ name: 'italic', uploaded: false, text: 'Italic Variant' },
		{ name: 'light', uploaded: false, text: 'Light Variant' },
		{ name: 'condensed', uploaded: false, text: 'Condensed Variant' },
		{ name: 'black', uploaded: false, text: 'Black Variant' }
	    ],
	    available_to_modify: null,
	    file_error: {
	        error: false,
		message: null,
		names: []
	    }
	}
    },
    computed: {
        isInitial() {
	    return this.currentStatus === STATUS_INITIAL
	},
	isSaving() {
	    return this.currentStatus === STATUS_SAVING
	},
	isSuccess() {
	    return this.currentStatus === STATUS_SUCCESS
	},
	isFailed() {
	    return this.currentStatus === STATUS_FAILED
	},
	isWarning() {
	    return this.available_to_modify === false
	}
    },
    validations: {
        file: {
	    type: {
	        required
	    },
	    name: {
	        required,
		maxLength: maxLength(20)
	    }
	}
    },
    methods: {
        reset() {
	    this.currentStatus = STATUS_INITIAL
	    this.uploadError = null
	    console.log(this.currentStatus)
	},
	save(formData) {
	    upload(formData)
	        .then(x => {
		    console.log('x:', x)
		    this.currentStatus = 2
		})
		.catch(err => {
		    this.uploadError = err.response
		})
	},
	filesChange(fieldName, fileList) {
	    const formData = new FormData()
	    if (!fileList.length) return

	    if (this.file.type === 'MidnightFonts' && fileList[0].size > 1500000) return
	    if (this.file.type === 'MidnightMedia' && fileList[0].size > 45000000) return

	    Array
	        .from(Array(fileList.length).keys())
		.map(x => {
		    formData.append(fieldName, fileList[x], fileList[x].name)
		})

            formData.append('file_name', this.file.name)
	    formData.append('file_type', this.file.type)

	    console.log('size: ', fileList[0].size)
	    console.log('formData: ', formData)
	    this.currentStatus = STATUS_SAVING
	    this.save(formData)
	},
	checkName() {
	    this.currentStatus = STATUS_SAVING
	    this.$v.$touch()
	    if (this.$v.$invalid) {
	        console.log('wrong')
	    } else {
	        this.resetFile()
		this.resetFileError()
	        api.post('midnightcore/setName', this.file)
		    .then((response) => {
	                this.currentStatus = STATUS_INITIAL
			if (response.data.error) {
			    this.file_error.error = true
			    this.file_error.message = response.data.error_message
			    this.file_error.names = response.data.names_list
			} else if (response.data.exists) {
			    this.file.nameTaken = true
			    this.file.nameChecked = true
			    this.file.currentName = this.file.name
			    this.file.currentType = this.file.type
			    this.available_to_modify = false
			} else if (response.data.exists === false && response.data.error === false) {
			    this.file.nameChecked = true
	                    this.currentStatus = STATUS_SAVING
			    api.post('midnightcore/getStatus', this.file)
			        .then((response) => {
	                            this.currentStatus = STATUS_INITIAL
				    console.log(response)
				    if (this.file.type === 'MidnightMedia') {
				        if (response.data.available_to_edit) {
					    this.available_to_modify = true
					} else {
					    this.available_to_modify = false
					}
				    }
				    this.resetFileError()
				})
				.catch((error) => {
	                            this.currentStatus = STATUS_INITIAL
				    console.log(error)
				})
			} else {
			    this.file.nameTaken = true
			    this.file.nameChecked = true
			    this.file.currentName = this.file.name
			    this.file.currentType = this.file.type
			}
		    })
		    .catch((error) => {
		        console.log(error)
	                this.currentStatus = STATUS_INITIAL
		    })
	    }
	},
	resetFile() {
	    this.file.nameChecked = false
	    this.file.nameTaken = false
	},
	resetFileError() {
	    this.file_error.error = false
	    this.file_error.message = null
	    this.file_error.names = []
	}
    },
    mounted() {
        this.reset()
    }
}
</script>

<template>
    <div class="view-container">
        <div class="tool-container">
	    <h2>MidnightCore Self-Upload Tool</h2>
	    <div class="tool-wrapper">
	        <div class="tool-desc wrapper-item">
		    <h4>How To Use:</h4>
		    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non velit in purus sollicitudin dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id felis vel sem sollicitudin consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam purus mi, congue sed ligula non, elementum dictum velit. Curabitur leo odio, convallis a ante ac, pellentesque auctor dui. Donec tempor sapien ac risus congue maximus. In id lacinia urna. Morbi venenatis tincidunt mauris eget ullamcorper. Quisque eu est et lorem ultricies suscipit. Nulla feugiat vulputate lacinia.</p>
		    <div class="tool-checklist" v-if="file.type === 'MidnightFonts'">
		        <h4>Weights Checklist:</h4>
			<div v-for="variant in variants" :key="variant.name">
			    <p>{{ variant.text }}</p>
			</div>
		    </div>
		    <div class="tool-checklist" v-if="file_error.names.length > 0">
		        <h4>Similar Names:</h4>
			<div v-for="name in file_error.names" :key="name">
			    <p>{{ name }}</p>
			</div>
			<BaseButton @click="file.ignore_similar = true; checkName()" :class="{ disable: isSaving }">Continue?</BaseButton>
		    </div>
		</div>
	        <div class="wrapper-item">
	            <h4>Upload Files</h4>
		    <div class="dropbox">
			<select v-model="file.type" @change="resetFile()" :class="{ disable: isSaving }">
			    <option disabled value="">Choose File Type</option>
			    <option value="MidnightFonts">MidnightFonts</option>
			    <option value="MidnightMedia">MidnightMedia</option>
			</select>
			<input type="text" name="name_check" v-model="file.name" @input="resetFile(); available_to_modify = null" placeholder="Name Of Your File" class="name-input" :class="{ disable: isSaving, warning: isWarning }">
			<BaseButton @click="checkName()" v-if="file.nameChecked === false || file.nameTaken === true || available_to_modify === false || file_error.error === true" :class="{ disable: isSaving }">Check Name</BaseButton>
			<form enctype="multipart/form-data" novalidate v-else>
			    <input v-if="file.type === 'MidnightFonts'" type="file" multiple name="uploadField" id="uploadField" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files)" accept=".ttf, font/ttf" class="input-file">
			    <input v-if="file.type === 'MidnightMedia'" type="file" multiple name="uploadField" id="uploadField" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files)" accept=".zip, application/zip" class="input-file">
			    <label for="uploadField" v-if="available_to_modify" :class="{ disable: isSaving }">Choose a file</label>
			</form>
			<div v-if="file_error.error">
			    <p>Error Occured: {{ file_error.message }} !</p>
			</div>
			<div v-if="isWarning">
			    <p>Warning: File Already Exists!</p>
			</div>
		    </div>
	        </div>
	    </div>
	</div>
    </div>
</template>

<style lang="scss">
@import '~@/design/index.scss';

.disable {
    opacity: 0.5;
}

.name-input {
    height: 50px;
    border-radius: 10px;
    padding-left: 10px;
    border: 1px solid;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.warning {
    background-color: #ffcc80;
    border: 1px solid #ff9900;
}

.view-container {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    align-items: center;
}

.tool-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 75%;
    pdding: 5%;
    border: 1px solid;
}

.tool-wrapper{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid;
    .wrapper-item {
        width: 50%;
	padding: 3%;
	border: 1px solid;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
    }
}

.dropbox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    width: 100%;
    height: 100%;
}

.input-file {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
}

.input-file + label {
    font-size: 1.25em;
    font-weight: 700;
    color: $color-button-text;
    background-color: $color-button-bg;
    border: 1px solid $color-button-bg;
    border-radius: $border-rounded-large;
    display: inline-block;
    cursor: pointer;
    transition: 0.5s;
    width: 50%;
    padding: 5px;
}

.input-file:focus + label, .input-file + label:hover {
    @extend %shadow-normal;
}

.input-file:focus + label {
    outline: 1px dotted #000;
    outline: -webkit-focus-ring-color auto 5px;
}
</style>
