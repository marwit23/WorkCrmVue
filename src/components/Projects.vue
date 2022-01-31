<template>
  <div>
    
    <!-- NAVBAR -->

    <!-- <ProjectNavbar
      @updateIndustry="receiveIndustry"
      @updateStatus="receiveStatus"
      @updateSearch="receiveSearch"
      @updateSortParam="receiveSortParam"
      @updateSortAsc="receiveSortAsc"
    /> -->

    <!-- SIDEBAR -->

    <!-- <ProjectSidebar @updateCommodity="receiveCommodity" /> -->

    <!-- SPLIT GRID -->
<!-- 
    <SplitGrid class="sb_split-grid">
    <SplitGridArea> -->
    <!-- PROJECT LIST -->

    <ProjectList />

    
    <!-- :propProjectList="searchList" tempProject -->
    <!-- </SplitGridArea>
      <SplitGridGutter />
    <SplitGridArea> -->
    <!-- PROJECT PANE -->
<!-- 
    <ProjectPane :propProject="tempProject" /> -->
    <!-- </SplitGridArea>
    </SplitGrid> -->

    <!-- DELETE PROJECT MODAL -->

    <!-- <DeleteProjectModal :propProject="tempProject" /> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import DeleteProjectModal from "./projects/DeleteProjectModal.vue";
import ProjectList from "./projects/ProjectList";
// import ProjectPane from "./projects/ProjectPane";
// import ProjectNavbar from "./projects/ProjectNavbar";
// import ProjectSidebar from "./projects/ProjectSidebar";
// import { SplitGrid, SplitGridArea, SplitGridGutter } from "vue-split-grid";

export default {
  name: "ProjectList",
  data() {
    return {
      receivedSearch: "",
      receivedStatus: "",
      receivedIndustry: "",
      receivedCommodity: "",
      receivedSortParam: "",
      receivedSortAsc: false,
    };
  },
  components: {
    // DeleteProjectModal,
    ProjectList,
    // ProjectPane,
    // ProjectNavbar,
    // ProjectSidebar,
    // SplitGrid,
    // SplitGridArea,
    // SplitGridGutter,
  },
  computed: {
    ...mapGetters(["allProjects", "projectById"]),

    searchList() {
      return this.filterByStatus.filter((project) => {
        return (
          project.projectDescription ||
          project.supplier ||
          project.customer
        )
          .toLowerCase()
          .includes(this.receivedSearch.toLowerCase());
      });
    },

    filterByStatus() {
      return this.filterByIndustry.filter((project) => {
        return project.statusType.includes(this.receivedStatus.toUpperCase());
      });
    },

    filterByIndustry() {
      return this.filterByCommodity.filter((project) => {
        return project.industryType.includes(
          this.receivedIndustry.toUpperCase()
        );
      });
    },

    filterByCommodity() {
      return this.sortedList.filter((project) => {
        return project.commodityType.includes(
          this.receivedCommodity.toUpperCase()
        );
      });
    },

    // sprawdzić i usunąć na końcu
    sortedList() {
      var tempSortedList = JSON.parse(JSON.stringify(this.allProjects));
      if (this.sortAsc)
        tempSortedList.sort(this.propComparator(this.receivedSortParam));
      else
        tempSortedList
          .sort(this.propComparator(this.receivedSortParam))
          .reverse();
      return tempSortedList;
    },
  },

  methods: {
    ...mapActions(["getAllProjects"]),

    propComparator(prop) {
      return function (a, b) {
        return a[prop] - b[prop];
      };
    },

    receiveStatus(value) {
      this.receivedStatus = value;
    },

    receiveIndustry(value) {
      this.receivedIndustry = value;
    },

    receiveSearch(value) {
      this.receivedSearch = value;
    },

    receiveSortParam(value) {
      this.receivedSortParam = value;
    },

    receiveSortAsc(value) {
      this.receivedSortAsc = value;
    },

    receiveCommodity(value) {
      this.receivedCommodity = value;
    },
  },

  created() {
    // this.getAllProjects();
    // console.log("Bogdan" + this.allProjects);
    // console.log("Danowski" + this.tempSortedList);
  },
};
</script>

<style lang="scss" scoped>
</style>