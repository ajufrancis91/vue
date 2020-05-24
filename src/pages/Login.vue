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
                    label="Login"
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
  export default {
    components:{Loading},
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
          // use vuex to store user inforamtion
          this.$store.dispatch('update_user_name',this.username);
          
          // save login status in localstorage
          localStorage.setItem('login', true);
          
          // redirect to user page
          this.$router.push('/dashboard')
        },1000);
      }
    }
  }
  }
</script>
