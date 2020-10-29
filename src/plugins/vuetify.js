import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '082d55', // #E53935
        secondary: colors.grey.base, // #FFCDD2
        accent: colors.indigo.base, // #3F51B5
      },
    },
  },
})
