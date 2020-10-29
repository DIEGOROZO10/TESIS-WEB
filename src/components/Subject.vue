<template>
  <div class="subject">
    <h2>{{ title }}</h2>
    <v-btn v-for="item in experiments" :key="item" depressed color="primary" class="button" @click="goNext(boton1)">{{ item }}</v-btn>
  </div>
</template>

<script>
export default {
  name: "Subject",
  props: ["title", "experiments"],
  mounted () {
    console.log(this.experiments)
  },
  methods: {
    goNext (name) {
      this.$router.push({name: 'Experiment', params: {name: name}})
    }
  }
}
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
