import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitterSquare, faTwitch, faGithubSquare } from '@fortawesome/free-brands-svg-icons'



config.autoAddCss = false
library.add(faTwitterSquare, faTwitch, faGithubSquare)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})