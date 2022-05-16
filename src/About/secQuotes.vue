<template>
    <div class="quotes">
        <div class="container">
            <h4 class="text-center">{{quotes.desc}}</h4>
            <p class="text-center">{{quotes.name}}</p>
        </div>
    </div>
</template>
<script>
export default {
    props : {
        quotes:Object
    }
}
</script>
<style scoped>
    .quotes{
        background: url('../assets/image/img-about/bg-quotes.jpg');
        width: 100%;
        height: 60vh;
        background-size: cover;
        background-position: center;
        padding: 150px 0;
        color: white;
    }
    .quotes h4{
        margin: auto;
        font-weight: 600;
    }
    
    /* Large Desktop */
    @media only screen and (min-width: 1025px){
         .quotes h4{
            width: 50%;
            padding: 15px 0;
            font-size: 1.8rem;
        }
    }
    /* Tablet and Desktop */
    @media only screen and (max-width: 1024px){
        .quotes h4{
            width: 60%;
            padding: 15px 0;
            font-size: 1.6rem;
        }
    }
    /* Handphone */
    @media only screen and (max-width: 767px){
        .quotes h4{
            width: 80%;
            padding: 15px 0;
            font-size: 1.5rem;
        }

    }
</style>