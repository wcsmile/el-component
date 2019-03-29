import Vue from 'vue'
import Router from 'vue-router'
import orderComment from '../pages/comment/orderComment.vue';
import remark from '../pages/comment/children/remark.vue';


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/comment/remark',
        name: 'remark',
        component: remark,
    }]
})