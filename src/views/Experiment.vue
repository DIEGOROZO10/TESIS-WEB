<template>
  <div class="view_container">
    <h2>{{name}}</h2>
    <h3>Instrucciones</h3>
    <div>
      Estas son las instrucciones para un experimento, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas omnis ad magnam id libero officiis accusamus? Quo blanditiis, impedit error natus quod veritatis? Ipsum magnam sunt, accusamus obcaecati omnis quos.
    </div>
  </div>
</template>

<script>
export default {
  name: 'Experiment',
  props: ['name'],
  methods: {
    ejemplo() {
      console.log('EJEMPLO')
    }
  }
}
</script>
<style scoped>
.view_container {
  justify-content: flex-start !important;
}
</style>
