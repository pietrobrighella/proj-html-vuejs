<template>
    <navbar class="container d-flex py-4 justify-content-between align-items-center">
        <div class="h-100">
            <img src="../../assets/img/construction_logo_retina.png" alt="Construction" class="h-100">
        </div>
        <div class="d-flex">
            <ul class="d-flex align-items-center list-unstyled mb-0 px-3">
                <li class="px-3" v-for="(item, index) in store.menu" :key="index"><a :href="item.url" class="text-decoration-none">{{item.item}}</a></li>
            </ul>
            <button>Get Quote</button>
        </div>
    </navbar>
</template>

<script>
import { store } from "../../store"
    export default {
        data() {
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "../../assets/variables.scss";

navbar { 
    height: 120px;
    position: fixed;
    right: 0;
    left: 0;
    
    a {
        color: $codgrey;
        text-transform: uppercase;
        position: relative;

        &:hover {
            color: $sun;
            transition: .5s;

            &::after {
                content: "";
                position: absolute;
                top: 69px;
                left: 35%;
                width: 0; 
                height: 0; 
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                border-top: 10px solid $white;
            }
        }
    }
}

button {
    padding: .6rem 1.4rem;
    background-color: $sun;
    border: none;
    text-transform: uppercase;

    &:hover {
        background-color: $darkgrey;
        color: $white;
        transition: .5s;
    }
}
</style>