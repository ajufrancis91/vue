<template>
    <div class="row">
      <card>
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="securityGroups">Projects</label>
                    <select id="securityGroups" @change="onChange($event)"  v-model="selectedProject" class="form-control">
                        <option v-for="project in user.projects" v-bind:value="project.Key">
                          {{ project.Value }}
                        </option>
                    </select>
          </div>
      </card>
      <div class="col-12">
        <card :title="table1.title" :subTitle="table1.subTitle">
          <div slot="raw-content" class="table-responsive">
            <paper-table :data="table1.data" :columns="table1.columns">

            </paper-table>
          </div>
        </card>
      </div>

      <div class="col-12">
     <card :title="table2.title" :subTitle="table2.subTitle">
          <div slot="raw-content" class="table-responsive">
            <paper-table :data="table2.data" :columns="table2.columns">

            </paper-table>
          </div>
        </card>
      </div>

        <div class="col-12">
          <card :title="table3.title" :subTitle="table3.subTitle">
                <div slot="raw-content" class="table-responsive">
                  <paper-table :data="table3.data" :columns="table3.columns">

                  </paper-table>
                </div>
              </card>
      </div>

    </div>
</template>
<script>

import { PaperTable } from "@/components";
import {projectRef} from "../../src/main.js"
let tableColumns2 = ["Comments", "Disciplines", "File", "PrStages", "Revisions","SubDisciplines","TimeStamp","Types","docNo","title"];
let tableColumns3 = ["Comments", "Disciplines", "File", "PrStages", "Revisions","SubDisciplines","TimeStamp","Types","docNo","title"];
let tableColumns = ["Comments", "Disciplines", "File", "PrStages", "Revisions","SubDisciplines","TimeStamp","Types","docNo","title"];
let tableData = [];
let tableData2 = [];
let tableData3 = [];

export default {
  components: {
    PaperTable
  },
  data() {
    return {
      table1: {
        title: "Drawing",
        subTitle: "Here is a subtitle for this table",
        columns: [...tableColumns],
        data: [...tableData]
      },
      table2: {
        title: "RFI",
        subTitle: "Here is a subtitle for this table",
        columns: [...tableColumns2],
        data: [...tableData2]
      },
      table3: {
        title: "Client Instrection",
        subTitle: "Here is a subtitle for this table",
        columns: [...tableColumns3],
        data: [...tableData3]
      },
      selectedProject:'',
      user: {
         projects:[]
      }
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
      getUsers: function(){
        this.$http.get(userRef+".json").then(response => {

          // get body data
          console.log(response.body);

        }, response => {
          // error callback
        });
      },
      testingPost: function(){
        this.$http.post(userRef+".json",{"name":"leo"}).then(response => {
          // get body data
          console.log(response.body);
        }, response => {
          // error callback
        });
      },
      onChange: function($event){
        console.log("hello");
        projectRef.once("value",function(data){
          data.forEach((child)=>{

              // for (let innerobj in child){
              //       console.log(innerobj)
              // }
        child.ref.child("sketches/drawing").once("value",function(data){
            data.forEach((child)=>{
              child.ref.orderByChild('TimeStamp').once("value",function(data){
                let dict ={}
                 data.forEach((child)=>{
                   //create drawing dict
                      console.log(child.val());
                      console.log(0);
                      dict[child.key]=child.val();
                 });
                  tableData.push(dict)
                  dict={}

              });

            });
        });



            //console.log(child.key);
//console.log(innerChild.child("sketches/drawing").child().key)

            ///console.log(child.key)
          });
        });
        // projectRef.child('sketches/drawing').orderByChild('TimeStamp').on("",function(snapshot){
        //   console.log("rererere");
        //   console.log(snapshot)
        // });
        // projectRef.child('sketches/drawing').orderByChild('TimeStamp').on("child_added", function(snapshot){
        //   console.log(snapshot.key)
        // })
      }
    }
};
</script>
<style>
</style>
