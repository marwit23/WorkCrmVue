<template>
  <div class="ml-2 app-sidebar">
    <nav>
      <router-link to="/add"><b-button variant="warning" class="m-2">+</b-button></router-link>
      <ul class="list-unstyled ml-1 sidebar-list">
        
        <li class="text-light">
          <!-- <div data-toggle="tooltip" data-placement="top" title="All" @click='selectCommodity("")'> -->
            <button class="btn btn-sm" @click='selectCommodity("")' :class="[selectedCommodity ==='' ? 'btn-light': 'btn-secondary']">
          <b-icon icon="list-task"></b-icon>
          </button>
          <!-- </div> -->
        </li>
        <li class="text-light">
          <!-- <div data-toggle="tooltip" data-placement="top" title="Machines" @click='selectCommodity("MACHINE")'> -->
          <button class="btn btn-sm" @click='selectCommodity("MACHINE")' :class="[selectedCommodity ==='MACHINE' ? 'btn-light': 'btn-secondary']">
          <b-icon icon="gem"></b-icon>
          </button>
          <!-- </div> -->
        </li>
        <li class="text-light">
          <!-- <div data-toggle="tooltip" data-placement="top" title="Parts" @click='selectCommodity("PARTS")'> -->
            <button class="btn btn-sm" @click='selectCommodity("PARTS")' :class="[selectedCommodity ==='PARTS' ? 'btn-light': 'btn-secondary']">
          <b-icon icon="gear"></b-icon>
            </button>
          <!-- </div> -->
        </li>
        <li class="text-light">
          <!-- <div data-toggle="tooltip" data-placement="top" title="Other" @click='selectCommodity("OTHER")'> -->
            <button class="btn btn-sm" @click='selectCommodity("OTHER")' :class="[selectedCommodity ==='OTHER' ? 'btn-light': 'btn-secondary']">
          <b-icon icon="info-square"></b-icon>
            </button>
          <!-- </div> -->
        </li>

        <!-- ------------------------------------------------------------- -->

        <li class="text-light mt-3">
          <!-- <div data-toggle="tooltip" data-placement="top" title="All" @click='selectCommodity("")'> -->
            <button class="btn btn-sm" @click='selectIndustry("")' :class="[selectedIndustry ==='' ? 'btn-info': 'btn-secondary']">
          <b-icon icon="list-task"></b-icon>
          </button>
          <!-- </div> -->
        </li>
        <li class="text-light">
          <!-- <div data-toggle="tooltip" data-placement="top" title="Machines" @click='selectIndustry("MACHINE")'> -->
          <button class="btn btn-sm" @click='selectIndustry("PHARMA")' :class="[selectedIndustry ==='PHARMA' ? 'btn-info': 'btn-secondary']">
          <b-icon icon="bag-plus"></b-icon>
          </button>
          <!-- </div> -->
        </li>
           <li class="text-light">
          <!-- <div data-toggle="tooltip" data-placement="top" title="Parts" @click='selectIndustry("PARTS")'> -->
            <button class="btn btn-sm" @click='selectIndustry("COSMETICS")' :class="[selectedIndustry ==='COSMETICS' ? 'btn-info': 'btn-secondary']">
          <b-icon icon="brush"></b-icon>
            </button>
          <!-- </div> -->
        </li>
        <li class="text-light">
          <!-- <div data-toggle="tooltip" data-placement="top" title="Other" @click='selectIndustry("OTHER")'> -->
            <button class="btn btn-sm" @click='selectIndustry("FOOD")' :class="[selectedIndustry ==='FOOD' ? 'btn-info': 'btn-secondary']">
          <b-icon icon="cup-straw"></b-icon>
            </button>
          <!-- </div> -->
        </li>
        <li class="text-light">
          <!-- <div data-toggle="tooltip" data-placement="top" title="Other" @click='selectIndustry("OTHER")'> -->
            <button class="btn btn-sm" @click='selectIndustry("OTHER")' :class="[selectedIndustry ==='OTHER' ? 'btn-info': 'btn-secondary']">
          <b-icon icon="diagram-3"></b-icon>
            </button>
          <!-- </div> -->
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Navigation",
  components: {},

  data() {
    return {
      selectedCommodity: "",
      selectedIndustry: ""
    };
  },

  methods: {

    selectCommodity(value) {
      this.selectedCommodity = value;
      console.log("Selected commodity" + this.selectedCommodity)
      this.$emit("updateCommodity", this.selectedCommodity);
      
    },

    selectIndustry(value) {
      this.selectedIndustry = value;
      console.log("Selected industry" + this.selectedIndustry)
      this.$emit("updateIndustry", this.selectedIndustry);

    }
  },

  computed: {},
};
</script>

<style>

.app-sidebar {
  background: #212529;
  float: left;
  font-size: 150%;
  height: 100%;
}

.sidebar-list {
  max-width: 40px;
  margin-left: 8px;
}

.sidebar-icon {
  margin-top: 20px;
}

.btn-active {
  background-color: #bebebe;
}


</style>
