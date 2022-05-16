<template>
    <div class="quotes">
        <div class="quote"></div>
        <div class="container">
            <h4 class="text-center">{{quotes}}</h4>
            <p class="text-center">{{name}}</p>
        </div>
    </div>
</template>
<script>
export default {
    data (){
        return{
            name  : 'Josephine Baker',
            quotes : '"He was my cream, and I was his coffee - And when you poured us together, it was something."'
        }
    }
}
</script>
<style scoped>
    .quotes{
        color: #ffff;
    }
    .quote{
        background: url('../assets/image/img-home/bg-quotes.jpg');
        width: 100%;
        height: 60vh;
        background-size: cover;
        background-position: center;
    }
    .quotes h4{
        font-weight: 600;
        margin: auto;
    }
    .quotes p{
        font-weight: 400;
    }
    /* Large Desktop */
    @media only screen and (min-width: 1025px){
        .quotes{
            margin-top: 180px;
        }
        .quotes h4{
            width: 55%;
            margin-top: -300px;
            font-size: 1.8rem;
        }
        .quotes p{
            padding-top: 20px;
            font-size: 1rem;
        }
    }
    /* Tablet and Desktop */
    @media only screen and (max-width: 1024px){
        .quotes{
            margin-top: 180px;
        }
        .quotes h4{
            width: 80%;
            margin-top: -250px;
            font-size: 1.8rem;
        }
        .quotes p{
            padding-top: 20px;
            font-size: .9rem;
        }
    }
    /* Large Desktop */
    @media only screen and (max-width: 767px){
        .quotes{
            margin-top: 180px;
        }
        .quotes h4{
            width: 80%;
            margin-top: -250px;
            font-size: 1.2rem;
        }
        .quotes p{
            padding-top: 20px;
            font-size: .9rem;
        }
    }

</style>