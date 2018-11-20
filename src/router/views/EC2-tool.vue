<script>
export default {
    name: 'ec2',
    data() {
        return {
	    anon: 'not_anon',
	    student_num: '',
	    lecturer: '',
	    message_subject: '',
	    message: '',
	    urgent: ''
	}
    },
}
</script>

<template>
    <div id="view-container">
        <div id="tool-wrapper">
	    <div id="tool-header">
	        <h3>Unnamed EC2 Lecturer Communication Tool</h3>
		<p>Fill in the form below to send a message to a lecturer</p>
	    </div>
	    <div id="tool-body">
	        <div class="radio-input-container">
		    <div class="radio-input">
	                <label for="not_anon">Use Student Number</label>
	                <input type="radio" name="not_anon" value="not_anon" v-model="anon" checked>
		    </div>
		    <div class="radio-input">
		        <label for="is_anon">Send Anonymously*</label>
		        <input type="radio" name="is_anon" value="is_anon" v-model="anon">
		    </div>
		</div>
		<input type="number" name="student_num" v-if="anon === 'not_anon'" v-model.number="student_num" placeholder="Student Number..." maxlength=8 required>
		<select v-model="lecturer">
		    <option disabled value="">Please select one</option>
		    <option>Rob Brennan: CA222 - Enterprise Information Systems</option>
		    <option>Stephen Blott: CA277 - Programming Fundamentals II</option>
		    <option>Renaat Verbruggen: CA228 - Systems Analysis/Business Systems Analysis</option>
		    <option>Alistair Sutherland: CA200 - Quantitative Analysis For Business Decisions</option>
		    <option>Jane Kernan: CA227 - Business Databases Management I</option>
		</select>
		<input type="text" name="message_subject" placeholder="Message Subject..." v-model="message_subject" required>
		<textarea name="message" v-model="message" placeholder="Your Message..." required></textarea>
		<div class="radio-input-container">
		    <div class="radio-input">
		        <label for="urgent">Urgent Message</label>
		        <input type="checkbox" name="urgent" value="is_urgent" v-model="urgent">
		    </div>
		</div>
		<BaseButton>Send Message</BaseButton>
	    </div>
	    <div id="tool-footer">
	        <p>* - Message that are sent anonymously will be viewed by myself to ensure it complies with DCU's email guidelines. Messages not sent anonymously will not be viewed by me but will go through validation for syntax and punctuation errors.</p>
	    </div>
	</div>
    </div>
</template>

<style lang="scss">
@import '~@/design/index.scss';

.radio-input-container {
    margin: 5px;
}

input[type=number], input[type=text], select {
    border: 1px solid;
    border-radius: 20px;
    height: 50px;
    width: 75%;
    margin: 5px;
    padding-left: 20px;
}

textarea {
    width: 75%;
    height: 200px;
    margin: 5px;
    padding-left: 20px;
}

#view-container {
    margin-left: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 85%;
}

#tool-wrapper {
    height: 90%;
    width: 45%;
    padding: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    border-radius: %border-rounded-large;
    @extend %shadow-large;
}

#tool-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
}

#tool-body {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}


#tool-footer {
    display: flex;
    margin-top: 10px;
    padding-left: 20%;
    padding-right: 20%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    p {
        font-size: 12px;
	color: #767676;
    }
}
</style>

