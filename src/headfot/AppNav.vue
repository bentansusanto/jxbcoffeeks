<template>
            <nav class="navbar navbar-expand-lg navbar-dark mt-2">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img :src="logo">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <router-link to="/" class="nav-link">Home</router-link>
                        <router-link to="/about" class="nav-link">About Us</router-link>
                        <router-link to="/product" class="nav-link">Product</router-link>
                        <router-link to="/contact" class="nav-link">Contact Us</router-link>
                    </div>
                    </div>
                </div>
            </nav>
</template>
<script>
export default {
    data (){
        return{
            logo : require('../assets/image/logo 1.png')
        }
    }
}
</script>
<style scoped>
    .nav-link{
        margin-left: 20px;
        font-size: 1rem;
        font-weight: 500;
        color: #ffff !important;
    }
    .navbar-toggler{
        border: none;
    }
    @media only screen and (min-width: 1025px){

    }
    /* Tablet and Desktop */
    @media only screen and (max-width: 1024px){

    }
    /* Handphone */
    @media only screen and (max-width: 767px){
       .navbar-brand img{
           width: 40px;
       }
    }
</style>