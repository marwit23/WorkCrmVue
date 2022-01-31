export default {

   // USER------------------------------------------------------------------------------------------------

    getUser: (state) => {
        return state.user
    },

    // PROJECTS---------------------------------------------------------------------------------------------

    allProjects: (state) => {
        return state.projects
    },
    projectById: (state) => (id) => {
        return state.projects.find(project => project.projectId === id)
    },
    tempProject: (state) => {
        return state.tempProject
    },

}

