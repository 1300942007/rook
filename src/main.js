// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Base from '__ASS__/js/base.js'
import Request from '__ASS__/js/request.js'
import Alert from '__ASS__/js/alert.js'

Vue.prototype.$base = Base
Vue.prototype.$url = Request.url
Vue.prototype.$get = Request.get
Vue.prototype.$post = Request.post
Vue.prototype.$alert = Alert

import $ from "zepto"
import BaseLink from '__VIEW__/base/link'
import BaseScroll from '__VIEW__/base/scroll'
import BaseHead from '__VIEW__/base/head'
import BaseFoot from '__VIEW__/base/foot'
Vue.component("BaseLink",BaseLink);
Vue.component("BaseScroll",BaseScroll);
Vue.component("BaseHead",BaseHead);
Vue.component("BaseFoot",BaseFoot);

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
