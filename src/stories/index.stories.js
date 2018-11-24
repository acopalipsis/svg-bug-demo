/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Vue from 'vue'

import MyButton from '../components/MyButton.vue'
import SvgIcon from '../components/SvgIcon.vue'

storiesOf('Button', module)
  .add('with text', () => ({
    components: { 
      MyButton,
      svgIcon: Vue.component('svg-icon', SvgIcon)
    },
    template: '<my-button @click="action"><svg-icon name="baseline-error_outline-24px"></svg-icon></my-button>',
    methods: { action: action('clicked') }
  }));
