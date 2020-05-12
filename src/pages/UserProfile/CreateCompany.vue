<template>
  <card class="card" title="Create Company">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-5">
            <fg-input type="text"
                      label="Company Name"
                      placeholder="Company Name"
                      v-model="user.companyName">
            </fg-input>
          </div>
          <div class="col-md-3">

            <fg-input type="text"
                      label="Contact Person"
                      placeholder="Contact Person"
                      v-model="user.ContactPerson">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="email"
                      label="email"
                      placeholder="Email"
                      v-model="user.email">
            </fg-input>
          </div>
        </div>


        <div class="row">
          <div class="col-md-12">
            <fg-input type="text"
                      label="Address"
                      placeholder="Home Address"
                      v-model="user.address">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <fg-input type="text"
                      label="City"
                      placeholder="City"
                      v-model="user.city">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="text"
                      label="Country"
                      placeholder="Country"
                      v-model="user.country">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="number"
                      label="Postal Code"
                      placeholder="ZIP Code"
                      v-model="user.postalCode">
            </fg-input>
          </div>
        </div>
        <div class="text-center">
          <p-button type="info"
                    round
                    @click.native.prevent="addCompany">
            Save
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
