<template>
  <card class="card" title="Add Users">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-5">
            <fg-input type="text"
                      label="User Name"
                      placeholder="User Name"
                      v-model="user.userName">
            </fg-input>
          </div>
          <div class="col-md-3">

            <fg-input type="password"
                      label="Password"
                      placeholder="Password"
                      v-model="user.password">
            </fg-input>
          </div>
        </div>
         <div class="row">
          <div class="col-md-5">
            <fg-input type="text"
                      label="Contact Person"
                      placeholder="User Name"
                      v-model="user.contactPerson">
            </fg-input>
          </div>
          <div class="col-md-3">
            <fg-input type="text"
                      label="Address"
                      placeholder="address"
                      v-model="user.address">
            </fg-input>
          </div>
        </div>
        <div class="row">
          <div class="col-md-5">
            <fg-input type="text"
                      label="city"
                      placeholder="city"
                      v-model="user.city">
            </fg-input>
          </div>
          <div class="col-md-3">
            <fg-input type="text"
                      label="Country"
                      placeholder="Country"
                      v-model="user.country">
            </fg-input>
          </div>
        </div>
          <div class="row">
          <div class="col-md-5">
            <fg-input type="text"
                      label="email"
                      placeholder="email"
                      v-model="user.email">
            </fg-input>
          </div>
        </div>
         <div class="row">
          <div class="col-md-5">
            <fg-input type="text"
                      label="pin"
                      placeholder="pin"
                      v-model="user.pin">
            </fg-input>
          </div>
        </div>
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="priority">Company Code</label>
                    <select id="priority" v-model="CompanyCode" class="form-control">
                        <option v-for="priority in user.priorities" v-bind:value="priority.Key">
                          {{ priority.Value }}
                        </option>
                    </select>
        </div>

        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="securityGroups">User Type</label>
                    <select id="securityGroups"  v-model="SelectedUserType" class="form-control">
                        <option v-for="security in user.securityGroups" v-bind:value="security.Key">
                          {{ security.Value }}
                        </option>
                    </select>
        </div>


        <div class="text-center">
          <p-button type="info"
                    round
                    @click.native.prevent="addUser">
            Add User
          </p-button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>
import {companyRef} from "../../main.js"
import {securityGroupsRef} from "../../main.js"
import {userRef} from "../../main.js"
export default {
  data() {
    return {
      user: {
        company: "Paper Dashboard",
        userName: "",
        email: "",
        address: "Melbourne, Australia",
        city: "Melbourne",
        pin: "",
        contactPerson:"",
        priorities: [],
        securityGroups: [],
        userType: ['Clint', 'Employee', 'Admin'],
      },
      CompanyCode:"",
      SelectedUserType:""

    };
  },
  created() {
    this.$http.get(companyRef+".json").then(response => {
                            return response.json();
                        })
                        .then(data => {
                            const resultArray = [];
                            for (let key in data) {
                              resultArray.push({"Key":key,"Value":data[key]["name"]});
                            }
                            this.user.priorities = resultArray;
                             console.log(resultArray)
                        });
    this.$http.get(securityGroupsRef+".json").then(response => {
                            return response.json();
                        })
                        .then(data => {
                            const resultArray = [];
                            for (let key in data) {
                              for(let values in data[key]){
                                  resultArray.push({"Key":values,"Value":values});
                              }
                            }
                            this.user.securityGroups = resultArray;
                             console.log(resultArray)
                        });

  },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    },
    addUser(){
        this.$http.post(userRef+".json",{"contactPerson":this.user.contactPerson,"name":this.user.userName,"address":this.user.address,"pin":this.user.pin,"city":this.user.city,"country":this.user.country,"email":this.user.email,"companyCode":this.CompanyCode,"securityGroups":this.SelectedUserType}).then(response => {
          // get body data
          console.log(response.body);
          alert("Your data: " + JSON.stringify(this.user));
      }, response => {
          // error callback
      });
    }
  }
};
</script>
<style>
</style>
