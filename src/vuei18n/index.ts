import { createI18n } from 'vue-i18n'
import zn from './langs/ZN'
import en from './langs/EN'

const i18n = createI18n({
  locale: 'zn',
  allowComposition: true, // you need to specify that!
  messages: {
    zn,
    en
  },
  globalInjection:true
})
export default  i18n