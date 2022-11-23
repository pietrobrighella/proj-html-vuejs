<template>
    <div class="foot py-5">
        <div class="row container m-auto">
            <div class="col-5">
                <img src="../../public/img/footer-logo.png" alt="Logo" class="img-fluid">
                <p class="lh-lg py-4">We are specialists in the construction of unique and exclusive properties. Our work inspires. We pride ourselves on delivering outstanding quality and design for leading clients across the world.</p>
                <button>Learn More</button>
            </div>
            <div class="col-4 mt-4">
                <h4 class="text-uppercase">Contact us today</h4>
                <ul>
                    <li class="list-unstyled position-relative"><font-awesome-icon icon="fa-solid fa-globe" class="icona position-absolute"/>Corporate Location<br>1600 Amphitheatre Parkway<br>London WC1 1BA</li>
                    <li class="list-unstyled position-relative"><font-awesome-icon icon="fa-solid fa-house" class="icona position-absolute"/>Residential Location<br>9521 Broadsberry Avenue<br>Paddington RC7 9ZA</li>
                    <li class="list-unstyled position-relative"><font-awesome-icon icon="fa-solid fa-phone" class="icona position-absolute"/>1.800.458.556 / 1.800.532.2112</li>
                    <li class="list-unstyled position-relative"><font-awesome-icon icon="fa-solid fa-phone" class="icona position-absolute"/>info@your-domain.com</li>
                    <li class="list-unstyled position-relative"><font-awesome-icon icon="fa-solid fa-clock" class="icona position-absolute"/>Monday – Friday: 9:00 AM – 6:00 PM</li>
                    <li class="list-unstyled position-relative"><font-awesome-icon icon="fa-solid fa-clock" class="icona position-absolute"/>Saturday – Sunday: 9:00 AM – 12:00 PM</li>
                </ul>
            </div>
            <div class="col-3 mt-4">
                <img src="../../public/img/construction_map_pin.png" alt="Maps" class="img-fluid">
            </div>
        </div>
    </div>
</template>

<script>
import { store } from "../store"
    export default {
        data(){
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
.foot {
    color: $codgrey;
}

ul {
    padding-left: 25px;

    li {
        padding-bottom: 10px;
    }
}

button {
    background-color: $sun;
    border: 0;
    padding: .5rem 2rem;
    text-transform: uppercase;
    letter-spacing: .1rem;

    &:hover {
        background-color: $darkgrey;
        color: $white;
    }
}

h4 {
    color: $sun;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: .1rem;
}
.icona {
    top: 4px;
    left: -25px;
    padding-right: 10px;
    color: $codgrey;
    z-index: 999;
}
</style>