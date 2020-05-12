<template>
  <card class="card" title="Add Project">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-5">
            <fg-input type="text"
                      label="Project Name"
                      placeholder="Project Name"
                      v-model="user.company">
            </fg-input>
          </div>
          <div class="col-md-3">

            <fg-input type="text"
                      label="Client Name"
                      placeholder="Clint Name"
                      v-model="user.clintName">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="text"
                      label="Architect Name"
                      placeholder="Architect Name"
                      v-model="user.ArchitectName">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <fg-input type="text"
                      label="Location"
                      placeholder="Location"
                      v-model="user.Location">
            </fg-input>
          </div>

        </div>

        <div class="text-center">
          <p-button type="info"
                    round
                    @click.native.prevent="updateProfile">
            Add Project
          </p-button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>
export default {
  data() {
    return {
      user: {
        company: "Paper Dashboard",
        username: "michael23",
        email: "",
        firstName: "Chet",
        lastName: "Faker",
        address: "Melbourne, Australia",
        city: "Melbourne",
        postalCode: "",
        aboutMe: `We must accept finite disappointment, but hold on to infinite hope.`
      }
    };
  },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    }
  }
};
</script>
<style>
</style>
