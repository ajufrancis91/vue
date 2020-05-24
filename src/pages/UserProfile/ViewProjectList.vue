<template>
    <div class="row">
      <div class="col-12">
        <card :title="table1.title" :subTitle="table1.subTitle">
          <div slot="raw-content" class="table-responsive">
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
          </div>
        </card>
      </div>
    </div>
</template>
<script>

import { PaperTable } from "@/components";
import {projectRef} from "../../main.js"

export default {
  components: {
    PaperTable
  },
  data() {
    return {
      search: "",
      headers: [
        {
          align: "start",
          sortable: false,
          value: "title"
        },
        { text: "Project Name", value: "name" },
        { text: "Site", value: "site" },
        { text: "Company Code", value: "companyCode" }
      ],
      drawings: [],
      table1: {
        title: "View all Projets",
        subTitle: "List of all Projects",
      }
    };
  },
   methods: {

    },
    created(){
          this.$http.get(projectRef+".json").then(response => {
                  for(var userKey in response.body){
                      if(response.body[userKey] != null){
                          var dict = {};
                              for(let data in response.body[userKey])
                              {
                                  if(data!=null){
                                      if(data === "contactPerson")
                                      {
                                        dict["person"]=response.body[userKey][data]
                                      }else{
                                        dict[data]=response.body[userKey][data]
                                      }

                                      }
                              }
                                  // console.log("dict value");
                                  // console.log(dict);
                                  this.drawings.push(dict)
                      }
                  }

          }, response => {
            // error callback
            alert('asdf');

          });
    }
};
</script>
<style>
</style>
