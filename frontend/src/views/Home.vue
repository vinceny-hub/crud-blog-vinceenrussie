<template>
  <div class="home">
     <FixLogo/>
   <Diaporama/>
   <Body/>
   <FixLogo/>
    <!-- <img alt="Vue logo" src="img/vincelarge3.jpg"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Diaporama from '@/components/Diaporama.vue'
import Body from '@/components/Body.vue'
import FixLogo from '@/components/FixLogo.vue'
export default {
  name: 'home',
  components: {
    Diaporama,
    Body,
    FixLogo
  }
  
}
</script>

<style>


a:hover{
  text-decoration: unset;
}
/* body { 
  width: 100vw;
  margin: 0 auto;
  padding: 0;
  background-color:black;
} */
</style>

