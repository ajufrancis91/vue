<template>
    <div class="row">
       <div class="col-xl-12 col-lg-12 col-md-6">
        <user-card>

        </user-card>

      </div>
      <div class="col-xl-12 col-lg-12 col-md-6">

<!-- -->
      <div class="col-xl-12 col-lg-12 col-md-6" >
        <add-project>

        </add-project>

      </div>
 <!-- -->

 <!-- -->
      <div class="col-xl-12 col-lg-12 col-md-6" >
        <create-company>

        </create-company>

      </div>
 <!-- -->

  <!-- -->
      <div class="col-xl-12 col-lg-12 col-md-6">
        <add-users>

        </add-users>

      </div>
 <!-- -->


      </div>


    </div>



</template>
<script>
import EditProfileForm from "./UserProfile/EditProfileForm.vue";
import UserCard from "./UserProfile/UserCard.vue";
import MembersCard from "./UserProfile/MembersCard.vue";
import AddDrawing from "./UserProfile/AddDrawing.vue";
import CreateCompany from "./UserProfile/CreateCompany.vue";
import PremoteUsers from "./UserProfile/PremoteUsers.vue";
import AddUsers from "./UserProfile/AddUsers.vue";
import AddProject from "./UserProfile/AddProject.vue";

export default {
  components: {
    AddDrawing,
    EditProfileForm,
    AddUsers,
    CreateCompany,
    AddProject,
    UserCard,
    MembersCard,
    PremoteUsers
  }
};
</script>
<style>
</style>
