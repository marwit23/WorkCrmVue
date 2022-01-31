export default {

    // USER------------------------------------------------------------------------------------------------

    setUser: (state, user) => state.user = user,

    // PROJECTS---------------------------------------------------------------------------------------------

    setProjects: (state, projects) => state.projects = projects,
    setTempProject: (state, project) => state.tempProject = project,
    newProject: (state, project) => state.projects.push(project),
    deleteProject(state, id) {
        const index = state.projects.findIndex(project => project.projectId == id)
        state.projects.splice(index, 1)
    },
    updateProject: (state, project) => {
        const index = state.projects.findIndex(tempProject => tempProject.projectId === project.projectId);
        state.projects.splice(index, 1, project);
    },

};


