<template>
    <div class="contaks">
        <div class="container">
            <h1>Coffee Matters</h1>
        </div>
    </div>
        <secContak :title="title"  :desc="desc"/>
</template>
<script>
import secContak from '../Contact/secContak.vue'
export default {
    components : {
        secContak,
    },
    data (){
        return {
            title : 'Contact Us',
            desc : ['Lorem ipsum dolor sit amet',
            'consectetur adipisicing elit.'],  
        }
    }
}
</script>
<style scoped>
    .contaks{
        background: url('../assets/image/img-contact/bg-contact.jpg');
        width: 100%;
        height: 100vh;
        background-size: cover;
        text-align: center;
        color: #ffff;
        background-position: center;
    }
    .contaks h1 {
        font-family: 'Water Brush',cursive;
    }
    /* Large Desktop */
    @media only screen and (min-width: 1025px){
         .contaks{
            margin-top: -110px;
            padding: 400px 0;
        }
        .contaks h1{
            font-size: 5.5rem;
        }
    }
    /* Tablet and Desktop */
    @media only screen and (max-width: 1024px){
        .contaks{
            margin-top: -110px;
            padding: 400px 0;
        }
        .contaks h1{
            font-size: 3.5rem;
        }
    }
    /* Handphone */
    @media only screen and (max-width: 767px){
        .contaks{
            margin-top: -100px;
            padding: 400px 0;
        }
        .contaks h1{
            font-size: 2.5rem;
        }
    }
</style>