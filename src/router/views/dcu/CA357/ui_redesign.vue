<script>
import ExamPaper from '@/components/exam_paper'
export default {
  components: { ExamPaper },
  data() {
    return {
      exam_papers: null,
      order: '1',
      search_term: '',
      publicPath: process.env.BASE_URL
    }
  },
  created() {
    // Generate Sample Data to use as potential exam papers
    const current_year = new Date().getFullYear()
    let year = 2013
    const exam_papers = []
    const module_codes = ['CA348', 'CA349', 'CA357', 'CA358']
    for ( const module of module_codes) {
      while (year !== current_year) {
        exam_papers.push({ module_code: module, year: year, link: `${this.publicPath}19CA357.pdf` })
        year += 1
      }
      year = 2013
    }
    this.exam_papers = exam_papers
  },
  computed: {
    getSortedPapers() {
      if (this.order === '0') {
        // If sorting by module code simply filter based on search term
        return this.exam_papers.filter(this.sortPapers)
      } else {
        // If sorting by year, sort list of exam papers by year before filtering by search term
        // convert data to JSON for a un-reactive copy
        let exam_papers = JSON.stringify(this.exam_papers)
        exam_papers = JSON.parse(exam_papers).sort((paper_1, paper_2) => {return paper_1.year - paper_2.year})
        return exam_papers.filter(this.sortPapers)
      }
    }
  },
  methods: {
    sortPapers(paper) {
      // If search term is 0, do not sort anything and return false
      if (this.search_term.length > 0) {
        // Check if search term is contained in exam paper sort code
        return paper.module_code.includes(this.search_term.toUpperCase())
      } else {
        return false
      }
    }
  }
}
</script>

<template>
  <v-container class="view-container pa-0" fluid>
    <v-layout
      class="view-layout d-flex flex-column align-center justify-center"
      fill-height
    >
      <v-flex
        v-if="$mq !== 'phone'"
        class="dcu-header d-flex flex-column align-center justify-center"
      >
        <span class="dcu-text-color display-2 font-weight-light">
          DCU HEADER
        </span>
      </v-flex>
      <v-flex
        :class="{
          'dcu-content': $mq !== 'phone',
          'm-dcu-content': $mq === 'phone'
        }" 
        class="d-flex justify-center align-center"
      >
        <v-flex v-if="$mq !== 'phone'" class="dcu-nav d-flex align-center">
          <span class="dcu-text-color text-center display-1 font-weight-light">
            DCU NAVIGATION
          </span>
        </v-flex>
        <v-flex
          :class="{
            'main-content': $mq !== 'phone',
            'm-main-content': $mq === 'phone'
          }"
          class="d-flex flex-column justify-center align-center elevation-3 pa-5"
        >
          <v-flex class="past-papers-header d-flex flex-column align-center justify-center">
            <span
              :class="{ 'mb-2': $mq === 'phone' }"
              class="dcu-text-color display-1 text-center font-weight-light"
            >
              Past exam papers
            </span>
            <span class="font-weight-light text-center">
              Start typing your module code to begin searching
            </span>
          </v-flex>
          <v-flex class="ordering d-flex flex-column align-center justify-center mt-6">
            <span>Order By:</span>
            <v-radio-group v-model="order" row class="ma-0">
              <v-radio label="Module Code" value="0"></v-radio>
              <v-radio label="Year" value="1"></v-radio>
            </v-radio-group>
          </v-flex>
          <v-flex
            :class="{
              'search-bar': $mq !== 'phone',
              'm-search-bar': $mq === 'phone'
            }"
            class="my-3"
          >
            <v-text-field
              v-model="search_term"
              prepend-inner-icon="mdi-magnify"
              outlined
              label="Module Code"
            ></v-text-field>
          </v-flex>
          <div class="past-papers-container elevation-2">
            <div class="past-papers-wrapper d-flex flex-column align-center">
              <ExamPaper v-for="(paper, index) in getSortedPapers" :key="index" :exam_paper="paper" />
              <span
                v-if="search_term.length === 0"
                :class="{'mt-5': $mq === 'phone' }"
                class="dcu-text-color headline font-weight-light"
              >
                Enter a module code to begin
              </span>
            </div>
          </div>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style lang="scss" scoped>
.test {
  border: 1px solid red;
}

.view-container {
  height: 100%;
  background-color: #e6e6e6;
}

.dcu-header {
  width: 100%;
  min-height: 22%;
}

.dcu-content {
  width: 100%;
  max-height: 78%;
  min-height: 78%;
  border-top: 1px solid #777;
  padding: 0 7%;
}

.m-dcu-content {
  width: 100%;
  height: 100%;
}

.dcu-nav {
  width: 30%;
  height: 100%;
}

.main-content {
  width: 70%;
  height: 100%;
  background-color: white;
}

.m-main-content {
  width: 100%;
  height: 100%;
  background-color: white;
}

.past-papers-header {
  height: 15%;
  width: 100%;
}

.ordering {
  height: 10%;
  width: 100%;
}

.search-bar {
  height: 10%;
  width: 40%;
}

.m-search-bar {
  height: 10%;
  width: 80%;
}

.past-papers-container {
  height: 60%;
  width: 100%;
  position: relative;
}

.past-papers-wrapper {
  width: 100%;
  max-height: 100%;
  min-height: 100%;
  position: absolute;
  overflow: auto
}
</style>