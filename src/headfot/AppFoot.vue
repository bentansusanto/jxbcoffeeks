<template>
    <footer>
        <div class="bawahs">
            <div class="container bawah">
                    <p>{{alamat}}</p>
                </div>
                <div class="row socials">
                    <a  href="" class="col-6 social">
                        <img :src="socials[0]">
                    </a>
                    <a href="" class="col-6 social">
                        <img :src="socials[1]">
                    </a>
                </div>
                <div class="footer">
                    <p>
                    Copyright &copy; {{currentYear}} &nbsp;|&nbsp; {{made}} &nbsp;|&nbsp; All Can Deserve
                    </p>
                </div>
            </div>
    </footer>
</template>
<script>
export default {
    data (){
        return{
            alamat : 'Jl. Raja Isa, Batam City, Indonesia',
            socials : [
                'https://img.icons8.com/material-outlined/30/FDDFAA/instagram-new--v1.png',
                'https://img.icons8.com/material-outlined/30/FDDFAA/whatsapp--v1.png'
            ],
            currentYear : new Date(). getFullYear(),
            made : 'JXB 커피'

        }
    }
}
</script>
<style scoped>
    
    .bawahs{
        background-color: #211F1F;
        width: 100%;
    }
    .bawahs p{
        color: #ffff;
        padding-top: 20px;
    }
    .socials{
        width: 100px;
        margin:  auto;
        text-align: center;
    }
    .social{
        text-decoration: none;
        color: #ffff;
    }
    .footer p{
        font-weight: 500;
        margin: auto;
        text-align: center;
        color: #a4a4a4;
    }
    /* Large Desktop */
    @media only screen and (min-width: 1025px){
        footer{
        margin-top: -50px;
        }
        .bawahs{
            height: 18vh;
        }
        .bawahs p{
            text-align: center;
            font-size: 1rem;
        }
         .footer p{
            font-size: .8rem;
        }
    }
    /* Tablet and Desktop */
    @media only screen and (max-width: 1024px){
        footer{
        margin-top: -50px;
        }
        .bawahs{
            height: 19vh;
        }
        .bawahs p{
            text-align: center;
            font-size: .9rem;
        }
         .footer p{
            font-size: .8rem;
        }
    }
    /* Handphone */
    @media only screen and (max-width: 767px){
        footer{
        margin-top: -50px;
        }
        .bawahs{
            height: 22vh;
        }
        .bawah{
            margin: 20px auto;
        }
        .bawahs p{
            text-align: center;
            font-size: .9rem;
        }
        .footer p{
            font-size: .8rem;
        }
        
    }
</style>