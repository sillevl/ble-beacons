import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';
import colors from 'vuetify/es5/util/colors';

const theme = {
  primary: colors.red.base,
  secondary: colors.teal.base,
  accent: colors.green.base,
  error: colors.deepOrange.base,
  warning: colors.orange.base,
  info: colors.yellow.base,
  success: colors.lightGreen.base,
};

Vue.use(Vuetify, {
  iconfont: 'md',
  theme,
});
