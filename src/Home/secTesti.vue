<template>
    <div class="testimonis">
        <div class="contanier testimoni">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                           <h5>{{message}}</h5>
                           <p>{{name[0]}}</p> 
                        </div>
                        <div class="carousel-item">
                           <h5>{{message}}</h5>
                           <p>{{name[1]}}</p> 
                        </div>
                        <div class="carousel-item">
                           <h5>{{message}}</h5>
                           <p>{{name[2]}}</p> 
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data (){
        return{
                name : ['Jordan','Adrian','Jordy'],
                message : '" I’ve been drinking their awesome coffee for the past 7 years ! "'
        }
    }
}
</script>
<style scoped>
    .testimonis{
        
        background: url('../assets/image/img-home/bg-testimoni.jpg');
        width: 100%;
        height: 60vh;
        background-size: cover;  
        background-position: center; 
    }
    .testimoni{
        color: #ffff;
        text-align: center;
    }
    .carousel-inner{ 
        width: 60%;
        background: rgba(0, 0, 0, 0.5);    
    }
    .carousel-item p{
        padding-top: 20px;
    }
    .carousel-item h5{
        margin: auto;
    }
    .carousel-indicators button{
        width: 8px;
        height: 8px;
        border-radius: 100%;
        margin: auto 5px;
        background-color: #FFBA42;
    }
    /* Large Desktop */
    @media only screen and (min-width: 1025px){
        .testimonis{
            margin-top: 120px;
           padding: 100px 0;
       }
       .carousel-inner{
           width: 50%;
           margin: auto auto;
           padding: 70px 70px;
       }
       .carousel-item h5{
            width: 80%;
        }
        .carousel-indicators button{
            margin: -50px 5px;
        }
    }
    /* Tablet and Desktop */
    @media only screen and (max-width: 1024px){
       .testimonis{
           margin-top: 100px;
           padding: 80px 0;
       }
       .carousel-inner{
           width: 55%;
           margin: auto auto;
           padding: 60px 60px;
       }
       .carousel-item h5{
            width: 70%;
        }
        .carousel-indicators button{
            margin: -40px 5px;
        }
    }
    /* Handphone */
    @media only screen and (max-width: 767px){
       .testimonis{
           padding: 120px 0;
       }
       .carousel-inner{
           width: 300px;
           margin: auto;
           padding: 20px 50px;
       }
        .carousel-item h5{
            width: 100%;
        }
        .carousel-indicators button{
            margin: -20px 5px;
        }

    }
</style>