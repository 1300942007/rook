import Vue from 'vue'
import Router from 'vue-router'
import RickIndex from '@/router/rick/index'

const baseRoutes = []
const routes = baseRoutes.concat(
    RickIndex
)

Vue.use(Router)
export default new Router({
    routes: routes
})
