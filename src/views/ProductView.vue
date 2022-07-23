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
                <div v-for="product in products" :key="product.id" class="col-12 col-sm-auto col-md-4 col-lg-4 produk1">
                    <img :src="product.image">
                        <h6 class="pt-3">{{product.title}}</h6>
                        <p>{{product.desc}}</p>
                        <p>$ {{product.price}}</p>
                </div>
            </div>
        </div>
    </div>


</template>
<script>
// import axios from 'axios'
// import { onMounted, reactive } from "vue";
export default {
    data (){
            return{
                title : 'Our Products',
                desc : 'Shop with us on our online store.',
                products :[
                    {
                        title : 'Chinnese Tea',
                        desc : 'Tea Chinnese + Hot Water',
                        price : 3,
                        image : require('../assets/image/img-produk/tea.jpg')
                    },
                    {
                        title : 'Coffee Late',
                        desc : 'Milk + Coffee + Hot Water',
                        price : 3.25,
                        image : require('../assets/image/img-produk/coffe-late.jpg')
                    },
                    {
                        title : 'Croissant',
                        desc : 'Butter + egg + powder + water',
                        price : 2.45,
                        image : require('../assets/image/img-produk/bread.jpg')
                    }, 
                ]
            }
        },
    // setup() {
            //data product akan disimpan disini
            // const state = reactive({
            // data: {},
            // });
            //ketika pertama dimuat, akan langsung mengambil data API
    //         onMounted(async () => {
    //         const { data } = await axios.get("http://127.0.0.1:8000/api/products");
    //         state.data = data;
    //         });
    //         return{
    //             state
    //         }
    // },

       
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
    .produk{
        margin: 100px auto 200px;
    }
    .produks h2{
        font-weight: 600;
        text-align: center;
    }
    .produk1 img{
        margin: auto;
        text-align: center;
    }
    .price2 p{
        font-weight: 600;
    }
    .produk1 h6{
        font-size: 1.1rem;
        font-weight: 600;
    }
    .produk1 p:nth-child(3){
        font-size: .8rem;
        color: #a4a4a4;
        padding-top: -10px 0;
    }
    .produk1 p:nth-child(4){
        font-size: .9rem;
        font-weight: 400;
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
        .produk{
            width: 920px;
        }
        .produk1{
        width: 270px;
        margin: 10px auto;
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
        .produk1{
        width: 270px;
       
        margin: 10px auto;
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
        .produk1{
            width: 270px;
            margin: 10px auto;
        }
    }
</style>
