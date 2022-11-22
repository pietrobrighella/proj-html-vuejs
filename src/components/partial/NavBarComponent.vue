<template>
    <navbar>
        <div class="container d-flex py-4 justify-content-between align-items-center">
            <div class="h-100">
                <img src="../../assets/img/construction_logo_retina.png" alt="Construction" class="h-100">
            </div>
            <div class="d-flex">
                <ul class="d-flex align-items-center list-unstyled mb-0 px-3">
                    <li class="px-3" v-for="(item, index) in store.menu" :key="index"><a :href="item.url" class="text-decoration-none">{{item.item}}</a></li>
                </ul>
                <button class="align-self-center">Get Quote</button>
            </div>
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
    background-color: $white;
    right: 0;
    left: 0;
    top: 0;
    z-index: 999;
   
    div {
        height: 100%;
    }

    a {
        color: $codgrey;
        text-transform: uppercase;
        position: relative;
        font-weight: 400;

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
    height: 50px;
    padding: .6rem 2rem;
    background-color: $sun;
    border: none;
    text-transform: uppercase;
    letter-spacing: .1rem;
    font-weight: 500;

    &:hover {
        background-color: $darkgrey;
        color: $white;
        transition: .5s;
    }
}
</style>