<template>

    <!-- CARDS -->
    <section class="container cnt-1 text-center">
    <div class="wrapper">
        <h2>Specialists In Modern Construction</h2>
        <div class="divider"></div>
        <p class="pb-5 lh-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.</p>
    </div>
    <div class="row gx-4">
        <template v-for="(card, index) in store.cards" :key="index">
            <CardComponent :title="card.title" :icons="card.icon" :text="card.text" :title_flip="card.title_flip" :text_flip="card.text_flip" />
        </template>
    </div>
    </section>
    
    <!-- GROWTH -->  
    <section class="position-relative overflow-hidden">
        <div class="ellipse el-1"></div>
        <div>
            <ul class="growth d-flex justify-content-center">
                <li class="list-unstyled d-flex flex-column px-4 text-center" v-for="(item, index) in store.growth" :key="index">
                    <font-awesome-icon :icon="item.icon" class="icon"/>
                    <span>{{item.number}}</span>
                    <h5>{{item.text}}</h5>
                </li>
            </ul>
        </div>
        <div class="ellipse el-2"></div>
    </section>

    <!-- RECENT WORK -->
    <section class="container text-center">
        <div class="wrapper">
        <h2>Explore Recent Work</h2>
        <div class="divider"></div>
        <p class="pb-5 lh-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.</p>
        </div>
        <div class="row">
            <div class="col-4" v-for="(work, index) in store.works" :key="index">
                <figure class="position-relative">
                    <img :src="`/public/img/` + work.image" :alt="work.title" class="img-fluid img-work">
                    <div class="position-absolute info-work">
                        <h5>{{work.title}}</h5>
                        <h6 class="text-uppercase">{{work.category}}</h6>
                    </div>
                </figure>
            </div>
        </div>
        <div class="mt-4">
            <div class="divider dvd-1"></div>
            <button class="btn-all-proj text-uppercase">View all project</button>
            <div class="divider dvd-2"></div>
        </div>
    </section>

    <!-- REVIEW -->
    <section>
        <ReviewComponent />
    </section>

    <!-- PARTNERS -->
    <section>
        <PartnersComponent />
    </section>

</template>

<script>
import { store } from "../store";
import CardComponent from "./partial/CardComponent.vue";
import PartnersComponent from "./partial/PartnersComponent.vue";
import ReviewComponent from "./partial/ReviewComponent.vue";

    export default {
        components: { CardComponent, ReviewComponent, PartnersComponent },
        data() {
            return {
                store,
                isHovering: false,
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "../assets/main.scss";
.cnt-1 {
  padding: 150px 0 75px 0;
}
.wrapper {
  margin: 0 auto;
  max-width: 800px;
}
.divider { 
  margin: 2rem auto;
  width: 300px;
  height: 2px;
  background-color: $sun;
  &.dvd-1 {
    background-color: $lightgrey;
    float: left;
    margin-top: 3rem;
    margin-bottom: 6rem;
  }

  &.dvd-2 {
    background-color: $lightgrey;
    float: right;
    margin-top: 3rem;
    margin-bottom: 6rem;
  }
}
.btn-all-proj {
    background-color: $white;
    border: 0;
    padding: .6rem 5rem;
    letter-spacing: .2rem;
    font-weight: 500;
    margin-top: 1.6rem;

    &:hover {
        background-color: $sun;
    }
}
.ellipse {
    height: 200px;
    right: -50px;
    left: -50px;
    border-radius: 50%;
    background-color: $white;
    position: absolute;
    z-index: 998;
    &.el-1 {
        top: -100px;
    }
    &.el-2 {
        bottom: -100px;
    }
}
.growth {
    padding: 250px 0;
    background-image: url(../../public/img/home-244125289.jpg);
    position: relative;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .icon {
        font-size: 5rem;
        color: $sun;;
    }

    span {
        font-size: 4rem;
        font-weight: 500;
        color: $sun;
    }

    h5 {
        color: $white;
        text-transform: uppercase;
        font-size: 1rem;
    }
}
.info-work {
    background-color: $dark;
    filter: opacity(.8);
    color: $white;
    width: 100%;
    height: 75px;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    transition: .5s;
    text-align: start;
    padding-left: 20px;

    &:hover {
        height: 100%;
        cursor: pointer;
    }
}

</style>