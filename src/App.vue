<template>
  <div>
    <HeaderComponent />
  </div>
  <div class="container my-5 text-center">
    <h2>Specialists In Modern Construction</h2>
    <p class="pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.</p>
    <div class="row gx-4">
        <template v-for="(card, index) in store.cards" :key="index">
          <CardComponent :title="card.title" :icons="card.icon" :text="card.text" :title_flip="card.title_flip" :text_flip="card.text_flip" />
        </template>
    </div>
  </div>
</template>

<script>
import { store } from "./store";
import HeaderComponent from "./components/HeaderComponent.vue";
import CardComponent from "./components/partial/CardComponent.vue";
  export default {
    components: { HeaderComponent, CardComponent },
    data() {
      return {
        store
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>