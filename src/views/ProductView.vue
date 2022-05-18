<template>
    <!-- Hero Section -->
    <div class="heros">
        <div class="container">
                <h1>Be Energic With<br>Coffee</h1>
        </div>
    </div>
    
    <!-- Product Section -->
    <div class="produks">
        <div class="container">
            <div class="title">
                <div class="circle"></div>
                <h4>{{title}}</h4>
            </div>
            <h2>{{desc}}</h2>
            <div class="row produk">
                <div v-for="product in data" :key="product.id" class="col-6 col-md-4">
                    <img :src="getImage(product.image)">
                    <div class="row price pt-2">
                        <div class="col-6 price1">
                            <h6>{{product.title}}</h6>
                        </div>
                        <div class="col-6 price2">
                            <p>$ {{product.price}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>
<script>
import axios from '../plugins/axios.js'
// import { onMounted, reactive } from "vue";
export default {
    data (){
        return{
            title : 'Our Products',
            desc : 'Shop with us on our online store.',
            baseUrl: 'https://127.0.0.1:8000/api/products',
            data :[]
        }
        },
        created() {
      axios.get(`products`)
          .then(response => {
            this.data = response.data.data;
            console.log(response.data.data);  
          })
          .catch(error => {
            console.error(error);
      })
    },
    methods :{
        getImage(data){
         // let baseurl = 'baseurl';
            if (data.match(this.baseUrl)) {
                return data;
            } else {
                return this.baseUrl + data;
            }
        }
    } 

       
}

</script>
<style scoped>
    .heros{
        margin-top: -110px;
        background: url('../assets/image/img-produk/bg-hero.jpg');
        width: 100%;
        height: 100vh;
        background-size: cover;
        background-position: center;
        padding: 400px 0;
        text-align: center;
        color: #ffff;
    }
    .heros h1{
        font-family: 'Water Brush', cursive;
        /* margin: auto; */
    }
    .circle{
        background: #FDDFAA;
        width: 50px;
        height: 50px;
        border-radius: 100%;
    }
    .title h4{
        letter-spacing: .22em;
        text-transform: uppercase;
        font-weight: 500;
    }
    .produks h2{
        font-weight: 600;
        text-align: center;
    }
    .produk{
        margin: 100px auto;
        align-items: center;
    }
    .price{
        width: 100%;
        
    }
    .price2 p{
        font-weight: 600;
    }

    /* Large Desktop */
    @media only screen and (min-width: 1025px){
        .heros h1{
            font-size: 5rem;
        }
        .produks{
            margin-top: 150px;
        }
        .title{
            margin-top: 30px;
            margin-left: unset;
        }
        .circle{
            width: 50px;
            height: 50px;
        }
        .title h4{
            margin-top:-36px;
            margin-left: 20px;
            font-size: 1.5rem;
        }
        .produks h2{
            padding-top: 50px;
            font-size: 2rem;
        }
    }
    /* Tablet and Desktop */
    @media only screen and (max-width: 1024px){
        .heros h1{
            font-size: 3.8rem;
        }
        .produks{
            margin-top: 150px;
        }
        .title{
            margin-top: 30px;
            margin-left: unset;
        }
        .circle{
            width: 50px;
            height: 50px;
        }
        .title h4{
            margin-top:-35px;
            margin-left: 20px;
            font-size: 1.2rem;
        }
        .produks h2{
            padding-top: 50px;
            font-size: 1.8rem;
        }
    }
    /* Handphone */
    @media only screen and (max-width: 767px){
        .heros h1{
            font-size: 2.8rem;
        }
        .produks{
            margin-top: 150px;
        }
        .title{
            margin-top: 30px;
            margin-left: unset;
        }
        .circle{
            width: 40px;
            height: 40px;
        }
        .title h4{
            margin-top:-28px;
            margin-left: 20px;
            font-size: 1rem;
        }
        .produks h2{
            padding-top: 50px;
            font-size: 1.5rem;
        }
    }
</style>
