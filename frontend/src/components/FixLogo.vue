<template>
                <div class="header-logo">
           
            <router-link class="fixLogo" to="/"><FONT face="Chernobyl" class="vince">vince</FONT><FONT face="Chernobyl" class="en"> en</FONT><FONT face="Chernobyl" class="russie"> Russie</FONT></router-link>
            </div> 
            
    
<!--fin de l'introductionde vinceenrussie-->

</template>

<script>
export default {
  name: 'FixLogo',
  props: {
    msg: String
  }
}
</script>

<style>
.header-logo {  
   z-index: 1; 
   position: fixed;
   text-align: left;
   padding-top: 10px;
   padding-left: 5px;
  /* margin-top:-300px; */
  margin-left: 185px; 
  /* width: 125px; */
  /* font-family: 'Chernobyl'; */ 
  /* border: 5px solid black; */
  /* background-color: black; */
}

.fixLogo{
 font-size: 12px;
} 

.en{
  color: rgb(29, 29, 180);
}

</style>