<template>
    <div class="produks">
        <div class="container">
            <div class="title">
                <div class="circle"></div>
                <h4>{{title}}</h4>
            </div>
            <h2>{{head[0]}} <br>{{head[1]}}</h2>
            <div class="row produk">
                <div v-for="produk in produks" :key="produk.id" class="col-12 col-md-4 produk1">
                    <div class="gambar">
                        <img :src="produk.image">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            title : 'our product',
            head : ['Lorem ipsum dolor sit amet','consectetur adipisicing elit.'],
            produks : [
                {
                    title : 'Coffee',
                    image : require('../assets/image/img-home/bg-coffe.jpg')
                },
                {
                    title : 'Tea',
                    image : require('../assets/image/img-home/bg-tea.jpg')
                },
                {
                    title : 'Bread',
                    image : require('../assets/image/img-home/bg-bread.jpg')
                }
            ]     
        }
    }
}
</script>
<style scoped>
    .circle{
        background: #FDDFAA;
        width: 50px;
        height: 50px;
        border-radius: 100%;
    }
    .title{
        position: relative;
    }
    .title h4{
        position: absolute;
        letter-spacing: .22em;
        text-transform: uppercase;
        font-weight: 500;
    }
    .produks h2{
        font-weight: 600;
    }
    .produk{
        padding-top: 50px;
        text-align: center;
    }
    .produk1{
        margin-top: 20px;
    }
    .gambar{
        background:transparent linear-gradient(to bottom, rgba(0, 0, 0, 0)0%, #000)100%;
        width: 300px;
        height: 185px;
        overflow: hidden;
        position: relative;
        margin: auto;
    }
    .gambar img{
        transition: all 0.3s ease-out;
    }
    .gambar:hover img{
        transform:  translateY(-20px);
        opacity: 0.3;
    }
    /* Large Desktop */
    @media only screen and (min-width: 1025px){
         .produks{
            margin-top: 300px;
        }
         .title{
            margin-top: -10px;
            margin-left: 50px;
        }
         .title h4{
             top:12px;
            left: 25px;
            font-size: 1.5rem;
        }
         .produks h2{
            padding-top: 50px;
            font-size: 2rem;
            text-align: center;
        }
    }
    /* Tablet and Desktop */
    @media only screen and (max-width: 1024px){
         .produks{
            margin-top: 300px;
        }
         .title{
            margin-top: -10px;
            margin-left: 50px;
        }
         .title h4{
            top: 12px;
            left: 30px;
            font-size: 1.2rem;
        }
         .produks h2{
            padding-top: 50px;
            font-size: 1.8rem;
            text-align: center;
        }
    }
    /* Handphone */
    @media only screen and (max-width: 767px){
         .produks{
            margin-top: 250px;
        }
        .title{
            margin-top: -30px;
            margin-left: unset;
        }
        .circle{
            width: 40px;
            height: 40px;
        }
        .title h4{
            top:12px;
            left: 20px;
            font-size: 1rem;
        }
        .produks h2{
            padding-top: 50px;
            font-size: 1.5rem;
            text-align: center;
        }
    }
</style>