<template>
<v-app>
    <div class="row">
      <div class="col-12">
        <card :title="table1.title" :subTitle="table1.subTitle">
          <div slot="raw-content" class="table-responsive">
            <v-data-table
                    :headers="headers"
                    :items="companyList"
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
  </v-app>
</template>
<script>

import { PaperTable } from "@/components";
import {companyRef} from "../../main.js"

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
        { text: "Company Name", value: "name" },
        { text: "Contact Person", value: "site" },
        { text: "Email", value: "email" },
        { text: "Country", value: "country" },
        { text: "City", value: "city" },
        { text: "Pin", value: "pin" },
        { text: "Address", value: "address" }
      ],
      companyList: [],
      table1: {
        title: "Company List Table",
        subTitle: "List of all companies",

      }
    };
  },
   methods: {
      getUsers: function(){
        this.$http.get(userRef+".json").then(response => {

          // get body data
          //console.log(response.body);

        }, response => {
          // error callback
        });
      },
      testingPost: function(){
        this.$http.post(userRef+".json",{"name":"leo"}).then(response => {
          // get body data
          //console.log(response.body);
        }, response => {
          // error callback
        });
      }
    },
    created(){
          this.$http.get(companyRef+".json").then(response => {

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
                                  this.companyList.push(dict)
                      }
                  }

          }, response => {
            // error callback
          });
    }
};
</script>
<style>
</style>
