<template>
  <v-app>
    <v-app-bar class="top_bar" app color="primary" dark>
      <router-link to="/"><v-icon>mdi-home</v-icon></router-link>
      <div id="page_title">Experimentos de fisica modulares</div>
      <img
        class="nav_image"
        alt="Universidad logo"
        src="./assets/logo_ui_blanco.png"
      />
    </v-app-bar>
    <router-view />
  </v-app>
</template>
<script>
export default {
  name: "App",
  data: () => ({
    //
  })
};
</script>
<style scoped>
.nav_image {
  position: fixed;
  right: 0;
  height: 50px;
  margin-right: 20px;
}
#page_title {
  text-align: center;
  font-size: 24px;
  margin-left: 20px;
}
</style>
<style>
.view_container {
  height: calc(100vh - 70px);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding-top: 70px;
}
div {
  box-sizing: border-box;
}
:root {
  --main-blue: #082d55;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--main-blue);
}
</style>
