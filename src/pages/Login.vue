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
                <error v-if="invalid"></error>
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
import Loading from './Loading.vue';
import {userRef} from "../main.js";
import error from "./error.vue";
  export default {
    components:{
      Loading,
      error
      },
  data () {
    return {
        loading: false,
        invalid :false,
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
       let vm = this;
       userRef.orderByChild("email").equalTo(this.username).once("value", function(snapshot) {
              if (snapshot.exists()) {
                  snapshot.forEach((data)=>{
                    if(data.child("password").exportVal().toString() === vm.password){
                        console.log("success");
                        vm.invalid = false;
                        vm.$store.state.username = data.child("name").exportVal().toString();
                        vm.$store.state.email = vm.username;
                        vm.$store.state.companyCode = data.child("companyCode").exportVal().toString();
                        vm.$store.state.userKey = data.key;
                        vm.$store.state.securityGroups = data.child("securityGroups").exportVal().toString();
                        console.log("------------------invalid login-------------");
                       console.log(vm.$store.state.securityGroups);
                        localStorage.setItem('login', true);
                        vm.$router.push('/dashboard')
                    }else{
                        console.log("invalid login");
                        vm.invalid = true;
                      }
                  });
              }else{
                  console.log("invalid login");
                   vm.invalid = true;
                }
              });

        },1000);
      }
    }
  }
  }
</script>
