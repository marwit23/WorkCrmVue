<template>
  <b-container class="container-sm mb-4 custom-width-1">
    <h5 class="mb-4 mt-4">New Project</h5>

    <b-form @submit.prevent="handleSubmit(onSubmit)" class="border-bottom pb-2">
      <b-form-input
        v-model="formData.projectTitle"
        placeholder="Enter project description"
        onfocus="this.placeholder = ''"
        class="mb-2 mr-sm-2"
      ></b-form-input>

      <b-form-input
        v-model="formData.projectRef"
        placeholder="Enter project ref number"
        onfocus="this.placeholder = ''"
        class="mb-2 mr-sm-2"
      ></b-form-input>

      <b-form-select v-model="formData.commodityType" placeholder="Select commodity type">
        <option value="MACHINE">Machine</option>
        <option value="PARTS">Parts</option>
        <option value="OTHER">Other</option>
      </b-form-select>

      <b-form-select v-model="formData.industryType" placeholder="Select industry">
        <option value="PHARMA">Pharma</option>
        <option value="FOOD">Food</option>
        <option value="COSMETICS">Cosmetics</option>
        <option value="OTHER">Other</option>
      </b-form-select>

      <b-form-select v-model="formData.sourceType" placeholder="Select source">
        <option value="ARCON">Arcon</option>
        <option value="INTERNET">Internet</option>
        <option value="MAILING">Mailing</option>
        <option value="TENDERS">Tenders</option>
        <option value="OTHER">Other</option>
      </b-form-select>

      <b-form-input
        v-model="formData.customerCompany"
        placeholder="Enter customer company"
        onfocus="this.placeholder = ''"
        class="mb-2 mr-sm-2"
      ></b-form-input>

      <b-form-input
        v-model="formData.customerPerson"
        placeholder="Enter contact person"
        onfocus="this.placeholder = ''"
        class="mb-2 mr-sm-2"
      ></b-form-input>

      <b-form-input
        v-model="formData.customerDetails"
        placeholder="Enter contact details"
        onfocus="this.placeholder = ''"
        class="mb-2 mr-sm-2"
      ></b-form-input>

       <b-form-input
        v-model="formData.supplierCompany"
        placeholder="Enter supplier"
        onfocus="this.placeholder = ''"
        class="mb-2 mr-sm-2"
      ></b-form-input>

      <b-form-input
        v-model="formData.projectValue"
        placeholder="Enter project value"
        onfocus="this.placeholder = ''"
        class="mb-2 mr-sm-2"
      ></b-form-input>


      <b-form-select v-model="formData.statusType" placeholder="Select status">
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

      <b-form-input
        v-model="formData.statusDesc"
        placeholder="Enter status description"
        onfocus="this.placeholder = ''"
        class="mb-2 mr-sm-2"
      ></b-form-input>

      <b-form-input
        v-model="formData.statusDate"
        placeholder="Enter last contact date"
        onfocus="this.placeholder = ''"
        class="mb-2 mr-sm-2"
      ></b-form-input>

      <b-form-checkbox
      id="checkbox-1"
      v-model="formData.flag"
      name="checkbox-1"
      value="true"
      unchecked-value="false"
    >
      Pinned
    </b-form-checkbox>

    <b-form-input
        v-model="formData.notes"
        placeholder="Enter project notes"
        onfocus="this.placeholder = ''"
        class="mb-2 mr-sm-2"
      ></b-form-input>
    
    </b-form>
    <!-- <div>{{formData}}</div> -->
    <div class="mt-4">
      <b-button variant="secondary" @click="onCancel">Cancel</b-button>
      <b-button type="submit" variant="warning" class="ml-2" @click="onSubmit">Submit</b-button>
    </div>
  </b-container>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import router from "../_router/router";

export default {
  name: "AddProject",
  data() {
    return {
      formData: {},
      isUnique: true,
    };
  },
  computed: {
    ...mapGetters(["allProjects"]),
  },

  methods: {
    ...mapActions(["addProject"]),

    onSubmit() {
      this.addProject(this.formData);
    },

    onCancel() {
      router.push({ path: "/" });
    },
  },
  created() {},
};
</script>
<style></style>
