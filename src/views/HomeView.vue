<template>
    <!-- Hero Section -->
    <div class="heros">
        <div class="hero"></div>
        <div class="container">
            <h1 class="text-center">Specialy Coffee Specialist</h1>
            <p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
    </div>
    <sec-about/>
    <sec-quots/>
    <sec-produk/>
</template>
<script>
import secAbout from '../components/secAbout.vue'
import secQuots from '../components/secQuots.vue'
import secProduk from '../components/secProduk.vue'
// import secTesti from '../components/secTesti.vue'
export default {
    components :{
        secAbout,
        secQuots,
        secProduk,
        
    }
}
</script>
<style scoped>
    .heros{
        margin-top: -10%;
        color: #ffff;
    }
    .hero{
        background: url('../assets/image/img-home/bg-hero.jpg');
        width: 100%;
        background-size: cover;
    }
    .heros h1{
        font-family: 'Water Brush', cursive;
    }
    .heros p{
        font-weight: 500;
        color: #a4a4a4;
        margin: auto;
    }
    /* Large Desktop */
    @media only screen and (min-width: 1025px){
        .heros{
           margin-top: -102px;
       }
       .hero{
            background-position: unset;
            height: 100vh;
        }
         .heros h1{
            font-size: 5rem;
            margin-top: -450px;
        }
        .heros p{
            margin-top: 15px;
            font-size: .9rem;
            width: 45%;
        }
    }
    /* Tablet and Desktop */
    @media only screen and (max-width: 1024px){
        .heros{
           margin-top: -105px;
       }
       .hero{
            background-position: center;
            height: 100vh;
        }
         .heros h1{
            font-size: 3rem;
            margin-top: -350px;
        }
        .heros p{
            margin-top: 15px;
            font-size: .9rem;
            width: 60%;
        }
    }
    /* Handphone */
    @media only screen and (max-width: 767px){
       .heros{
           margin-top: -100px;
       }
       .hero{
            background-position: center;
            height: 100vh;
        }
        .heros h1{
            font-size: 2.5rem;
            margin-top: -400px;
        }
        .heros p{
            margin-top: 15px;
            font-size: .9rem;
            width: 100%;
        }
    }
</style>