<template>
  <div>
    <HeaderComponent />
  </div>
  <div>
    <MainComponent />
  </div>
</template>

<script>
import { store } from "./store";
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";

  export default {
    components: { HeaderComponent, MainComponent },
    data() {
      return {
        store
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>