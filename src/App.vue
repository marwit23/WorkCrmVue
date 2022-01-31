<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {

  },
  computed: {
    ...mapGetters(["allProjects"]),
  },
  methods: {
    ...mapActions([
      "getAllProjects",
    ]),
  },
  created() {
    // this.getAllProjects();
    // console.log("huju" + this.allProjects);
  },
};
</script>

<style>
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
