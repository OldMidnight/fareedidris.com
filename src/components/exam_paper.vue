<script>
import pdf from 'vue-pdf'
export default {
  components: { pdf },
  props: {
    exam_paper: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      exam_paper_dialog: false,
      src: null,
      pages_num: undefined
    }
  },
  created() {
    this.src = pdf.createLoadingTask(this.exam_paper.link)
  },
  mounted() {
    this.src.then(pdf => {
      this.pages_num = pdf.numPages
    })
  }
}
</script>

<template>
  <div :class="{ 'exam-paper elevation-1 ma-3 pa-3': this.$mq !== 'phone', 'm-exam-paper py-5 px-2': this.$mq === 'phone' }" class="d-flex justify-space-around align-center">
    <span class="font-weight-light text-center">Module Code: {{ exam_paper.module_code }}</span>
    <v-divider vertical></v-divider>
    <span class="font-weight-light text-center">Year: {{ exam_paper.year}}</span>
    <v-divider vertical></v-divider>
    <v-btn color="info" :text="this.$mq === 'phone'" @click="exam_paper_dialog = true">Open</v-btn>
    <v-dialog v-model="exam_paper_dialog" width="700" persistent scrollable>
      <v-card>
        <v-card-title :class="{ 'pt-2': this.$mq === 'phone' }">Exam Paper</v-card-title>
        <v-card-subtitle :class="{ 'pb-1': this.$mq === 'phone' }">
          Code: {{ exam_paper.module_code }}
          Year: {{ exam_paper.year }}
        </v-card-subtitle>
        <v-divider></v-divider>
        <v-card-text :class="{ 'px-1': this.$mq === 'phone' }">
          <v-container :class="{ 'pa-0': this.$mq === 'phone' }" fluid>
            <v-sheet>
              <pdf v-for="num in pages_num" :key="num" :src="src" :page="num" style="width: 100%"></pdf>
            </v-sheet>
          </v-container>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="error" outlined @click="exam_paper_dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style lang="scss" scoped>
.exam-paper {
  border-radius: 5px;
  width: 80%;
}

.m-exam-paper {
  width: 100%;
  border-bottom: 1px solid #e6e6e6;
}
</style>