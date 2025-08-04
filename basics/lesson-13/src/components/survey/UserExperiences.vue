<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No stored experiences found.
      </p>
      <p v-else-if="!isLoading && error">
        {{ error.message || 'An error occurred while fetching experiences.' }}
      </p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      this.error = null;
      fetch(
        'https://vue-course-8b0f3-default-rtdb.firebaseio.com/surveyResults.json'
      )
        .then((response) => response.json())
        .then((data) => {
          this.results = [];
          for (const key in data) {
            const surveyResult = {
              id: key,
              name: data[key].name,
              rating: data[key].rating,
            };
            this.results.push(surveyResult);
          }
        })
        .catch((error) => {
          console.error('Error fetching experiences:', error);
          this.error = error;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
