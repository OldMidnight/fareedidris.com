<script>
import { upload } from '@/router/file-upload.service'
import { api } from '@/api'
import { required, maxLength } from 'vuelidate/lib/validators'

const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3

export default {
    name: 'midnightcore',
    data() {
        return {
	    uploadedFiles: [],
	    uploadError: null,
	    currentStatus: null,
	    uploadFieldName: 'fonts',
	    file: {
	        name: '',
		type: '',
		currentName: '',
		currentType: '',
		nameChecked: false,
		nameTaken: false
	    },
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
	    this.uploadedFiles = []
	    this.uploadError = null
	},
	save(formData) {
	    this.currentStatus = STATUS_SAVING
	    upload(formData)
	        .then(x => {
		    this.uploadedFiles = [].concat(x)
		    this.currentStatus = STATUS_SUCCESS		    
		})
		.catch(err => {
		    this.uploadError = err.response
		    this.currentStatus = STATUS_FAILED
		})
	},
	filesChange(fieldName, fileList) {
	    const formData = new FormData()
	    if (!fileList.length) return

	    Array
	        .from(Array(fileList.length).keys())
		.map(x => {
		    formData.append(fieldName, fileList[x], fileList[x].name)
		})

	    this.save(formData)
	},
	checkName() {
	    console.log(this.file.name)
	    this.$v.$touch()
	    if (this.$v.$invalid) {
	        console.log('wrong')
	    } else {
	        this.resetFile()
	        api.post('midnightcore/setName', this.file)
		    .then((response) => {
		        console.log(response)
			if (response.data.exists === false) {
			    this.file.nameChecked = true
			} else {
			    this.file.nameTaken = true
			    this.file.nameChecked = true
			    this.file.currentName = this.file.name
			    this.file.currentType = this.file.type
			}
		    })
		    .catch((error) => {
		        console.log(error)
		    })
	    }
	},
	resetFile() {
	    this.file.nameChecked = false
	    this.file.nameTaken = false
	},
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
		</div>
	        <div class="wrapper-item">
	            <h4>Upload Files</h4>
		    <div class="dropbox">
			<select v-model="file.type" @change="resetFile()">
			    <option disabled value="">Choose File Type</option>
			    <option value="MidnightFonts">MidnightFonts</option>
			    <option value="MidnightMedia">MidnightMedia</option>
			</select>
			<input type="text" name="name_check" v-model="file.name" @input="resetFile()" placeholder="Name Of Your File">
			<BaseButton @click="checkName()" v-if="file.nameChecked === false && file.nameTaken === false">Check Name</BaseButton>
			<input type="file" multiple :name="uploadFieldName" :id="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length" accept=".ttf" class="input-file">
			<label :for="uploadFieldName" v-if="file.nameChecked !== false && file.nameTaken !== true">Choose a file</label>
			<p v-if="isSaving">Uploading..</p>
		    </div>
	        </div>
	    </div>
	</div>
    </div>
</template>

<style lang="scss">
@import '~@/design/index.scss';

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
