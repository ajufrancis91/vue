<template>
  <div class="text-center">
    <v-progress-circular
      :size="70"
      :width="7"
      color="primary"
      indeterminate
    ></v-progress-circular>
    <p class="font-weight-black">Loading...</p>
  </div>
</template>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>