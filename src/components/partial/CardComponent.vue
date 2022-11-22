<template>
    <section class="position-relative col">
        <div class="card">
            <div class="content">
                <div class="front">
                    <div class="h-100 d-flex flex-column justify-content-center align-items-center">
                        <span class="icona">
                            <font-awesome-icon :icon="icons" />
                        </span>
                        <h4>{{title}}</h4>
                        <p>{{text}}</p>
                    </div>
                </div>
                <div class="back">
                    <div class="h-100 d-flex flex-column justify-content-center">
                        <h4>{{title_flip}}</h4>
                        <p>{{text_flip}}</p>
                        <button>Get a quote</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from "../../store"
    export default {
        props: {
            icons: String,
            title: String,
            text: String,
            title_flip: String,
            text_flip: String
        },  
        data(){
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "../../assets/main.scss";

.card {
  width: 100%;
  height: 320px;
  float: left;
  perspective: 500px;
  border: 0;
}

.content {
  width: 100%;
  height: 100%;
  transition: transform .3s;
  transform-style: preserve-3d;
}

.card:hover .content {
  transform: rotateY( 180deg ) ;
  transition: transform 0.5s;
}

.front, .back {
  position: absolute;
  height: 100%;
  width: 100%;
  background: $lightgrey;
  padding: 1rem;
  color: $darkgrey;
  text-align: center;
  border-radius: 5px;
  backface-visibility: hidden;
  border-radius: .6rem;
}

h4 {
    font-size: 2rem;
    font-weight: 400;
}

p {
    font-size: 1rem;
    line-height: 2rem;
}

.back {
  background: $sun;
  color: $darkgrey;
  transform: rotateY( 180deg );
}

button {
    padding: .6rem 2rem;
    background-color: $white;
    color: $darkgrey;
    border: none;
    text-transform: uppercase;
    letter-spacing: .1rem;
    font-weight: 500;
    font-size: 1rem;

    &:hover {
        background-color: $darkgrey;
        color: $white;
        transition: .5s;
    }
}

.icona {
    font-size: 1.5rem;
    width: 60px;
    height: 60px;
    border: 1px solid $black;
    border-radius: 40px;
    line-height: 50px;
    margin: .8rem 0;
}

</style>