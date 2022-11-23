<template>
    <div class="position-relative overflow-hidden w-100">
        <div class="ellipse el-1"></div>
        <div class="growth d-flex flex-column justify-content-center">
            <h2 class="text-center text-white">Our Home Owners Say</h2>
            <div class="divider"></div>
            <div class="slider-wrapper m-auto" @mouseover="stopAutoscroll" @mouseleave="autoScroll" tabindex="0">
                <div>
                    <img :src="`../../../public/img/` + store.review[activeSlide].image" :alt="store.review[activeSlide].name" class="rounded-circle" />
                    <div class="text">
                        <h3 class="py-4">{{store.review[activeSlide].text}}</h3>
                        <h4 class="text-uppercase pb-4">{{store.review[activeSlide].name}} • {{store.review[activeSlide].role}}</h4>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <div class="prev mx-1" @click="prevSlide()"></div>
                    <div class="next mx-1 activereview" @click="nextSlide()"></div>
                </div>
            </div>
        </div>

        <div class="ellipse el-2"></div>
    </div>
</template>

<script>
import { store } from "../../store"

    export default {
        data(){
            return {
                store,
                activeSlide: 0,
                autoscroll: null
            }
        },
        methods: {
            prevSlide(){
                this.activeSlide--
                if(this.activeSlide > 0){
                    this.activeSlide = store.review.length - 1
                }
            },
            nextSlide(){
                this.activeSlide++
                if(this.activeSlide > store.review.length - 1){
                    this.activeSlide = 0
                }
            },
            autoscroll(){
                clearInterval(()=>{
                    this.nextSlide();
                },2000)
            },
            stopAutoscroll(){
                clearInterval(this.autoscroll);
                this.autoscroll = null
            }
        },
        mounted() {
            this.autoscroll()
        },
    }
</script>

<style lang="scss" scoped>
@import "../../assets/main.scss";
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
    padding: 150px 0;
    background-image: url(../../../public/img/home-parallax-144609983.jpg);
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
.divider { 
  margin: 2rem auto;
  width: 300px;
  height: 2px;
  background-color: $sun;
}
.slider-wrapper {
    color: $white;
    max-width: 800px;
    text-align: center;
}

.text {
    letter-spacing: .2rem;

    h3 {
        font-style: italic;
        font-weight: 300;
        font-size: 1.2rem;
    }

    h4 {
        font-weight: 700;
        font-size: 1.2rem;
    }
}
.prev, .next {
    width: 15px;
    height: 15px;
    border-radius: 20px;
    cursor: pointer;
    border: 2px solid $white;
    background-color: $white;
    &.activereview {
        background-color: transparent;   
    }
}
</style>