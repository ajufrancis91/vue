<template>
  <v-app>
<v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="user.projects"
          label="Project"
          item-text="Value"
          item-value="Key"
          return-object
          outlined
          @change="onChange($event)"
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
    <!-- <card>
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="securityGroups">Projects</label>
                    <select id="securityGroups" @change="onChange($event)"  v-model="selectedProject" class="form-control">
                        <option v-for="project in user.projects" v-bind:value="project.Key">
                          {{ project.Value }}
                        </option>
                    </select>
          </div>
      </card> -->
    <v-card>
      <v-card-title>
        Drawings
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="drawings"
        :search="search"
        :items-per-page="5"
        item-key="name"
        class="elevation-1"
        :footer-props="{
      showFirstLastPage: true,
      firstIcon: 'mdi-arrow-collapse-left',
      lastIcon: 'mdi-arrow-collapse-right',
      prevIcon: 'mdi-minus',
      nextIcon: 'mdi-plus'
    }"
      >
        <template v-slot:item.File="{ item }">
          <img :src="item.File" style="width: 200px; height: 200px" />
        </template>
      </v-data-table>
    </v-card>
    <v-card>
      <v-card-title>
        RFI
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="rfi"
        :search="search"
        :items-per-page="5"
        item-key="name"
        class="elevation-1"
        :footer-props="{
      showFirstLastPage: true,
      firstIcon: 'mdi-arrow-collapse-left',
      lastIcon: 'mdi-arrow-collapse-right',
      prevIcon: 'mdi-minus',
      nextIcon: 'mdi-plus'
    }"
      >
        <template v-slot:item.File="{ item }">
          <img :src="item.File" style="width: 200px; height: 200px" />
        </template>
      </v-data-table>
    </v-card>
    <v-card>
      <v-card-title>
        Client Drawings
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="clientdrawings"
        :search="search"
        :items-per-page="5"
        item-key="name"
        class="elevation-1"
        :footer-props="{
      showFirstLastPage: true,
      firstIcon: 'mdi-arrow-collapse-left',
      lastIcon: 'mdi-arrow-collapse-right',
      prevIcon: 'mdi-minus',
      nextIcon: 'mdi-plus'
    }"
      >
        <template v-slot:item.File="{ item }">
          <img :src="item.File" style="width: 200px; height: 200px" />
        </template>
      </v-data-table>
    </v-card>
  </v-app>
</template>

<script>
import { projectRef } from "../../src/main.js";
export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Title",
          align: "start",
          sortable: false,
          value: "title"
        },
        { text: "Document N.O", value: "docNo" },
        { text: "Types", value: "Types" },
        { text: "Disciplines", value: "Disciplines" },
        { text: "SubDisciplines", value: "SubDisciplines" },
        { text: "PrStages", value: "PrStages" },
        { text: "File", value: "File" },
        { text: "Revisions", value: "Revisions" },
        { text: "Comments", value: "Comments" },
        { text: "DOC", value: "TimeStamp" }
      ],
      drawings: [],
      rfi: [],
      clientdrawings: [],
      selectedProject:'',
      user: {
         projects:[]
      }
    };
  },
  methods: {
        onChange(event) {
            let drawings = [];
            let rfi = [];
            let clientdrawings = [];

        projectRef.child(event.Key).child("sketches/drawing").once("value", function(data) {
          data.forEach(child => {
            child.ref.orderByChild("TimeStamp").once("value", function(data) {
              let dict = {};
              data.forEach(child => {
                //create drawing dict
                dict[child.key] = child.val();
              });
              drawings.push(dict);
              dict = {};
            });
          });
        });

        projectRef.child(event.Key).child("sketches/rfi").once("value", function(data) {
          data.forEach(child => {
            child.ref.orderByChild("TimeStamp").once("value", function(data) {
              let dict = {};
              data.forEach(child => {
                //create drawing dict
                dict[child.key] = child.val();
              });
              rfi.push(dict);
              dict = {};
            });
          });
        });

        projectRef.child(event.Key).child("sketches/clientDrawing").once("value", function(data) {
          data.forEach(child => {
            child.ref.orderByChild("TimeStamp").once("value", function(data) {
              let dict = {};
              data.forEach(child => {
                //create drawing dict
                dict[child.key] = child.val();
              });
              clientdrawings.push(dict);
              dict = {};
            });
          });
        });

    this.drawings = drawings;
    this.rfi = rfi;
    this.clientdrawings = clientdrawings;
    // console.log("Drawing");
    // console.log(this.drawings);
    // console.log("irf");
    // console.log(this.rfi);
    // console.log("clientDrawing");
    // console.log(this.clientdrawings);
        }
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
  }
};
</script>
