<template>
  <card class="card" title="Add Project">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-5">
            <fg-input type="text"
                      label="Project Name"
                      placeholder="Project Name"
                      v-model="user.company">
            </fg-input>
          </div>
          <div class="col-md-3">
            <label for="ClintName">Clint Name</label>
                    <select id="priority" class="form-control">
                        <option v-for="ClintName in user.ClientNames" v-bind:value="ClintName.Key">
                          {{ ClintName.Value }}
                        </option>
                    </select>
          </div>
          <div class="col-md-4">
            <fg-input type="text"
                      label="Architect Name"
                      placeholder="Architect Name"
                      v-model="user.ArchitectName">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <fg-input type="text"
                      label="Location"
                      placeholder="Location"
                      v-model="user.Location">
            </fg-input>
          </div>

        </div>

        <div class="text-center">
          <p-button type="info"
                    round
                    @click.native.prevent="AddProject">
            Add Project
          </p-button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>
import {userRef} from "../../main.js"
import {companyRef} from "../../main.js"
export default {
  data() {
    return {
      user: {
        company: "Paper Dashboard",
        username: "michael23",
        email: "",
        firstName: "Chet",
        lastName: "Faker",
        address: "Melbourne, Australia",
        city: "Melbourne",
        ClientNames:[],
        Architect:[],
        postalCode: "",
        userType:"",
        aboutMe: `We must accept finite disappointment, but hold on to infinite hope.`
      }
    };
  },
  created() {

    this.$http.get(userRef+".json").then(response => {
                            return response.json();
                        })
                        .then(data => {
                            const resultArray = [];
                            const resultArray2 = [];
                            for (let key in data) {
                              for(let usertype in data[key]["securityGroups"]){
                                    if(data[key]["securityGroups"][usertype] === "client"){
                                          resultArray.push({"Key":key,"Value":data[key]["userName"]});
                                    }else if(data[key]["securityGroups"][usertype] === "employee"){
                                          resultArray2.push({"Key":key,"Value":data[key]["userName"]});
                                    }
                              }
                            }
                            this.user.ClientNames = resultArray;
                            this.user.Architect = resultArray2;
                        });

  },
  methods: {
    updateProfile() {
      this.$http.get(companyRef+".json").then(response => {

          // get body data
          console.log(response.body);


        }, response => {
          // error callback
        });
    },
    getCompanyDetails: function(){
        this.$http.get(companyRef+".json").then(response => {

          // get body data
          console.log(response.body);

        }, response => {
          // error callback
        });
    },
    AddProject: function(){
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
