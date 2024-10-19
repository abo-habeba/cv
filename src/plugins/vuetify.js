// plugins/vuetify.js

// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// Composables
import { createVuetify } from 'vuetify';

// Default theme configuration
const defaultTheme = localStorage.defaultTheme ? localStorage.defaultTheme : 'light';

export default createVuetify({
  theme: {
    defaultTheme,
    themes: {
      light: {
        variables: {
          'v-table-header-height': '40px',
          'v-table-row-height': '30px',
        },
      },
      dark: {
        variables: {
          'v-table-header-height': '40px',
          'v-table-row-height': '30px',
        },
      },
    },
  },
});
