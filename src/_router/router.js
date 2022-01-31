import Vue from 'vue'
import Router from 'vue-router'
import Projects from '../components/Projects.vue'
import AddProject from '../components/AddProject.vue'
// import EditProject from '../crmcomponents/projects/EditProject.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {

            path: '/projects',
            name: 'Projects',
            component: Projects
        },
        {
            path: '/projects/add',
            name: 'addProject',
            component: AddProject
        },
        // {
        //     path: '/projects/edit',
        //     name: 'editProject',
        //     component: EditProject
        // },

    ]
})