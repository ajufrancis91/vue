<template>
    <div class="row">
      <div class="col-12">
        <card :title="table1.title" :subTitle="table1.subTitle">
          <div slot="raw-content" class="table-responsive">
            <paper-table :data="table1.data" :columns="table1.columns">

            </paper-table>
          </div>
        </card>
      </div>

    </div>
</template>
<script>

import { PaperTable } from "@/components";
import {userRef} from "../../main.js"

const tableColumns = ["ContactPerson", "address", "city", "country", "email","name","pin"];
let tableData = []

export default {
  components: {
    PaperTable
  },
  data() {
    return {
      table1: {
        title: "Users list",
        subTitle: "Here is a list of all users",
        columns: [...tableColumns],
        data: [...tableData]
      },
      table2: {
        title: "Table on Plain Background",
        subTitle: "Here is a subtitle for this table",
        columns: [...tableColumns],
        data: [...tableData]
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
          this.$http.get(userRef+".json").then(response => {


            for(var userKey in response.body){
              if(response.body[userKey] != null){
                tableData.push(response.body[userKey]);
              }
            }

          }, response => {
            // error callback
          });
console.log("##########");
console.log(tableData);
console.log("##########");
    }
};
</script>
<style>
</style>
