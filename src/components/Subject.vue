<template>
  <div class="subject">
    <h2>{{ title }}</h2>
    <v-btn
      v-for="item in experiments"
      :key="item.name"
      depressed
      color="primary"
      class="button"
      @click="goNext(item)"
      >{{ item.name }}</v-btn
    >
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "Subject",
  props: ["title", "experiments"],
  mounted() {
    console.log(this.experiments);
  },
  methods: {
    goNext(experiment) {
      this.setExperiment(experiment)
      this.$router.push({ name: "Experiment" });
    },
    ...mapActions(['setExperiment'])
  }
};
</script>

<style scoped>
.subject {
  border: solid 2px var(--main-blue);
}
.button {
  border: solid 2px var(--main-blue);
  background-color: #ffffff;
  color: var(--main-blue);
  margin: 5px;
}
</style>
