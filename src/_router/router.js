import Vue from 'vue'
import Router from 'vue-router'
import Projects from '../components/Projects.vue'
import AddProject from '../components/AddProject.vue'
// import EditProject from '../components/EditProject.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {

            path: '/',
            name: 'Projects',
            component: Projects
        },
        {
            path: '/add',
            name: 'addProject',
            component: AddProject
        },
        // {
        //     path: '/edit',
        //     name: 'editProject',
        //     component: EditProject
        // },

    ]
})