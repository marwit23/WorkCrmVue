<template>
  <div id="app">
    <div v-if="allProjects.length < 1" class="app-message text-center">
      <p>
        Data is loading...If this is your first time launching the app, it may take about 30 seconds for the
        database to wake up.
      </p>
      <b-spinner label="Spinning"></b-spinner>
    </div>
    <div v-else>
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {},

  data(){
    return {

    }
  },
  computed: {
    ...mapGetters(["allProjects"]),
  },
  methods: {
    ...mapActions(["getAllProjects"]),
  },
  created() {
    this.getAllProjects();
    console.log("App - all projects" + this.allProjects);
  },
};
</script>

<style>

#app {
  font-size: 90%;
  height: 100vh;
}

.app-hover:hover {
  cursor: pointer;
}

.app-message {
  margin-top: 50px;
}

.app-happy {
  max-height: 50px;
  max-width: 50px;
  margin-bottom: 25px;
}

.border-bottom {
  border-bottom: 1px solid gray;
}

.border-top-hidden {
  border-top: hidden;
}

.custom-width-1 {
  max-width: 80%;
}

.text-small {
  font-size: 85%;
}
</style>
