<template>
  <card class="card" title="Add RFI">
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
          <div class="col-md-4">
            <label for="priority">REF Doc</label>
                    <select id="priority" v-model="selectedRef"  class="form-control">
                        <option v-for="Ref in user.Refs" >
                          {{ Ref }}
                        </option>
                    </select>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>Query</label>
              <textarea rows="5" class="form-control border-input"
                        placeholder="Here can be your description"
                        v-model="user.Comments">

              </textarea>

            </div>

        </div>
        </div>
        <div >
                <File-Upload></File-Upload>
        </div>
        <div class="text-center">
          <p-button type="info"
                    round
                    @click.native.prevent="updateProfile">
            ADD RFI
          </p-button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>
import {addrfi} from "../../main.js"
import axios from 'axios'
import FileUpload from "./FileUpload.vue"
export default {
  components: {
      FileUpload
    },
    name: 'Upload',
  data() {
    return {
      selectedFile: null,

      imageData: null,
      picture: null,
      uploadValue: 0,
      user: {
        selected:'',
        docNo: "",
        title: "",
        Authors: ['abin joe','anil'],
        Disciplines: ['Architectural','Structural','MEP'],
        SubDisciplines: ['Plan','Section','Elevation','Details'],
        PrStages: ['Initial Design','Building Approval','Final Design','Construction Stage'],
        Revisions:['1','2','3'],
        Refs:['open','closed'],
        Types:['Drawing','BOQ','RFI','Client Instruction'],
        Comments: '',
      },
      selectedType:'',
      selectedAuthors:'',
      selectedDisciplines:'',
      selectedSubDisciplines:'',
      selectedPrStages:'',
      selectedRevisions:'',
      selectedRef:''

    };
  },
  methods:{
    previewImage(event) {
      this.uploadValue=0;
      this.picture=null;
      this.imageData = event.target.files[0];
    },

    onUpload(){
      this.picture=null;
      const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.picture =url;
        });
      }
      );
    }

  }
};
</script>
<style>
</style>
