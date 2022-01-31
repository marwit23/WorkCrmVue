<template>
  <b-container class="container-sm mb-4 custom-width-1">
    <h5 class="mb-4 mt-4">New Project</h5>

      <b-form @submit.prevent="handleSubmit(onSubmit)" class="border-bottom pb-2">
            
        <b-form-input
          v-model="formData.projectDescription"
          placeholder="Enter project description"
          onfocus="this.placeholder = ''"
          class="mb-2 mr-sm-2"
        ></b-form-input>

        <b-form-select
                  v-model="formData.customerName"
                  :options="customerOptions"
                  class="mb-2 mr-sm-2"
                ></b-form-select>

        <b-form-select
                  v-model="formData.supplierName"
                  :options="supplierOptions"
                  class="mb-2 mr-sm-2"
                ></b-form-select>


        <!-- <div v-for="statusItem in formData.statusList" :key="statusItem.statusId">
                <b-form-select
                  v-model="status.statusType"
                  :options="statusOptions"
                  class="mb-2 mr-sm-2"
                ></b-form-select>

              <b-button
                v-if="
                  statusItem ===
                    formData.statusItems[formData.statusItems.length - 1]
                "
                variant="primary"
                class="ml-4 mb-2 mr-sm-2"
                @click="addItem"
              >+</b-button>

              <b-button
                v-if="
                  statusItem ===
                    formData.statusItems[formData.statusItems.length - 1] &&
                    statusItem !== formData.statusItems[0]
                "
                variant="secondary"
                class="mb-2 mr-sm-2"
                @click="deleteItem"
              >-</b-button>
        </div> -->
      </b-form>
      <div>{{formData}}</div>
      <div class="mt-4">
        <b-button variant="secondary" @click="onCancel">Cancel</b-button>
        <b-button
          type="submit"
          variant="warning"
          class="ml-2"
          @click="onSubmit"
        >Submit</b-button>
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
      formData: {
        projectDescription: null,
        customerName: null,
        supplierName: null,
        statusList: [
          {
            statusType: null,
          },
        ],
      },
      isUnique: true,
    };
  },
  computed: {
    ...mapGetters(["allPersons", "allCompanies"]),

    customerOptions(){
      return this.allCompanies.map(company => company.companyName);
    },

    supplierOptions(){
      return this.allCompanies.map(company => company.companyName);
    },

  },

  methods: {
    ...mapActions(["addProject"]),

    onSubmit() {
      this.addProject(this.formData);
    },
    checkUnique(value) {
      if (
        value !== null &&
        this.itemsArray.filter((item) => item == value).length > 1
      ) {
        return false;
      } else {
        return true;
      }
    },
    validateUnique() {
      var tempSet = new Set(this.itemsArray);
      if (tempSet.size !== this.itemsArray.length) {
        this.isUnique = false;
      } else {
        this.isUnique = true;
      }
      console.log(this.isUnique);
    },

    addStatus() {
      this.formData.statusList.push({
        statusType: null,
        statusDescription: null,
      });
    },
    deleteItem() {
      this.formData.statusList.pop();
    },
    onCancel() {
      router.push({ path: "/projects" });
    },
  },
  created(){
      console.log(this.allCompanies)
      console.log(this.customerOptions)
      console.log(this.supplierOptions)
  }
};
</script>
<style></style>
