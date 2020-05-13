<template>
  <card class="card" title="Create Company">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-5">
            <fg-input type="text"
                      label="Company Name"
                      placeholder="Company Name"
                      v-model="user.companyName">
            </fg-input>
          </div>
          <div class="col-md-3">

            <fg-input type="text"
                      label="Contact Person"
                      placeholder="Contact Person"
                      v-model="user.ContactPerson">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="email"
                      label="email"
                      placeholder="Email"
                      v-model="user.email">
            </fg-input>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <fg-input type="text"
                      label="Address"
                      placeholder="Home Address"
                      v-model="user.address">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <fg-input type="text"
                      label="City"
                      placeholder="City"
                      v-model="user.city">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="text"
                      label="Country"
                      placeholder="Country"
                      v-model="user.country">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="number"
                      label="Postal Code"
                      placeholder="ZIP Code"
                      v-model="user.postalCode">
            </fg-input>
          </div>
        </div>
        <div class="text-center">
          <p-button type="info"
                    round
                    @click.native.prevent="addCompany">
            Save
          </p-button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>
import {companyRef} from "../../main.js"
export default {
  data() {
    return {
      user: {
        companyName: "",
        ContactPerson: "",
        email: "",
        country: "Faker",
        address: "Melbourne, Australia",
        city: "Melbourne",
        postalCode: "",
      }
    };
  },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    },
    testing: function(){
        this.$http.get(userRef+".json").then(response => {

          // get body data
          console.log(response.body);

        }, response => {
          // error callback
        });
    },
    addCompany: function(){
      alert(this.user.companyName);
        this.$http.post(companyRef+".json",{"name":this.user.companyName,"email":this.user.email,"address":this.user.address,"pin":this.user.postalCode,"city":this.user.city,"ContactPerson":this.user.ContactPerson,"country":this.user.country}).then(response => {
          // get body data
          console.log(response.body);
        }, response => {
          // error callback
        });
    }
  }
};
</script>
<style>
</style>
