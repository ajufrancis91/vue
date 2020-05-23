<template>
 <div class="row">
  <div class="col-md-12">
    <card>
      <add-drawing>

      </add-drawing>


    </card>
    <card>
       <add-r-f-i>

      </add-r-f-i>
    </card>
     <card>
       <clint-drawing>

      </clint-drawing>
    </card>
  </div>
 </div>
</template>
<script>
import AddDrawing from "./UserProfile/AddDrawing.vue";
import AddRFI from "./UserProfile/AddRFI.vue";
import clintDrawing from "./UserProfile/clintDrawing.vue";

export default {
components: {
AddDrawing,
AddRFI,
clintDrawing
}
};
</script>
<style>
</style>
