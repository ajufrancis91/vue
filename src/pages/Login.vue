<template>
  <v-app>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12" v-if="!loading">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="username"
                    label="Email Address"
                    name="login"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <error></error>
                <v-spacer></v-spacer>
                <v-btn color="primary" v-on:click.prevent="login">Login</v-btn>
              </v-card-actions>
            </v-card>
            <Loading v-if="loading"></Loading>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Loading from './Loading.vue'
import {userRef} from "../main.js";
import store from "../store/store";
import router from "../router/index.js";
import error from "./error.vue";
  export default {
    components:{
      Loading,
      error
      },
  data () {
    return {
        loading: false,
        username: "",
        password: ""
    }
  },
  methods:{
    login: function(){
      // should be replaced by real login code
      // there I just did some simple validation and use a fake login
      if(this.username != '' && this.password!= '' )
      {
        // show the loading message
        this.loading = true;
        setTimeout(()=>{
          this.loading = false;

          //check firebase
       let currentPass = this.password
       let auth = false
       let companyCode = ''
       let userKey = ''
       let name = ''
       let email = this.username
       userRef.orderByChild("email").equalTo(this.username).once("value", function(snapshot) {
              if (snapshot.exists()) {
                  snapshot.forEach((data)=>{
                    if(data.child("password").exportVal().toString() === currentPass){
                        console.log("success");
                        auth = true
                        userKey = data.key
                        companyCode = data.child("companyCode").exportVal().toString()
                        name = data.child("name").exportVal().toString()
                        store.state.username = name;
                        store.state.email = email;
                        store.state.companyCode = companyCode;
                        store.state.userKey = userKey;
                        localStorage.setItem('login', true);
                        router.push('/dashboard')
                    }else{
                        console.log("invalid login");
                      }
                  });
              }else{
                  console.log("invalid login");
                }
              });
         
        },1000);  
      }
    }
  }
  }
</script>
