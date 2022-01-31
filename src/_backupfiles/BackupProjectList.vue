<!--<template>
  <div>
    <div class="ml-2 mt-2">
      <b-row class="my-2">
        <b-form inline class="ml-3">
          <label for="search">Search</label>
          <b-col sm="10">
            <b-form-input label="search" id="search" type="text" v-model="search" />
          </b-col>
        </b-form>

        <b-form inline class="ml-4">
          <label for="filter">Filter by project type</label>
          <b-col class="sm-10">
            <b-form-select id="filter" v-model="filterByType">
              <option value>ALL</option>
              <option>MACHINE</option>
              <option>PARTS</option>
              <option>OTHER</option>
            </b-form-select>
          </b-col>
        </b-form>

        <b-form inline class="ml-4">
          <label for="filter">Filter by status</label>
          <b-col class="sm-10">
            <b-form-select id="filter" v-model="filterByStatus">
              <option value>ALL</option>
              <option>INITIAL_CALL</option>
              <option>NO_PICKUP</option>
              <option>IN_TALKS</option>
              <option>OFFER_SENT</option>
              <option>FOLLOW_UP</option>
              <option>MEETING_SET</option>
              <option>ORDER_OPEN</option>
              <option>ORDER_CLOSED</option>
              <option>KILLED</option>
            </b-form-select>
          </b-col>
        </b-form>
      </b-row>
    </div>
        <div v-for="project in paginatedData" :key="project.projectId" class="card mb-2 list-complete-item">
          <div class="card-header">{{ project.projectDescription}}</div>
          <b-row>
            <b-col><b-button @click="linkToDelete(project)" class="btn btn-light btn-sm ml-2">Delete</b-button></b-col>
            <b-col>{{ project.projectId }}</b-col>
            <b-col>{{ project.projectDate }}</b-col>
          <b-col>{{ project.customer.companyName}}</b-col>
          <b-col v-if="project.supplier">{{ project.supplier.companyName}}</b-col>
          <b-col>{{ project.lastStatus }}</b-col>
          </b-row>         
        </div>
 

    <div class="mb-5">
      <button :disabled="pageNumber == 0" class="btn btn-outline-secondary btn-sm ml-3" @click="prevPage">Prev</button>
      <button :disabled="pageNumber > pageCount - 2" class="btn btn-outline-secondary btn-sm ml-2" @click="nextPage">Next</button>
    </div>


    <DeleteProjectModal :propProject="tempProject" />

    <div></div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import DeleteProjectModal from "../crmcomponents/projects/DeleteProjectModal.vue";

export default {
  name: "ProjectList",
  data() {
    return {
      tempProject: {},
      pageNumber: 0,
      size: 20,
      search: "",
      filter: "",
    };
  },
  components: {
    DeleteProjectModal,
  },
  computed: {
    ...mapGetters([
      "allProjects",
      "projectById",
    ]),

    pageCount() {
      let l = this.filteredList.length,
        s = this.size;
      return Math.ceil(l / s);
    },
    paginatedData() {
      const start = this.pageNumber * this.size,
        end = start + this.size;
      return this.filteredList.slice(start, end);
    },

    searchList() {
      return this.sortedList.filter((project) => {
        return (project.projectDescription || project.supplier || project.customer)
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },

    *! lastStatus

    filteredList() {
      return this.sortedList.filter((project) => {
        return project.projectDescription.includes(
          this.filter.toUpperCase()
        );
      });
    },
    
    sortedList() {
      var tempSortedList = JSON.parse(JSON.stringify(this.allProjects));
      return tempSortedList;
    },
  },

  methods: {
    ...mapActions(["getAllProjects"]),

    setTempProject(item) {
      this.tempProject = item;
    },
    linkToDelete(tempProject) {
      console.log(tempProject);
      this.setTempProject(tempProject);
      this.$bvModal.show("delete-project-modal");
    },
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    },
    propComparator(prop) {
      return function (a, b) {
        return a[prop] - b[prop];
      };
    },
  },

  created() {
    this.getAllProjects();
    console.log("Bogdan" + this.allProjects)
    console.log("Danowski" + this.tempSortedList)
  },
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
-->