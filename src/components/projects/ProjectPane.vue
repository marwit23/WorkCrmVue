<template>
  <div class="projectpane-container">
    <b-form @change="onSubmit" class="pb-2">
<!--//!--------------------------------------------------------------------------------------------------------------------------------->
      <b-row>
        <b-col sm="2" class="text-70 mt-3">Meeting status</b-col>
        <b-col>
          <b-form-select
            class="form-select"
            style="font-size:100%"
            id="meetingType"
            v-model="propProject.meetingType"
            placeholder="Select meeting"
            @change="onSubmit"
          >
            <b-form-select-option value="MAYBE_MEETING">Maybe meeting</b-form-select-option>
            <b-form-select-option value="SET_MEETING">Set Meeting</b-form-select-option>
            <b-form-select-option value="NO_MEETING">No Meeting</b-form-select-option>
            <b-form-select-option value="DONE_MEETING">Done Meeting</b-form-select-option>
          </b-form-select>
        </b-col>
        <b-col>
          <b-form-input class="mb-2" v-model="propProject.meetingDesc"></b-form-input>
        </b-col>
      </b-row>
<!--//! -------------------------------------------------------------------------------------------------------------------------------->
      <b-row>
        <b-col sm="2" class="text-70 mt-3">Last status</b-col>
        <b-col>
          <b-form-input class="mb-2" v-model="propProject.statusDesc"></b-form-input>
        </b-col>
      </b-row>
<!--//! -------------------------------------------------------------------------------------------------------------------------------->     
      <b-row>
        <b-col sm="2" class="text-70 mt-3">Status type</b-col>
        <b-col sm="1">
          <!--b-icon conditional, 2 metody, statusDesc button append -->
          <button type="button" class="btn btn-sm" @click="setFlag">
            <b-icon v-if="this.propProject.flag" variant="danger" icon="bell"></b-icon>
            <b-icon v-else variant="secondary" icon="bell"></b-icon>
          </button>
        </b-col>
        <b-col sm="4">
          <b-form-select
            class="form-select"
            style="font-size:100%"
            id="statusType"
            v-model="propProject.statusType"
            placeholder="Select status"
            @change="onSubmit"
          >
            <b-form-select-option value="INQUIRY_INITIAL">Wstępny</b-form-select-option>
            <b-form-select-option value="INQUIRY_NO_CONTACT">Brak kontaktu</b-form-select-option>
            <b-form-select-option value="INQUIRY_IN_TALKS">W rozmowach</b-form-select-option>
            <b-form-select-option value="INQUIRY_OFFER_SENT">Oferta wysłana</b-form-select-option>
            <b-form-select-option value="LONG_PROSPECT">Długi prospekt</b-form-select-option>
            <b-form-select-option value="LONG_UNDEFINED">Długi nieokreślony</b-form-select-option>
            <b-form-select-option value="ORDER_OPEN">Otwarty</b-form-select-option>
            <b-form-select-option value="ORDER_CLOSED">Zamknięty</b-form-select-option>
            <b-form-select-option value="KILLED_ONLY">Upadł</b-form-select-option>
            <b-form-select-option value="KILLED_AND_DEAD">Kaput</b-form-select-option>
          </b-form-select>
        </b-col>
        <b-col>
          <b-form-datepicker
            @input="onSubmit"
            id="example-datepicker"
            v-model="propProject.statusDate"
            class="mb-2"
          ></b-form-datepicker>
        </b-col>
      </b-row>
<!--//!--------------------------------------------------------------------------------------------------------------------------------->
      <b-row>
        <b-col sm="2" class="text-70 mt-3">Item</b-col>
        <b-col class="app-bold">
          <b-form-input
            v-model="propProject.projectTitle"
            onfocus="this.placeholder = ''"
            class="mb-2"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="2" class="text-70 mt-3">Supplier</b-col>
        <b-col>
          <b-form-input
            v-model="propProject.supplierCompany"
            placeholder="Supplier"
            onfocus="this.placeholder = ''"
            class="mb-2"
          ></b-form-input>
        </b-col>
        <b-col>
          <b-form-select
            class="form-select"
            style="font-size:100%"
            id="statusType"
            v-model="propProject.industryType"
            placeholder="Select industry"
            @change="onSubmit"
          >
            <b-form-select-option value="PHARMA">Pharma</b-form-select-option>
            <b-form-select-option value="COSMETICS">Cosmetics</b-form-select-option>
            <b-form-select-option value="FOOD">Food</b-form-select-option>
            <b-form-select-option value="OTHER">Other</b-form-select-option>
          </b-form-select>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="2" class="text-70 mt-3">Customer</b-col>
        <b-col>
          <b-form-input
            v-model="propProject.customerCompany"
            placeholder="Company"
            onfocus="this.placeholder = ''"
            class="mb-2"
          ></b-form-input>
        </b-col>
        <b-col>
          <b-form-input
            v-model="propProject.customerPerson"
            placeholder="Contact person"
            onfocus="this.placeholder = ''"
            class="mb-2"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="2" class="text-70 mt-3">Contacts</b-col>
        <b-col>
          <b-col>
            <b-form-input
              v-model="propProject.customerDetails"
              onfocus="this.placeholder = ''"
              class="mb-2"
            ></b-form-input>
          </b-col>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="2" class="text-70 mt-3">Ref numbers</b-col>
        <b-col>
          <b-form-input
            v-model="propProject.projectRef"
            onfocus="this.placeholder = ''"
            class="mb-2"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="2" class="text-70 mt-3">Project value</b-col>
        <b-col>
          <b-form-input
            v-model="propProject.projectValue"
            onfocus="this.placeholder = ''"
            class="mb-2"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="2" class="text-70 mt-3">Notes</b-col>
        <b-col>
          <b-form-textarea
            v-model="propProject.notes"
            onfocus="this.placeholder = ''"
            class="mb-2 overflow-visible"
            rows="5"
          ></b-form-textarea>
        </b-col>
      </b-row>
    </b-form>
    <!-- <div>{{propProject}}</div> -->
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import router from "../../_router/router";

export default {
  name: "ProjectPane",
  data() {
    return {
      // formData: {},
      isUnique: true,
      flag: false,
    };
  },

  props: {
    propProject: {},
  },

  computed: {
    ...mapGetters(["allProjects"]),
  },

  methods: {
    ...mapActions(["editProject"]),

    onSubmit() {
      this.editProject(this.propProject);
    },

    setFlag() {
      this.propProject.flag = !this.propProject.flag;
      console.log("flag" + this.propProject.flag);
      this.editProject(this.propProject);
    },

    onCancel() {
      router.push({ path: "/" });
    },
  },
  created() {},
};
</script>
<style>
.projectpane-container {
  margin-top: 10px;
  padding-right: 15px;
  max-height: 90vh;
  /* background-color:#f3f3f3; */
  overflow-y: auto;
  overflow-x: hidden;
}

.input-border-none {
  border: none;
}

.text-70 {
  font-size: 70%;
  text-align: right;
}

input[type="text"] {
  font-size: 100%;
}

.app-bold {
  font-weight: bold;
}
</style>
