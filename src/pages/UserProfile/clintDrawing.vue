<template>
  <card class="card" title="Clint Drawing">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-5">
            <label for="priority">Type</label>
                    <select id="priority"  v-model="selectedType" class="form-control">
                        <option v-for="Type in user.Types" >
                          {{ Type }}
                        </option>
                    </select>
          </div>
          <div class="col-md-3">

            <fg-input type="text"
                      label="Doc No ."
                      placeholder="Doc No ."
                      v-model="user.docNo">
            </fg-input>
          </div>
          <div class="col-md-4">
           <label for="priority">Author</label>
                    <select id="priority" v-model="selectedAuthors" class="form-control">
                        <option v-for="Author in user.Authors" >
                          {{ Author }}
                        </option>
                    </select>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
           <label for="priority">Discipline</label>
                    <select id="priority" v-model="selectedDisciplines" class="form-control">
                        <option v-for="Discipline in user.Disciplines" >
                          {{ Discipline }}
                        </option>
                    </select>
          </div>
          <div class="col-md-6">
            <label for="priority">Sub Discipline</label>
                    <select id="priority" v-model="selectedSubDisciplines" class="form-control">
                        <option v-for="SubDiscipline in user.SubDisciplines" >
                          {{ SubDiscipline }}
                        </option>
                    </select>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
           <label for="priority">Pr Stage</label>
                    <select id="priority" v-model="selectedPrStages" class="form-control">
                        <option v-for="PrStage in user.PrStages" >
                          {{ PrStage }}
                        </option>
                    </select>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <label for="priority">Revisions</label>
                    <select id="priority" v-model="selectedRevisions"  class="form-control">
                        <option v-for="Revision in user.Revisions" >
                          {{ Revision }}
                        </option>
                    </select>
          </div>
           <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="securityGroups">Projects</label>
                    <select id="securityGroups"  v-model="selectedProject" class="form-control">
                        <option v-for="project in user.projects" v-bind:value="project.Key">
                          {{ project.Value }}
                        </option>
                    </select>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>Comments</label>
              <textarea rows="5" class="form-control border-input"
                        placeholder="Here can be your description"
                        v-model="user.Comments">

              </textarea>

            </div>
              <file-upload>

               </file-upload>
          </div>
        </div>
        <div class="text-center">
          <p-button type="info"
                    round
                    @click.native.prevent="updateProfile">
            ADD DRAWING
          </p-button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>
import FileUpload from "./FileUpload.vue";
import {clintDrawing} from "../../main.js";
import {projectRef} from "../../main.js"
export default {
  components: {
        FileUpload
    },
  data() {
    return {
      user: {
        selected:'',
        docNo: "",
        title: "",
        Authors: ['abin joe','anil'],
        Disciplines: ['Architectural','Structural','MEP'],
        SubDisciplines: ['Plan','Section','Elevation','Details'],
        PrStages: ['Initial Design','Building Approval','Final Design','Construction Stage'],
        Revisions:['1','2','3'],
        Types:['Drawing','BOQ','RFI','Client Instruction'],
        projects:[],
        Comments: '',
      },
      selectedType:'',
      selectedAuthors:'',
      selectedDisciplines:'',
      selectedSubDisciplines:'',
      selectedPrStages:'',
      selectedRevisions:'',
      selectedProject:''

    };
  },
  created() {
    this.$http.get(projectRef+".json").then(response => {
                            return response.json();
                        })
                        .then(data => {
                            const resultArray = [];
                            for (let key in data) {
                              resultArray.push({"Key":key,"Value":data[key]["name"]});
                            }
                            this.user.projects = resultArray;
                             console.log(resultArray)
                        });
  },
  methods: {
    updateProfile() {
       projectRef.child(this.selectedProject).child("sketches").child("clientDrawing").push({"Types":this.selectedType,"docNo":this.user.docNo,"title":this.user.title,"Disciplines":this.selectedDisciplines,"SubDisciplines":this.selectedSubDisciplines,"PrStages":this.selectedPrStages,"Revisions":this.selectedRevisions,"Comments":this.user.Comments,"File":this.$store.state.pictureUrl,"TimeStamp":(new Date()).toUTCString()}).then(function(){
      console.log('clearing url');
 });
     this.$store.state.pictureUrl="";

    }
  }
};
</script>
<style>
</style>
