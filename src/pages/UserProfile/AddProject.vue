<template>
  <card class="card" title="Add Project">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-5">
            <fg-input type="text"
                      label="Project Name"
                      placeholder="Project Name"
                      v-model="user.prjectName">
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
import {projectRef} from "../../main.js"
export default {
  data() {
    return {
      user: {
        prjectName: "",
        ArchitectName: "",
        Location: "",
        ClientNames:[],
        Architect:[]
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
                            console.log('Archi' + resultArray2)
                             console.log('clint' + resultArray)
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
        this.$http.post(projectRef+".json",{"name":this.user.companyName,"email":this.user.email,"address":this.user.address,"pin":this.user.postalCode,"city":this.user.city,"ContactPerson":this.user.ContactPerson,"country":this.user.country}).then(response => {
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
