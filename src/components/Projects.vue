<template>
  <div class="fullscreen">
    <!-- NAVBAR -->

    <b-row>
      <ProjectNavbar
        @updateIndustry="receiveIndustry"
        @updateStatus="receiveStatus"
        @updateType="receiveType"
        @updateSource="receiveSource"
        @updateSearch="receiveSearch"
        @updateSortParam="receiveSortParam"
        @updateSortAsc="receiveSortAsc"
      />
    </b-row>
    <b-row>
      <b-col sm="1" class="col-narrow">

        <ProjectSidebar @updateCommodity="receiveCommodity" @updateIndustry="receiveIndustry" />
      </b-col>

      <b-col sm="5">
        <!-- PROJECT LIST -->

        <ProjectList :propProjectList="searchList" @updateTempProject="receiveTempProject" />
      </b-col>

      <b-col sm="6">
        <!-- PROJECT PANE -->

        <ProjectPane :propProject="receivedTempProject" />
      </b-col>
    </b-row>

    <!-- DELETE PROJECT MODAL -->

    <DeleteProjectModal :propProject="receivedTempProject" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DeleteProjectModal from "./projects/DeleteProjectModal.vue";
import ProjectList from "./projects/ProjectList.vue";
import ProjectPane from "./projects/ProjectPane";
import ProjectNavbar from "./projects/ProjectNavbar";
import ProjectSidebar from "./projects/ProjectSidebar";

export default {
  name: "Projects",
  data() {
    return {
      receivedSearch: "",
      receivedStatus: "",
      receivedType: "",
      receivedIndustry: "",
      receivedSource: "",
      receivedCommodity: "",
      receivedSortParam: "statusDate",
      receivedSortAsc: false,
      receivedTempProject: {},
    };
  },
  components: {
    DeleteProjectModal,
    ProjectList,
    ProjectPane,
    ProjectNavbar,
    ProjectSidebar,
  },
  computed: {
    ...mapGetters(["allProjects", "projectById"]),

    alertList() {
      return this.sortedList.filter(project => {return project.flag})
    },


    tenderList() {
      return this.sortedList.filter(project => {return project.sourceType === "TENDERS"})
    },

    searchList() {
      var tempList;

      if (this.receivedStatus === "ALERTS" && this.receivedSearch==="") tempList = this.sortedList.filter(project => project.flag)
      else if (this.receivedStatus === "MEETING" && this.receivedSearch==="") tempList = this.sortedList.filter(project =>  project.meetingType != null && project.meetingType.includes("MEETING"))
      else if (this.receivedStatus === "TENDERS" && this.receivedSearch==="") tempList = this.sortedList.filter(project => project.sourceType === "TENDERS" && !project.statusType.includes('KILLED'))
      else if (this.receivedSearch === "") tempList = this.filterByStatus;
      else tempList = this.sortedList;

      return tempList.filter((project) => {
        var notNullArr = Object.values(project).filter((x) => x != null);
        return notNullArr.some((x) =>
          x.toString().toUpperCase().includes(this.receivedSearch.toUpperCase())
        );
      });
    },

    filterByStatus() {
      return this.filterBySource.filter((project) => {
        return project.statusType.includes(this.receivedStatus.toUpperCase());
      });
    },

    filterBySource() {
      return this.filterByIndustry.filter((project) => {
        if (this.receivedSource === "XYZ")
          return project.sourceType !== "MAILING";
        else if (this.receivedSource === "MAILING")
          return project.sourceType.includes(this.receivedSource.toUpperCase());
        else return this.filterByIndustry;
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

    sortedList() {
      var tempSortedList = JSON.parse(JSON.stringify(this.allProjects));
      if (this.receivedSortAsc)
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
      function dateToNum(d) {
        d = d.split("-");
        return Number(d[0] + d[1] + d[2]);
      }

      if (this.receivedSortParam === "statusDate") {
        return function (a, b) {
          return dateToNum(a[prop]) - dateToNum(b[prop]);
        };
      } else
        return function (a, b) {
          return a[prop] - b[prop];
        };
    },

    receiveStatus(value) {
      this.receivedStatus = value;
    },

    receiveType(value) {
      this.receivedType = value;
    },

    receiveSource(value) {
      this.receivedSource = value;
    },

    receiveIndustry(value) {
      this.receivedIndustry = value;
      // console.log("filterByStatus" + this.filterByStatus);
      // console.log("Searchlist" + this.searchList);
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

    receiveTempProject(value) {
      this.receivedTempProject = value;
    },
  },

  created() {
    console.log("Projects - searchList" + this.searchList);
  },
};
</script>

<style scoped>
.col-narrow {
  width: 65px;
}

/* .fullscreen {
  max-height:100vh;
  overflow-y: auto;
  overflow-x: hidden;
} */
</style>