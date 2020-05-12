<template>
  <card class="card" title="Add Users">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-5">
            <fg-input type="text"
                      label="User Name"
                      placeholder="User Name"
                      v-model="user.userName">
            </fg-input>
          </div>
          <div class="col-md-3">

            <fg-input type="password"
                      label="Password"
                      placeholder="Password"
                      v-model="user.password">
            </fg-input>
          </div>
        </div>
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="priority">Company Code</label>
                    <select
                            id="priority"
                            class="form-control"
                            v-model="selectedPriority">
                        <option
                                v-for="priority in user.priorities"
                                >{{ priority }}
                        </option>
                    </select>
        </div>

        <div class="text-center">
          <p-button type="info"
                    round
                    @click.native.prevent="addUser">
            Add User
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
        priorities: ['High', 'Medium', 'Low'],
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
