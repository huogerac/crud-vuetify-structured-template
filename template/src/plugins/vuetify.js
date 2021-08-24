import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

import {
  VSnackbar,
  VBtn,
  VIcon,
  VMenu,
  VAvatar,
  VList,
  VListItem,
  VListItemAvatar,
  VListItemContent,
  VListItemTitle,
  VListItemSubtitle,
  VSubheader,
} from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VSnackbar,
    VBtn,
    VIcon,
    VMenu,
    VAvatar,
    VList,
    VListItem,
    VListItemAvatar,
    VListItemContent,
    VListItemTitle,
    VListItemSubtitle,
    VSubheader,
  },
})

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },
})
