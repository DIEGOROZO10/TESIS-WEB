<template>
  <div class="view_container">
    <div class="subjects-container">
    <Subject class="subject" title="Magnetismo" :experiments="['magnetismo 1', 'magnetismo 2']" />
    <Subject class="subject" title="Mecanica" />
    <Subject class="subject" title="Electronica" />
    <Subject class="subject" title="Ondas" />
  </div>
  </div>
</template>

<script>
import Subject from '../components/Subject.vue'

export default {
  name: 'Home',
  components: {
    Subject
  },
  methods: {
    ejemplo() {
      console.log('EJEMPLO')
    }
  }
}
</script>

<style>
.subject {
  width: 200px;
}
.subjects-container {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  gap: 40px;
  justify-items: center;
  align-items: center;
}
</style>
