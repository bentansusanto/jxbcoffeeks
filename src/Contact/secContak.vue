<template>
    <div class="kontaks">
        <div class="container">
            <div class="title">
                <div class="circle"></div>
                <h4>{{title}}</h4>
            </div>
            <h2>{{desc[0]}}<br>{{desc[1]}}</h2>
            <div class="kontak">
                    <form>
                        <div class="mb-3">
                            <input type="text" class="form-control" id="exampleInput1" placeholder="Name">
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
                        </div>
                        <div class="mb-3">
                            <textarea type="text" class="form-control" id="exampleInputEmail1" placeholder="Message"></textarea>
                        </div>
                        <a href="#" type="submit" class="btn btn-primary">send message</a>
                    </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props :{
        title:String,
        desc:Object
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
    .title h4{
        letter-spacing: .22em;
        text-transform: uppercase;
        font-weight: 500;
    }
    .kontaks h2{
        font-weight: 600;
        text-align: center;
    }
    .kontak{
        margin-top: 100px;
        margin-bottom: 200px;
    }
    form{
        background-color: #fafafa;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
        padding: 40px 40px;
        border-radius: 10px;
    }
    form input::placeholder{
        font-size: .9rem;
    }
    form textarea::placeholder{
        font-size: .9rem;
    }
    form textarea{
        height: 100px;
    }
    .btn{
        background-color: #FDDFAA;
        border: unset;
        color: #000;
        font-weight: 500;
        text-transform: uppercase;
    }

    /* Large Desktop */
    @media only screen and (min-width: 1025px){
        .kontaks{
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
            margin-left: 25px;
            font-size: 1.5rem;
        }
        .kontaks h2{
            padding-top: 50px;
            font-size: 2rem;
        }
        .kontak{
            width: 40%;
        }
        .btn{
            width: 100%;
            font-size: .9rem;
        }
        .kontak2{
            margin-top: 30px;
        }
    }
    /* Tablet and Desktop */
    @media only screen and (max-width: 1024px){
        .kontaks{
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
        .kontaks h2{
            padding-top: 50px;
            font-size: 1.8rem;
        }
        .kontak{
            width: 50%;
            text-align: left;
        }
        .btn{
            width: 100%;
            font-size: .9rem;
        }
    }
    /* Handphone */
    @media only screen and (max-width: 767px){
         .kontaks{
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
        .kontaks h2{
            padding-top: 50px;
            font-size: 1.5rem;
        }
        .kontak{
            width: 100%;
        }
        .btn{
            width: 100%;
            font-size: .9rem;
        }
    }
</style>