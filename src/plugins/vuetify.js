/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  defaults: {
    global: {
      ripple: false
    },
    VAppBar: {
      // flat: true,
      // elevation: 10,
    },
    VBtn: {
      flat: true,
      minWidth: 0,
    },
    VCard: {
      flat: true,
      elevation: 0,
      border: true,
      VCardActions: {
        VBtn: {
          color: 'primary',
          variant: 'tonal'
        }
      }
    },
    VTextField: {
      variant: 'outlined',
      density: 'compact',
    }
    // VMenu: {
    //   VOverlay: {
    //     VCard: {
    //       flat: false,
    //       elevation: 10,
    //     },
    //   },
    // },
  },
  theme: {
    themes: {
      light: {
        colors: {
          'on-background': '#27272a',
          'on-surface': '#3f3f46',
          'on-primary': '#f0f9ff',
          'on-secondary': '#fafafa',
          'on-success': '#065f46',
          'on-warning': '#78350f',
          'on-error': '#fef2f2',
          'on-info': '#eef2ff',
          primary: '#0ea5e9',
          secondary: '#a1a1aa',
          error: '#dc2626',
          info: '#818cf8',
          success: '#34d399',
          warning: '#f59e0b',
        },
      },
      dark: {
        dark: true,
        colors: {
          'on-background': '#27272a',
          'on-surface': '#3f3f46',
          'on-primary': '#f0f9ff',
          'on-secondary': '#fafafa',
          'on-success': '#065f46',
          'on-warning': '#78350f',
          'on-error': '#fef2f2',
          'on-info': '#eef2ff',
          primary: '#0ea5e9',
          secondary: '#a1a1aa',
          error: '#dc2626',
          info: '#818cf8',
          success: '#34d399',
          warning: '#f59e0b',
        },
      },
    },
  },
})
