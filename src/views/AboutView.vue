<template>
    <div class="heros">
        <div class="hero"></div>
        <div class="container">
            <h1 class="text-center">{{heros[0]}}<br class="mt-3">{{heros[1]}}</h1>
        </div>
    </div>
    <sec-about :title="title"  :head="judul"  :isi="content"/>
    <sec-teams :teams="teams" :team="team"/>
    <sec-quotes :quotes="quotes"/>
</template>
<script>
import secAbout from '../About/secAbout.vue'
import secTeams from '../About/secTeams.vue'
import secQuotes from '../About/secQuotes.vue'
export default {
    components :{
        secAbout,
        secTeams,
        secQuotes
    },
    data (){
        return{
            heros : ['Freshly Roasted,', 'Honestly Crafted'],
            title : 'Our Story',
            judul : ['Lorem ipsum dolor sit amet',
            'consectetur adipisicing elit.'],
            content : {
                desc :  ['Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad culpa animi iste voluptatem, odit quam quos reiciendis voluptas excepturi officia cum libero iure consequuntur aliquid inventore reprehenderit ratione quis voluptatum.','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, amet minus. Consectetur ratione alias voluptate soluta consequatur officia quas, ad expedita quaerat repellat eos aspernatur?'],
                latar : require ('../assets/image/img-home/bg-about.jpg')
            },
            teams :
                {   
                    title : 'Our Teams',
                    judul : ["Lorem ipsum dolor sit amet","consectetur adipisicing elit."]
                },
            team :[
                    {
                        name : 'Tabitha Turner',
                        role : 'Owner',
                        foto : require('../assets/image/img-about/tabitha.jpg')
                    },
                    {
                        name : 'Benyamin Bohlou',
                        role : 'Barista',
                        foto : require('../assets/image/img-about/benyamin.jpg')
                    },
                    {
                        name : 'Louis Hansel',
                        role : 'Barista',
                        foto : require('../assets/image/img-about/louis.jpg')
                    },
                    {
                        name : 'Kayla Phaneuf',
                        role : 'Barista',
                        foto : require('../assets/image/img-about/kayla.jpg')
                    },
                ],
                quotes : {
                    name : 'Charles J.Sykes',
                    desc : '"Television is not real life. In real life, people actually have to leave the coffee shop and go to jobs."'
                }
        }
    }
}
</script>
<style scoped>
    .heros{
        margin-top: -110px;
    }
    .hero{
        background: url('../assets/image/img-about/bg-hero.jpg');
        width: 100%;
        height: 100vh;
        background-size: cover;
    }
    .heros h1{
        font-family: 'Water Brush', cursive;
        color: #ffff;
    }
    /* Large Desktop */
    @media only screen and (min-width: 1025px){
        .hero{
            background-position: center;
        }
        .heros h1{
            margin-top: -450px;
            font-size: 5rem;
        }
    }
    /* Tablet and Desktop */
    @media only screen and (max-width: 1024px){
       .heros{
        margin-top: -110px;
    }
       .hero{
            background-position: center;
        }
        .heros h1{
            margin-top: -370px;
            font-size: 3.2rem;
        }
    }
    /* Handphone */
    @media only screen and (max-width: 767px){
        .hero{
            background-position: center;
        }
        .heros h1{
            margin-top: -370px;
            font-size: 2.5rem;
        }
    }
</style>