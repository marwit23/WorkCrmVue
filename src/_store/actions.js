import axios from 'axios'
import router from '../_router/router'


const serverUrl = 'http://localhost:8080'
const projects = 'projects'
const projectListUrl = `${serverUrl}/${projects}`

export default {

    // USER------------------------------------------------------------------------------------------------

    setUser({ commit }, payload) {
        commit('setUser', payload)
    },

    // PROJECTS---------------------------------------------------------------------------------------------

    async getAllProjects({ commit }) {
        const response = await axios.get(
            projectListUrl
        );
        console.log(response)
        commit('setProjects', response.data)
    },

    async getProject({ commit }, id) {
        const response = await axios.get(
            `${projectListUrl}/${id}`
        );
        console.log(response)
        commit('setTempProject', response.data)
    },

    async addProject({ commit }, project) {
        const response = await axios({
            method: 'post',
            url: projectListUrl,
            data: project,
            auth: {
                username: 'admin',
                password: 'admin'
            }
        })
        console.log(response.data)
        commit('newRecipe', response.data);
        if (response.status === 200) {
            router.push({ path: '/projects' });
        }
    },

    async deleteProjects({ commit }, id) {
        await axios({
            method: 'delete',
            url: `${projectListUrl}/${id}`,
            auth: {
                username: 'admin',
                password: 'admin'
            }
        });
        commit('deleteProject', id);
    },

    async editProject({ commit }, project) {
        const response = await axios({
            method: 'put',
            url: `${projectListUrl}/${project.projectId}`,
            data: project,
            auth: {
                username: 'admin',
                password: 'admin'
            }
        });
        commit('updateRecipe', response.data);
        if (response.status === 200) {
            router.push({ path: '/projects' });
        }
    },


}