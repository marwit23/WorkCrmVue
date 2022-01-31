<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <!-- LOGO -->

    <div id="logo">
      <!-- <img src="../_assets/logo3.png" alt="logo" class="navbar-brand app-logo" /> -->
    </div>

    <!-- FILTER BY INDUSTRY -->

   <b-form inline class="ml-4">
          <label for="filter">Industry</label>
          <b-col class="sm-10">
            <b-form-select id="filter" v-model="selectedIndustry" @change="selectIndustry">
              <option value="">ALL</option>
              <option>Pharma</option>
              <option>Food</option>
              <option>Cosmetics</option>
              <option>Other</option>
            </b-form-select>
          </b-col>
        </b-form>

    <!-- FILTER BY STATUS -->

    <b-form inline class="ml-4">
          <label for="filter">Status</label>
          <b-col class="sm-10">
            <b-form-select id="filter" v-model="selectedStatus" @change="selectStatus">
              <option value="">ALL</option>
              <option>Cold</option>
              <option>Warm</option>
              <option>Hot</option>
              <option>Killed</option>
              <option>Killed_And_Dead</option>
            </b-form-select>
          </b-col>
        </b-form>

        <!-- SORT -->

        <!-- <b-form inline class="ml-4">
          <label for="sort">Sort by</label>
          <b-col class="sm-10">
            <b-input-group>
              <b-form-select id="sortParam" v-model="sortParam">
                <option value="projectId" selected>Id</option>
                <option value="createdDate">Shelf life</option>
                <option value="statusType">Available quantity</option>
              </b-form-select>
              <template #append>
                <b-button class="btn btn-light" @click="sortAsc = !sortAsc">
                  <b-icon v-if="sortAsc" icon="chevron-up"></b-icon>
                  <b-icon v-else icon="chevron-down"></b-icon>
                </b-button>
              </template>
            </b-input-group>
          </b-col>
        </b-form> -->

    <!-- SEARCH -->
<!-- 
    <div>
      <b-form inline class="ml-3">
        <label for="search">Search</label>
        <b-col sm="10">
          <b-form-input label="search" id="search" type="text" v-model="search" />
        </b-col>
      </b-form>
    </div> -->
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",

  data() {
    return {
      selectedStatus: null,
      selectedIndustry: null,

    };
  },

  methods: {

    selectStatus(event) {
      this.$emit('updateStatus', event.target.value )
    },

    selectIndustry(event) {
      this.$emit('updateIndustry', event.target.value)
    }


  }
};
</script>

<style lang="css" scoped>
.app-logo {
  max-height: 40px;
  max-width: 40px;
  margin-bottom: 3px;
  padding-left: 10px;
}

.dropbtn {
  /*background-color: #4caf50;*/
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
  margin-left: 50px;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #ededed;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #d6d6d6;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
</style>
