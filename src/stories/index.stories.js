/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import SvgIcon from '../components/SvgIcon.vue'

storiesOf('Button', module)
  .add('svg icon', () => ({
    components: { MyButton },
    template: '<svg-icon name="baseline-error_outline-24px"></svg-icon>',
    methods: { action: action('clicked') }
  }))
