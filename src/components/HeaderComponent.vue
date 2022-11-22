<template>
    <div>
        <NavBarComponent />
    </div>
</template>

<script>
import { store } from "../store"
import NavBarComponent from "./partial/NavBarComponent.vue";
    export default {
    data() {
        return {
            store
        };
    },
    components: { NavBarComponent }
}
</script>

<style lang="scss" scoped>

</style>