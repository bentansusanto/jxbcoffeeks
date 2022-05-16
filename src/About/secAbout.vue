<template>
    <div class="tentangs">
        <div class="container">
            <div class="title">
                <div class="circle"></div>
                <h4>{{title}}</h4>
            </div>
            <h2>{{head[0]}} <br>{{head[1]}}</h2>
            <div class="row tentang">
                <div class="col-12 col-md-6 tentang1">
                    <img :src="isi.latar">
                </div>
                <div class="col-12 col-md-6 tentang1">
                    <p>{{isi.desc[0]}} <br>{{isi.desc[1]}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props : {
        title:String,
        head:Object,
        isi:Object
    },
   
}
</script>
<style scoped>
    .tentangs{
        margin-top: 450px;
    }
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
    .tentangs h2{
        font-weight: 600;
        text-align: center;
    }
    .tentang{
        text-align: center;
        position: relative;
    }
    .tentang1 p{
        color: #a4a4a4;
        font-weight: 400;
    }
     @media only screen and (min-width: 1025px){
        .tentangs{
            margin-top: 400px;
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
         .tentangs h2{
            padding-top: 50px;
            font-size: 2rem;
            text-align: center;
        }
        .tentang{
            text-align: left;
            margin-top: 50px;
        }
         .tentang1 img{
            width: 80%;
        }
        .tentang1 p{
            padding-top: 30px;
            padding-bottom: 20px;
            width: 90%;
            margin-left: -50px;
            text-align: left;
            font-size: 1rem;
        }
        
    }
        /* Talet & Desktop */
    @media only screen and (max-width: 1024px){
        .tentangs{
            margin-top: 380px;
        }
        .title{
            margin-top: -10px;
            margin-left: 50px;
        }
        .title h4{
            top: 12px;
            left: 20px;
            font-size: 1.2rem;
        }
         .tentangs h2{
            padding-top: 50px;
            font-size: 1.8rem;
            text-align: center;
        }
        .tentang{
            text-align: left;
            margin-top: 100px;
        }
         .tentang1 img{
            width: 90%;
        }
        .tentang1 p{
            padding-bottom: 20px;
            width: 95%;
            margin: unset;
            text-align: left;
            font-size: .9rem;
        }
        
        
    }
        /* Handphone */
    @media only screen and (max-width: 767px){
        .tentangs{
            margin-top: 380px;
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
        .tentangs h2{
            padding-top: 50px;
            font-size: 1.5rem;
            text-align: center;
        }
        .tentang{
            text-align: center;
            margin-top: 100px;
        }
        .tentang1 img{
            width: 300px;
        }
        .tentang1 p{
            padding: 20px;
            width: 100%;
            margin: auto auto;
            text-align: center;
            font-size: .9rem;
        }
        
    }
</style>