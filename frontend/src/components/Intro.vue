<template>
             <!--Mots d'introduction de vinceenrussie-->
        <div id= "introduction">
       <!--<img src="img/vincelarge3.jpg" width="900" height="300">-->

       <!--police de texte et couleur de "vince" "en" "russie"-->
       <div class="titreIntro">   
        <h1 class= "vinceenrussie">
         <div class="vinceFlex">
         <div class="v"><FONT face="Hungaria" class="v">V</FONT></div>
           <div><FONT face="Territory">i</FONT> </div>
           <div class="nce"><FONT face="Hungaria" class= "nce">nce</FONT> </div>
         </div>
          <div class="e"><FONT face="Arial" class= "e"> en </FONT></div>
           <div class="russie"><FONT face="Chernobyl">Russie</FONT> </div>
          </h1>
        <h4 class="aventures"><FONT face="sans-serif">Les aventures russes d'un Français expatrié en Russie</FONT></h4>
       </div>
      
            
        </div>
<!--fin de l'introductionde vinceenrussie-->

</template>

<script>
export default {
  name: 'Intro',
  props: {
    msg: String
  }
}
</script>


<style scoped>


/* #introduction {
  
  width: 900px;
  
  margin-left: auto;
  margin-right:auto; 
  margin-top: 300px;
  
} */

.russie{
  margin-left:-7px;
   animation-name: slideright;
   animation-duration: 2s;
    animation-timing-function: ease-in-out;
}
.vinceenrussie{
  margin-top: 50px;
  text-align: center;
  margin-bottom: 0px;
   text-shadow: black 0.1em 0.1em 0.2em;
   display: flex;
   justify-content: center;
   vertical-align: middle;
   
 }
 .vinceFlex{
 margin-right: 6px;
 display: flex;
   justify-content: center;
   vertical-align: middle;
   animation-name: slideleft;
   animation-duration: 2s;
    animation-timing-function: ease-in-out;

 }

.aventures{
  margin-bottom: 50px;
  text-align: center;
  
   text-shadow: black 0.1em 0.1em 0.2em;
}


h1{ 
  color: #a43b26; 
   text-shadow: black 0.1em 0.1em 0.2em;
  /* color: red;  */
}

h2{
  color: #a43b26;
  position: relative;
  margin-left: 0px;
   text-shadow: black 0.1em 0.1em 0.2em;
}
h3{
  color: white;
   /* text-shadow: black 0.1em 0.1em 0.2em; */
}
h4{
  color: white;
   /* text-shadow: black 0.1em 0.1em 0.2em; */
}
.v{
	color:white;
  margin-top:-3.5px;
  
}
.nce{
	color: white;
  margin-top:-3.5px;
}
.e{
  /* transform: translateY(-10px); */
  /* transform: rotate(-27deg) translateX(15px) translateY(-10px); */
	color: rgb(29, 29, 180);
  animation-name: slidein;
  animation-duration: 3.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
  

  /* margin-right: 10px; */
}
.titreIntro{
  align-content: flex-start;
  /* flex: ; */
}

@keyframes slidein {
  0% 
  {
    scale: 500%;
     transform-origin: top right;
    transform: rotate(-0deg) translateX(15px) translateY(-1000px);
  }
  /* 50%{
    scale: 100%;
  } */
  70%{
     scale: 100%;
     transform-origin: top right;
     transform: rotate(-0deg) translateX(6px) translateY(-23.5px);
  }
  /* 75% {
    transform-origin: top right;
    transform: rotate(-7deg) translateX(6px) translateY(-23.5px);
    
    } */
    /* 80% {
    transform-origin: top right;
    transform: rotate(-2deg) translateX(6px) translateY(-23.5px);
     
   
    } */
    /* 85% {
    transform-origin: top right;
    transform: rotate(-15deg) translateX(6px) translateY(-23.5px);

   
    } */
      /* 85% {
    transform-origin: top right;
    transform: rotate(-5deg) translateX(6px) translateY(-23.5px);

   
    } */
       /* 87% {
    transform-origin: top right;
    transform: rotate(-15deg) translateX(6px) translateY(-23.5px);
    
   
    } */
  
  80%{
      transform-origin: top right;
     transform: rotate(-7deg) translateX(6px) translateY(-23.5px);
  }
   87.5%{
      transform-origin: top right;
     transform: rotate(-27deg) translateX(6px) translateY(-23.5px);
  }
  90%{
      transform-origin: top right;
     transform: rotate(-20deg) translateX(6px) translateY(-23.5px);
  }
   95.5%{
      transform-origin: top right;
     transform: rotate(-27deg) translateX(6px) translateY(-23.5px);
  }
  97.5%{
      transform-origin: top right;
     transform: rotate(-25deg) translateX(6px) translateY(-23.5px);
  }
  to {
    transform-origin: top right;
    transform: rotate(-27deg) translateX(6px) translateY(-23.5px);
     /* transform: rotate(-27deg) translateX(15px) translateY(-10px); */
   
    }
}

@keyframes slideleft {
  0% 
  {
    scale: 500%;
    transform: translateX(-750px) ;
  }
  /* 50%{
     transform: rotate(-0deg) translateX(6px) translateY(-23.5px);
  }
  97%{
     transform: rotate(-0deg) translateX(6px) translateY(-23.5px);
  } */
  to {
    /* transform-origin: top right; */
    transform: translateX(0px);
     /* transform: rotate(-27deg) translateX(15px) translateY(-10px); */
   
    }
}
@keyframes slideright {
  0% 
  {
    scale: 500%;
    transform: translateX(750px) ;
  }
  /* 50%{
     transform: rotate(-0deg) translateX(6px) translateY(-23.5px);
  }
  97%{
     transform: rotate(-0deg) translateX(6px) translateY(-23.5px);
  } */
  to {
    /* transform-origin: top right; */
    transform: translateX(0px);
     /* transform: rotate(-27deg) translateX(15px) translateY(-10px); */
   
    }
}


</style>