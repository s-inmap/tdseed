import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/mul',
            name: 'mul',
            component: (resolve) => require(['./mul-chooser.vue'], resolve)
        },
        {
            path: '/map-modal',
            name: 'map-modal',
            component: (resolve) => require(['./map-modal.vue'], resolve)
        },
        {
            path: '/filter-city',
            name: 'filter-city',
            component: (resolve) => require(['./filter-city.vue'], resolve)
        },
        {
            path: '/table-plus',
            name: 'table-plus',
            component: (resolve) => require(['./table-plus.vue'], resolve)
        },
        {
            path: '/select-group',
            name: 'select-group',
            component: (resolve) => require(['./router-select-group.vue'], resolve)
        },
        {
            path: '/city-plus',
            name: 'city-plus',
            component: (resolve) => require(['./city-plus.vue'], resolve)
        },
        {
            path: '/city-content',
            name: 'city-content',
            component: (resolve) => require(['./city-content.vue'], resolve)
        },
        {
            path: '/swipers',
            name: 'swipers',
            component: (resolve) => require(['./swipers.vue'], resolve)
        },
        {
            path: '/basic-grid',
            name: 'basic-grid',
            component: (resolve) => require(['./ex-basic-grid.vue'], resolve)
        },
        {
            path: '/basic-tab',
            name: 'basic-tab',
            component: (resolve) => require(['./ex-basic-tab.vue'], resolve)
        },
        {
            path: '/basic-bar',
            name: 'basic-bar',
            component: (resolve) => require(['./ex-basic-bar.vue'], resolve)
        },
        {
            path: '/top-rank',
            name: 'top-rank',
            component: (resolve) => require(['./ex-top-rank.vue'], resolve)
        },
        {
            path: '/bar-table',
            name: 'bar-table',
            component: (resolve) => require(['./ex-bar-table.vue'], resolve)
        }
    ]
})
