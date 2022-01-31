<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <!-- LOGO -->

      <div id="logo">
        <img src="../../_assets/logo3.png" alt="logo" class="navbar-brand app-logo app-hover" @click="selectStatus('')" />
      </div>

      <!-- ALERTS -->

      <button
        class="btn btn-sm margin-right px-2" @click="selectStatus('ALERTS')" :class="[selectedStatus==='ALERTS' ? 'btn-active' : 'btn-light']">
        <b-icon variant="danger" icon="bell"></b-icon>
        </button>

      <button class="btn btn-sm margin-right px-2" @click="selectStatus('TENDERS')" :class="[selectedStatus==='TENDERS' ? 'btn-active' : 'btn-light']">
        <b-icon variant="warning" icon="hammer"></b-icon>
      </button>

      <button class="btn btn-sm margin-right px-2" @click="selectStatus('MEETING')" :class="[selectedStatus==='MEETING' ? 'btn-active' : 'btn-light']">
      <b-icon variant="success" icon="person-fill"></b-icon>
      </button>

      <!-- INQUIRY -->
      <div class="margin-small">
      <button
        class="btn btn-sm margin-right px-3" @click="selectStatus('INQUIRY_OFFER_SENT')" :class="[selectedStatus==='INQUIRY_OFFER_SENT' ? 'btn-active' : 'btn-light']">
        <b-icon variant="success" icon="box-arrow-right"></b-icon>
        </button>

      <button class="btn btn-sm margin-right px-3" @click="selectStatus('INQUIRY_IN_TALKS')" :class="[selectedStatus==='INQUIRY_IN_TALKS' ? 'btn-active' : 'btn-light']">
        <b-icon variant="primary" icon="chat"></b-icon>
      </button>

      <button class="btn btn-sm margin-right px-3" @click="selectStatus('INQUIRY_INITIAL')" :class="[selectedStatus==='INQUIRY_INITIAL' ? 'btn-active' : 'btn-light']">
        <b-icon variant="info" icon="funnel-fill"></b-icon>
      </button>

      <button class="btn btn-sm margin-right px-3" @click="selectStatus('INQUIRY_NO_CONTACT')" :class="[selectedStatus==='INQUIRY_NO_CONTACT' ? 'btn-active' : 'btn-light']">
        <b-icon variant="dark" icon="telephone-x-fill"></b-icon>
      </button>
      </div>

      <!-- LONG -->
      <div class="margin-small">

       <button class="btn btn-sm margin-right px-3" @click="selectStatus('LONG_PROSPECT')" :class="[selectedStatus==='LONG_PROSPECT' ? 'btn-active' : 'btn-light']">
        <b-icon variant="secondary" icon="bookmark-fill"></b-icon>
      </button>

      <button class="btn btn-sm margin-right px-3" @click="selectStatus('LONG_UNDEFINED')" :class="[selectedStatus==='LONG_UNDEFINED' ? 'btn-active' : 'btn-light']">
        <b-icon variant="secondary" icon="bookmark"></b-icon>
      </button>

      </div>



      <!-- ORDERS -->

      <div class="margin-small">

      <button class="btn btn-sm margin-right px-3" @click="selectStatus('ORDER_OPEN')" :class="[selectedStatus==='ORDER_OPEN' ? 'btn-active' : 'btn-light']">
        <b-icon variant="success" icon="archive"></b-icon>
      </button>

      <button class="btn btn-sm margin-right px-3" @click="selectStatus('ORDER_CLOSED')" :class="[selectedStatus==='ORDER_CLOSED' ? 'btn-active' : 'btn-light']">
        <b-icon variant="success" icon="archive-fill"></b-icon>
      </button>
      </div>

      <!-- KILLED -->

<div class="margin-small">
      <button class="btn btn-sm margin-right px-3" @click="selectStatus('KILLED_ONLY')" :class="[selectedStatus==='KILLED_ONLY' ? 'btn-active' : 'btn-light']">
        <b-icon variant="dark" icon="trash"></b-icon>
      </button>
      <button class="btn btn-sm margin-right px-3" @click="selectStatus('KILLED_AND_DEAD')" :class="[selectedStatus==='KILLED_AND_DEAD' ? 'btn-active' : 'btn-light']">
        <b-icon variant="dark" icon="trash-fill"></b-icon>
      </button>
      </div>
      <div class="margin-small">
        <b-input-group size="sm">
        <b-form-select
            class="form-select"
            style="font-size:100%"
            id="statusType"
            v-model="selectedSortParam"
            @change="selectSortParam"
          >
            <b-form-select-option value="statusDate" selected>Status date</b-form-select-option>
            <b-form-select-option value="projectValue">Project value</b-form-select-option>
            <b-form-select-option value="projectId">Project Id</b-form-select-option>
          </b-form-select>
          <template #append>
                <b-button class="btn btn-secondary btn-sm" @click="selectSortAsc">
                  <b-icon v-if="selectedSortAsc" icon="chevron-up"></b-icon>
                  <b-icon v-else icon="chevron-down"></b-icon>
                </b-button>
              </template>
        </b-input-group>
      </div>
      <div class="margin-small">
        <b-form-input
          type="text"
          size="sm"
          placeholder="Search"
          v-model="selectedSearch"
          @input="selectSearch"
        />
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",

  data() {
    return {
      selectedStatus: "",
      selectedIndustry: "",
      selectedType: "",
      selectedSearch: "",
      selectedSortParam: "",
      selectedSortAsc: false,
      selectedFlag: false,
      clicked:""
    };
  },

  methods: {
    selectSearch() {
      this.$emit("updateSearch", this.selectedSearch);
    },

    selectStatus(value) {
      this.selectedStatus = value;
      this.clicked = value;
      this.$emit("updateStatus", this.selectedStatus);
    },

    selectSource() {
      this.$emit("updateSource", this.selectedSource);
    },

    selectIndustry() {
      console.log("Selected industry" + this.selectedIndustry);
      this.$emit("updateIndustry", this.selectedIndustry);
    },

    selectSortParam() {
      console.log("navbar - sortparam - " + this.selectedSortParam)
      this.$emit("updateSortParam", this.selectedSortParam)
    },
    selectSortAsc() {
      this.selectedSortAsc = !this.selectedSortAsc
      console.log("navbar - sortasc - " + this.selectedSortAsc)
      this.$emit("updateSortAsc", this.selectedSortAsc)
    },


   
  },
};
</script>

<style lang="css" scoped>
.app-logo {
  max-height: 40px;
  max-width: 40px;
  margin-bottom: 3px;
  padding-left: 10px;
}

.btn-active {
  background-color: #bebebe;
}

.margin-right {
  margin-right: 3px;
}

.margin-big {
  margin-left: 20px;
}

.margin-small {
  margin-left: 10px;
}

</style>
