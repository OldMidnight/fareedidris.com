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
  <div
    :class="{
      'exam-paper elevation-1 ma-3 pa-3': $mq !== 'phone',
      'm-exam-paper py-5 px-2': $mq === 'phone'
    }"
    class="d-flex justify-space-around align-center"
  >
    <p role="moduleCode" class="ma-0 font-weight-light text-center">Module Code: {{ exam_paper.module_code }}</p>
    <v-divider vertical></v-divider>
    <p role="year" class="ma-0 font-weight-light text-center">Year: {{ exam_paper.year}}</p>
    <v-divider vertical></v-divider>
    <v-dialog width="700" scrollable v-model="exam_paper_dialog">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="info" :text="$mq === 'phone'" v-bind="attrs" v-on="on">Open</v-btn>
      </template>
      <v-card>
        <v-card-title :class="{ 'pt-2': $mq === 'phone' }">Exam Paper</v-card-title>
        <v-card-subtitle :class="{ 'pb-1': $mq === 'phone' }">
          Code: {{ exam_paper.module_code }}
          Year: {{ exam_paper.year }}
        </v-card-subtitle>
        <v-divider></v-divider>
        <v-card-text :class="{ 'px-1': $mq === 'phone' }">
          <v-container :class="{ 'pa-0': $mq === 'phone' }" fluid>
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