<template>
    <div class="navbar">
        <NavBarComponent />
    </div>
    <div class="hero text-center">
        <h1>Building inspiring spaces</h1>
        <h4 class="pb-4">We Build Inspiring Residential &amp; Commercial Spaces</h4>
        <div>
            <button class="btn-dark mx-2">Explore Recent Work</button>
            <button class="mx-2">Get a quote today</button>
        </div>
    </div>
    <section class="quote text-center py-5 position-relative">
        <h2>Do you a costruction project we can help with?</h2>
        <button class="btn-dark-absolute mx-2 position-absolute">Get a free quote</button>
    </section>
</template>

<script>
import { store } from "../store"
import NavBarComponent from "./partial/NavBarComponent.vue";
    export default {
    data() {
        return {
            store,
        };
    },
    components: { NavBarComponent }
}
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
.navbar {
    background-color: $white;
    padding-bottom: 110px;
}
.hero {
    height: 600px;
    background-image: url(../assets/img/home-slider-62528242.jpg);
    background-size: cover;
    padding-top: 200px;
}

h1 {
    text-transform: uppercase;
    font-size: 3.8rem;
    color: $white;
    font-weight: 800;
    letter-spacing: .2rem; 
}

h2 {
    font-weight: 400;
}

h4 {
    color: $sun;
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
.btn-dark {
    background-color: $darkgrey;
    color: $white;

    &:hover {
        background-color: $sun;
        color: $darkgrey;
    }
}

.btn-dark-absolute {
    bottom: -25px;
    background-color: $darkgrey;
    border: 2px solid $white;
    color: $white;
    left: 50%;
    transform: translateX(-50%);

    &:hover {
        background-color: $white;
        color: $darkgrey;
        border: 2px solid $darkgrey;
    }
}
.quote {
    background-color: $sun;
}
</style>