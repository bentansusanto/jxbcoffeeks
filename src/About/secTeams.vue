<template>
    <div class="teams">
        <div class="container">
            <div class="title">
                <div class="circle"></div>
                    <h4>{{teams.title}}</h4>
                </div>
                <h2>{{teams.judul[0]}} <br>{{teams.judul[1]}}</h2>
                <div class="row row-cols-auto team">
                    <div v-for="role in team" :key="role.id" class="col-12 col-md-6 col-lg-auto team1">
                        <img :src="role.foto">
                        <h5>{{role.name}}</h5>
                        <p>{{role.role}}</p>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    props :{
        teams:Object,
        team:Object,
    },
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
    .teams h2{
        font-weight: 600;
        text-align: center;
    }
    .team{
        text-align: center;
        margin: 100px auto;
    }
    .team1{
        margin: auto;
        padding-top: 10px;
    }
    .team1 h5{
        font-weight: 600;
        padding-top: 10px;
    }
    .team1 p{
        font-weight: 400;
    }
    /* Large Desktop */
    @media only screen and (min-width: 1025px){
        .teams{
            margin-top: 200px;
        }
        .title{
            margin-top: -10px;
            margin-left: 50px;
        }
        .title h4{
            margin-top: -38px;
            margin-left: 25px;
            font-size: 1.5rem;
        }
        .teams h2{
            padding-top: 50px;
            font-size: 2rem;
        }
        .team1{
            text-align: left;
        }
        .team1 h5{
            font-size: 1rem;
        }        
        .team1 p{
            font-size: .9rem;
        }
        
    }
    /* Tablet and Desktop */
    @media only screen and (max-width: 1024px){
        .teams{
            margin-top: 380px;
        }
        .title{
            margin-top: -10px;
            margin-left: 50px;
        }
        .title h4{
            margin-top: -35px;
            margin-left: 25px;
            font-size: 1.2rem;
        }
        .teams h2{
            padding-top: 50px;
            font-size: 1.8rem;
        }
        .team{
            width: 80%;
            text-align: center;
        }
        .team1{
            text-align: left;
        }
        .team1 h5{
            font-size: 1rem;
        }        
        .team1 p{
            font-size: .9rem;
        }
    }
    /* Handphone */
    @media only screen and (max-width: 767px){
         .teams{
            margin-top: 180px;
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
            margin-top: -28px;
            margin-left: 25px;
            font-size: 1rem;
        }
        .teams h2{
            padding-top: 50px;
            font-size: 1.5rem;
        }
        .team{
            width: 280px;
            text-align: center;
        }
        .team1 h5{
            font-size: 1rem;
        }        
        .team1 p{
            font-size: .9rem;
        }
        
    }
</style>