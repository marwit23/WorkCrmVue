<template>
  <div>
    Huy
    <!-- <div
      v-for="project in propProjectList"
      :key="project.projectId"
      class="card mb-2 list-complete-item"
      @click="setTemporaryProject(project)"
    >
      <b-row>
        <b-col>{{ project.projectId }}</b-col>
        <b-col>{{ project.projectTitle }}</b-col>
      </b-row>
      <b-row>
        <b-col>{{ project.customer}}</b-col>
        <b-col>{{ project.supplier}}</b-col>
      </b-row>
    </div> -->
  </div>
</template>
<script>
export default {
  name: "ProjectList",

  // data() {
  //   return {
  //     temporaryProject: {},
  //   };
  // },

  // props: {
  //   propProjectList: [],
  // },

  // methods: {
  //   setTempProject(item) {
  //     this.temporaryProject = item;
  //   },
  // },
};
</script>
<style>
.dark-gray {
  color: darkgray;
}

.smaller-font {
  font-size: 90%;
}

.project-card {
  border: 1px solid gray;
}
</style>
