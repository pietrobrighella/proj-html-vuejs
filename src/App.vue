<template>
  <header>
    <HeaderComponent />
  </header>
  <main>
    <MainComponent />
  </main>
  <footer>
    <div class="subfooter"></div>
    <FooterComponent />
  </footer>
</template>

<script>
import { store } from "./store";
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

  export default {
    components: { HeaderComponent, MainComponent, FooterComponent },
    data() {
      return {
        store
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "./assets/variables.scss";
.subfooter {
    width: 100%;
    height: 20px;
    background-color: $darkgrey;
}

footer {
  background-color: $dark;
}
</style>