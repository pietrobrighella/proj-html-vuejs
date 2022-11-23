<template>
    <div class="container pb-5">
        <h2 class="text-center">Our Home Owners Say</h2>
        <div class="divider"></div>
        <p class="text-center pb-5 lh-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        <div class="row justify-content-center pb-5">
            <a class="col-2" v-for="item in store.partners" :href="item.url">
                <img :src="`../../../public/img/` + item.image" alt="Our Partners" class="img-fluid">
            </a>
        </div>
    </div>
    <div class="partners-wrapper">
        <div class="container h-100">
            <div class="row building-space align-items-center h-100">
                <div class="col-8">
                    <h2>Building inspiring spaces</h2>
                    <div class="divider div-left"></div>
                    <p class="fs-5 text">Vivamus Sed Consectetur Tellus Dolor Sit Amet, Consectetur Adipiscing Lorem Elit Sadip Ipsum Ets Ficilis Uns</p>
                </div>
                <div class="col-4 d-flex flex-column text-center">
                    <button class="mb-4 get-quote">Get a free quote</button>
                    <span>Only takes a few seconds!</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from "../../store"

    export default {
        data(){
            return {
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "../../assets/main.scss";
.divider { 
    margin: 2rem auto;
    width: 300px;
    height: 2px;
    background-color: $sun;
    &.div-left {
        margin: 2rem 0;
    }
}
.partners-wrapper {
    height: 400px;
    background-image: url(../../../public/img/about-call-to-action-57862405.webp);
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
}
.building-space {
    color: $white;

    h2 {
        text-transform: uppercase;
        font-weight: 800;
        letter-spacing: .1rem;
    }
}
.text {
    letter-spacing: .1rem;
    max-width: 90%;
}
.get-quote {
    background-color: $sun;
    border: 0;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: .1rem;
    font-weight: 500;
   
    &:hover {
        background-color: $darkgrey;
        color: $white;
    }
}
</style>