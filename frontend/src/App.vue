<template>
  <div id="app"> 
     
     <!-- <div id="nav"> -->
     <header>
       <FixLogo/>
        <div class="header-box">
         
        <!-- <FixLogo /> -->
        <!-- <img class="imgHeader" src="./img/vincelarge3.jpg" alt=""> -->
        
          <img class="imgHeader" src="./img/carteRussiaVierge.jpg" alt="">
          <TitreLogo/>
        </div>
          <!-- <div class="header-logo">
           
            <a class="fixLogo" href="accueil.html"><FONT face="Chernobyl" class="vince">vince</FONT><FONT face="Chernobyl" class="en"> en</FONT><FONT face="Chernobyl" class="russie"> Russie</FONT></a>
            </div> -->
       
                <nav class="header-menu">
                     <!-- <div class="collapse navbar-collapse navbar-light" id="navbarResponsive"> -->
          <!-- <ul class="navbar-nav ml-auto">-->
            <!-- <li v-if="currentUser" class="nav-item">  -->
              <router-link v-if="currentUser" to="/posts" class="">
                <!-- <font-awesome-icon icon="home" />Home -->
              </router-link>
            <!-- </li> -->
            <!-- <li v-if="showAdminBoard" class="nav-item">  -->
              <!-- <router-link v-if="showAdminBoard" to="/admin" class="">Admin </router-link> -->
            <!-- </li> -->
            <!-- <li v-if="showModeratorBoard" class="nav-item">  -->
              <!-- <router-link v-if="showModeratorBoard" to="/mod" class="">Modo </router-link> -->
            <!-- </li>        
            <div v-if="!currentUser" class="navbar-nav">
              <li class="nav-item"> -->



                <!-- <router-link v-if="!currentUser" to="/register" class=""><font-awesome-icon icon="user-plus" />Sign Up </router-link> -->

              <!-- </li>
              <li class="nav-item"> -->


                <!-- <router-link v-if="!currentUser" to="/login" class=""><font-awesome-icon icon="sign-in-alt" />Login </router-link> -->


              <!-- </li>
            </div>       -->
            <!-- <li v-if="currentUser" class="navbar-nav"> -->
              <!-- <li class="nav-item"> -->
                <!-- <router-link v-if="currentUser" to="/profile" class="">
                  <font-awesome-icon icon="user" />
                  {{ currentUser.username.slice(0,5) }}
                </router-link> -->
               <!-- </li> -->
              <!-- <li class="nav-item"> -->
                <!-- <a class="" v-if="currentUser" href @click.prevent="logOut">
                  <font-awesome-icon icon="sign-out-alt" />LogOut
                </a> -->
              <!-- </li>-->
            <!-- </div> -->
          <!-- </ul>
        </div> --> 
              <!-- <router-link to="/login" class="nav-link"><font-awesome-icon icon="sign-in-alt" />Login </router-link> -->
              <router-link to="/"> Home </router-link> |
              <router-link to="/about"> About </router-link>
              <!-- <router-link v-if="showAdminBoard" to="/posts"> Create </router-link> -->
          
          </nav>
          <nav class="navBoard header-logged">
             <!-- <router-link v-if="showAdminBoard" to="/about"> Edit </router-link> -->
             <div>
              <router-link v-if="currentUser" to="/profile" class="">
                  <font-awesome-icon icon="user" />
                  {{ currentUser.username.slice(0,5) }}
                </router-link>
                
                <router-link v-if="!currentUser" to="/register" class=""><font-awesome-icon icon="user-plus" /> SignUp </router-link>
               <router-link v-if="!currentUser" to="/login" class=""><font-awesome-icon icon="sign-in-alt" /> Login </router-link>

               <router-link v-if="showAdminBoard" to="/admin" class="">Admin-Board </router-link>
               <router-link v-if="showModeratorBoard" to="/mod" class="">Moderator-Board </router-link>
              <router-link v-if="showAdminBoard" to="/posts"> Create </router-link>
               <a class="" v-if="currentUser" href @click.prevent="logOut"><font-awesome-icon icon="sign-out-alt" />LogOut </a>
             </div>
          </nav>
               
                  
          </header> 
          <Intro/>
          
          
    <!-- <nav id="#top" class="navbar navbar-expand-lg navbar-light bg-white border-nav static-top">
      <div class="container">
        <div class="titi_bloc">
        <a class="navbar-brand head-logo titi_bloc"  @click.prevent href="#">
          
          <img class="head-img" src="./img/titi0.png" alt="logo titi">
           <p class="titi_title"> Le coin de Titi </p>
        </a>
        </div>
        <button class="navbar-toggler border" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse navbar-light" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li v-if="currentUser" class="nav-item">
              <router-link to="/posts" class="nav-link">
                <font-awesome-icon icon="home" />Home
              </router-link>
            </li>
            <li v-if="showAdminBoard" class="nav-item">
              <router-link to="/admin" class="nav-link">Admin Board</router-link>
            </li>
            <li v-if="showModeratorBoard" class="nav-item">
              <router-link to="/mod" class="nav-link">Moderator Board</router-link>
            </li>        
            <div v-if="!currentUser" class="navbar-nav">
              <li class="nav-item">
                <router-link to="/register" class="nav-link">
                  <font-awesome-icon icon="user-plus" />Sign Up
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/login" class="nav-link">
                  <font-awesome-icon icon="sign-in-alt" />Login
                </router-link>
              </li>
            </div>      
            <div v-if="currentUser" class="navbar-nav">
              <li class="nav-item">
                <router-link to="/profile" class="nav-link">
                  <font-awesome-icon icon="user" />
                  {{ currentUser.username }}
                </router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href @click.prevent="logOut">
                  <font-awesome-icon icon="sign-out-alt" />LogOut
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">  -->
     <!-- </div> -->
      <div class="container">
      <router-view />
    </div>
    <footer id="sticky-footer" class=" text-white-50">
      <div class="item flag1">  Copyright  &copy; <img class="foot-img" src="./img/vincelarge3.jpg" alt="footer logo titi"></div>
      <div class="item flag2"> </div>
      <!-- <div class="item flag2">  Copyright  &copy; <img class="foot-img" src="./img/vincelarge3.jpg" alt="footer logo titi"></div> -->
      <div class="item flag3"> </div>
      <!-- <div  id="" class="text-center">
        <div class="item"> 1</div>
        <div class="item">
        Copyright  &copy;  <img class="foot-img" src="./img/vincelarge3.jpg" alt="footer logo titi">
        </div>
         <div class="item">3 </div>
      </div> -->
    </footer>
  </div>   
</template>


// export default {
//  name: "app"
//   };


<script>
// import Body from '@/components/Body.vue'
import Intro from '@/components/Intro.vue'
import FixLogo from '@/components/FixLogo.vue'
import TitreLogo from '@/components/TitreLogo.vue'
export default {
   components: {
    // Diaporama,
    // Body
    Intro,
    FixLogo,
    TitreLogo
   },
  name: "app",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_ADMIN');
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_MODERATOR');
      }

      return false;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>

<style>


nav{
  /* margin-top: 30px; */
  /* margin-bottom: 50px; */
}

.navbar-brand img {

  height: 50px;
  
}

.head-img{
  width: 50px;
  height: 0px;
  border-radius: 50%;

  float: left;
}

.row-personnalised{
  margin-left: -25px;
  margin-right: -25px;
}

.foot-img{
  /* width: 35px; */
  
  height: 66.66px;
  border-radius: 5%;
  margin-left: 0px;
}
footer{  
  /* margin-top: 100px; */
  background-color: rgb(29, 29, 180);
  bottom:0;
  width:100%;
}

.border-nav{
  border-bottom: 1px solid #091f43 ;
}
/* .titre_title{
  padding-top: 5px;
  margin-left: 60px;
  font-weight: bold;
  font-size: 25px;
  color:rgb(55, 13, 133);
  font-family:Verdana;
 

} */
h2{
   text-shadow: black 0.1em 0.1em 0.2em;
}

#app {
  
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color:rgb(47, 47, 47);
  /* background-color:rgb(33, 33, 33); */
  /* background-color: rgb(25, 25, 25); */
  color: #2c3e50;
  overflow: hidden;
  padding-top: 15px;

 
}
/* body{
     background-color:rgb(17, 17, 17);
} */

#nav {
  /* padding: 30px 0px 0px 0px; */
  padding-top:30px; 
 
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  /* color: #42b983; */
  color:#a43b26;
}

body{
     background-color:rgb(17, 17, 17);
}


.header-box{
  /* width: 900px; */
  justify-content: center;
}


/* entête */
/* header{ */
  
  /* text-align: center; */
/* } */
/* .header{ */
  
  /* width: 900px;
  height: 300px;
  margin-left: auto;
  margin-right: auto; */
  /* background-image: url('../../img/vincelarge3.jpg'); */
  /* background-size:  900px 300px; */
  /* border: 5px solid red; */
/* } */
.imgHeader {   
  width: 90vw;
  height: 30vw;
  max-width: 900px;
  max-height: 300px;
  /* width: 900px;
  height: 300px; */
   /* margin-left: auto;
  margin-right: auto;  */
   box-shadow: 10px 7px 10px black;
  /* background-size:  900px 300px; */
   /* border: 5px solid red;  */
   border: 5px solid white; 
}

/*vinceenrussie*/

/* .header-logo {   
  position: relative;
  margin-top:-25;
  margin-left:10%;
  width: 125px;
  font-family: 'Chernobyl';  
  border: 5px solid black; 
  background-color: black; 
} */

/*lien vers page d'accueil*/

/* .fixLogo{
  position: fixed;
} */

.vince {
  color: white;
}

.vince:hover {
  color: grey;
  }


.en{
  color: rgb(29, 29, 180);
}
.en:hover {
  color: grey;
  }


.russie {
  color: #a43b26;
}
.russie:hover{
  color: grey;
  }


.header-logo a{
  color: white;
}
.header-logo a:hover{
  color: white;
}

/*navigation*/
a{
  text-decoration: none;
}
.header-menu {

/* position: absolute; */
/* width:10%; */
/* margin-left: 697px; */
/* margin-left:707px; */
margin-left: 70vw;
margin-top: -37px;
font-family:'Hungaria';
/* border: 5px solid black; */
 /* border: 5px solid lightgray;  */
/* background-color: black; */

}
 .header-logged :hover{
  
  text-decoration: unset;
  color: #a43b26;

 }

.navBoard{
  width: 900px;
  height: 37.5px;
  margin-left: auto;
  margin-right: auto;
  font-family:'Hungaria';
  margin-top: 15px;
  /* position: absolute; */
  /* margin-top: -20px; */
  /* margin-bottom: -40px; */
  text-align: center;

}


.header-menu a {
color: black;
}
a:hover{
  text-decoration: unset;
}

.header-menu a:hover {
  text-decoration: unset;
  color: #a43b26;
}

.flag{
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  border: 1px solid black;
}
.item{
   /* width: 33.3333%; */
   /* height: auto; */
   border: 1px solid black;
}
.flag1{
height: 33.33px;
background-color: whitesmoke;
}
.flag2{
  height: 33.33px;
background-color: rgb(29, 29, 180);
}
.flag3{
height: 33.33px;
background-color: #a43b26;
}
footer{
 line-height: 100px;
}
 /* .titi_bloc{
  display: table-cell;
 
  
} */
 /* .titi_title > img{
  width: 50px;
 
   
}  */



/* .titi_bloc > h3{
  line-height: 50px;
} */ 

</style>
