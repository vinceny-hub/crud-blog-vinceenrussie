<template>
<div class="container-fluid">
    <div class="row-personnalised h-100 justify-content-center align-items-center">
      <div class="container">
      <!-- <div class="col-md-8 gedf-main-home"> -->
         <section><!--présentation des derniers articles du blog-->


  <h2 class="posts">Tous les articles</h2>

            <div class="postsDB"  @dblclick="editPost(index, post)" v-for="(post, index) in posts.slice().reverse(-1)" :key="post.id">
    
      <h1 class="titreBlogBox"><router-link class="titreBlog" :to="{name: 'page', params: { id: post.id }}"> {{ post.title }}</router-link></h1>

      <router-link class="imgBlog" :to="{name: 'page', params: { id: post.id }}"> 
                <div class="">
                  <!-- <div class="" v-if="post.id == comment.postId">                     -->
                     <div class="" v-for="comment in comments.slice()" :key="comment.id">                                  
                       <div class="" v-if="post.id == comment.postId"> 
                        <img v-if="comment.imageUrl && !comment.videoUrl" class="img-contain" :src="comment.imageUrl.slice(0)">
                        <!-- <video id="videoElement" class="video-preview-contain" controls poster="velocity-thumbnail.jpg"
                    @canplay="updatePaused" @playing="updatePaused" @pause="updatePaused" type="video/mp4" media="all and (max-width:680px)"> 
                    <source :src="comment.videoUrl" type="video/mp4" media="all and (max-width:680px)">      
                    <p>Sorry, there's a problem playing this video. Please try using a different browser.</p>
                    </video> -->
                          <video  v-if="comment.videoUrl && !comment.imageUrl" id="videoElement" class="video-preview-contain" controls
                  > 
                    <source  :src="comment.videoUrl.slice(0)" type="video/mp4" media="all and (max-width:680px)">      
                    <p>Sorry, there's a problem playing this video. Please try using a different browser.</p>
                    </video>
                      </div>
                    </div>
                  <!-- </div> -->
                </div>                
                <div class="conteneurImage">
                   <div class="" v-for="comment in comments" :key="comment.id">
                     <div class="" v-if="post.id == comment.postId"> 
                  <div class="resumeBlog"> {{ comment.description.slice(0).substring(0,300)+"..." }}</div> 
                     </div>
                   </div>
                </div> 
              </router-link> 
          <!-- <router-link class="imgBlog" :to="{name: 'page', params: { id: post.id }}"> 
              
             
                <div class=""> -->
                  <!-- <div class="" v-if="post.id == comment.postId">                     -->
                    <!-- <div class="">                                    
                      <div class="">
                        <img class="img-contain" :src="post.imageUrl">
                      </div>
                    </div> -->
                  <!-- </div> -->
                <!-- </div>                
                <div class="conteneurImage"> -->
                   <!-- <div class="" v-for="comment in comments" :key="comment.id">
                     <div class="" v-if="post.id == comment.postId">  -->
                  <!-- <p class="resumeBlog">{{ post.description }}</p>  -->
                     <!-- </div>
                   </div> -->
                <!-- </div>  -->
             

      
                               <!-- <div class="" v-for="comment in comments.slice(0,1).reverse()" :key="comment.id">
                                 <div class="" v-if="post.id == comment.postId">                    
                            <div class="">  
                                 
    <div class=""><img class="img-contain" :src="comment.imageUrl"></div>
    </div>
                                 </div>
                               </div>
                
          <div class="conteneurImage">
            <p class="resumeBlog">{{ post.description }}</p>
            <p class="resumeBlog">{{ post.description2 }}</p>
            <p class="resumeBlog">{{ post.description3 }}</p>
            
            
            </div>
             -->
            
      
         
            <!-- </router-link> -->
   
   </div>
        <!-- <tr v-for="post in posts" :key="post._id">
         <td>{{ post.title }}</td>
         <td>{{ post.body }}</td>
         <td><router-link :to="{name: 'edit', params: { id: post._id }}" >Edit</router-link></td>
         <td><button @click.prevent="deletePost(post._id)">Delete</button></td>
        </tr> -->
    
   <!-- <div class="postsDB" v-for="post in posts.reverse()" :key="post._id"> -->
   <!-- <div class="postsDB"  @dblclick="editPost(index, post)" v-for="(post, index) in posts.slice().reverse()" :key="post.id"> -->
    
      <!-- <h1 class="titreBlogBox"><router-link class="titreBlog" :to="{name: 'post', params: { id: post.id }}"> {{ post.title }}</router-link></h1> -->
          <!-- <router-link class="imgBlog" :to="{name: 'post', params: { id: post.id }}">  -->
        <!-- <div class="imgBlog"> -->
    <!-- <div class="card aPost rounded card-white"> <h5><strong>{{ post.description1 }}</strong></h5><img class="img-contain" :src="post.imageUrl"></div> -->
          <!-- <img :src="post.imageUrl" class="imageArticle">        -->
          <!-- <div class="conteneurImage">
            <p class="resumeBlog">{{ post.description }}</p></div> -->
      
          <!-- </div> -->
            <!-- </router-link> -->
   
   <!-- </div> -->

  
</section>
      </div>
    </div>
</div>

</template>

<script>

// import axios from 'axios'
import PostDataService from "../services/PostDataService";
import PostCommentService from "../services/PostCommentService";
import UpLoadFilesService from '../services/UpLoadFilesService';

export default {
  name: "home",
  data() {
    return {
      posts:[],
      currentPost: null,
      currentIndex: -1,         
      message: '',
      post: {       
        id: null,
        // title: "",
        description: "",
        userId: "",
        username: "",
        published: false,
        imageUrl: "",
      },
        currentComment:"",
        comments:[],
        comment: {        
        id: null,
        // title: "",
        description: "",
        userId: "",
        username: "",
        published: false
      },
      isHidden:true,
      file:"",
      submitted: false,
      selectedIndex: null,
      editing: false,
      emptyError: false,
      noImage:false,
      users:""
    };
    
  },
 
  computed: {
    dataUser(){  return JSON.parse(localStorage.getItem("user"))
    },

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

    //  // get all posts
    // retrievePosts() {
    //   PostDataService.getAll()
    //     .then(response => {
    //       this.posts = response.data;
    //       console.log(response.data);          
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // },

 
  methods: {

    adminRole(){
    if (this.currentUser.id == '1'){
      let adRo = this.currentUser.id
      console.log(adRo)
    }
  
    },
    // get image selected
    upload(e) {   
      this.post.imageUrl = e.target.files[0];
      console.log(this.post.imageUrl);
    },
     // upload image to folder image in backend and send url to database
     uploadImage() {
      let dataUser = JSON.parse(localStorage.getItem("user"))
      const formData = new FormData();
      // if (this.image !== null || "") {
        formData.append("file", this.post.imageUrl, this.post.imageUrl.name);
        formData.append("id", dataUser.id);
        formData.append("username", dataUser.username,);

        UpLoadFilesService.upload(formData)
         .then(response => {
          
          console.log(response.data);
       
          this.retrievePosts();
      
         })
   
     //selected file
     },
    onSelect(e){     
      const file = this.$refs.file.files[0];
      this.post.imageUrl = file;
      if(this.post.imageUrl){
        this.noImage = true
      }
      console.log(e)
      console.log(this.post.imageUrl)
        
    },
    // cancel button
    cancel(){
       this.editing = this.editing == false
    },
    // edit a post
    editPost(){    
      this.editing = this.editing == true?false:true    
      if(this.editing== false){
      this.updatePost()
      }      
      console.log(this.editing)
    },
    // get all comments
    getComment() {
      
      PostCommentService.getAll()
      .then(response => {          
        this.comments = response.data;
        console.log(response.data.description);
        console.log(this.comments);
      })
      .catch(e => {
        console.log(e);
      });
  },   
  // load(){
  //     location.reload()
  // }, 
      // update a post
    updatePost() {
      PostDataService.update(this.currentPost.id, this.currentPost)
        .then(response => {           
          console.log(response.data);      
        })
        .catch(e => {
          console.log(e);
        });     
    },
      // delete a post
    deletePost() {    
      PostDataService.delete(this.currentPost.id)
        .then(response => {
          console.log(response.data);
          this.retrievePosts();        
        })
        .catch(e => {
          console.log(e);
        });
    },
      // get all posts
    retrievePosts() {
      // console.log()
      PostDataService.getAll()
        .then(response => {        
          this.posts = response.data;
          console.log(response.data);
         
        })        
        .catch(e => {
          console.log(e);
        });
    },
      //retrieve all users 
    retrieveAllUsers() {      
      PostDataService.getAllUsers()
      .then(response => {
        this.users = response.data;
        console.log(response.data);
      })        
      .catch(e => {
        console.log(e);
      })
    },   
      //refresing posts list
    refreshList() {
      this.retrievePosts();
      this.currentPost = null;
      this.currentIndex = -1;
    },
    // post selected
    setActivePost(post, index) {   
      this.currentPost = post;
      this.currentIndex = index;      
      console.log(post.id)      
    },
    // remove all posts (admin option)
    removeAllPosts() {
      PostDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    // serach by title ... in progress
    searchTitle() {
      PostDataService.findByTitle(this.title)
        .then(response => {
          this.posts = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    // save post in db
    savePost() {     
      let dataUser = JSON.parse(localStorage.getItem("user"))
      console.log(dataUser)  
      var data = {    
        description: this.post.description,
        id : dataUser.id,
      }
      PostDataService.create(data)
        .then(response => {        
          this.post.id = response.data.id;
          this.retrievePosts();
          this.newPost()
        })
        .catch(e => {
          console.log(e);
        });
    },
    // post submitted ?
    newPost() {
      this.submitted = false;
      this.post = {};
    },
      // logout
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    },
    // retrieveAllPosts(){
      
    //   this.retrievePosts()
    //   this.retrieveAllUsers()
    //   this.getComment()

    // }
  },
   
    mounted() {
      this.retrievePosts()
      this.retrieveAllUsers()
      this.getComment()
      // this.retrieveAllPosts()
     
  }        
}

</script>
 




<style>
body{
  background-color:black;
}

.postsDB{
  color:lightgray;
}
h1{ 
  /* color: red; */
  color: lightgray; 
 
}
.gedf-main{
  margin-left: auto;
  margin-right: auto;
}
.posts{
  color: lightgray;
  font-size: 30px;
  /* position: relative; */
  margin-left: 0px;
}
a{
    text-decoration: none;
}
.titreBlog:hover{
    /* color:red; */
    color: #a43b26;
}
a:visited{
    color:lightgray;
    
   
    
}

.posts{
  text-align: center;
}



/* .paragrapheArticle {
  width: 600px;
 
  margin-left: auto;
  margin-right: auto;
  color: white;
  text-align: justify;
  
} */


/* .imageArticle {
  width: 600px;
  height: 450px;
  margin-left: auto;
  margin-right: auto;
  display: flex;


} */

.gedf-main-home{
  margin-bottom: 66.6px;
  margin-right: auto;
  margin-left: auto;
}
p{
  color: white;
  width: 600px;
 
  margin-left: auto;
  margin-right: auto;
  color: white;
  text-align: justify;
  }

  .mosaïque{

    width: 900px;
    height: 275px;
    display: flex;
    margin-right: auto;
    margin-left: auto;
  }
  a:hover{
    text-decoration: unset;
  }


  .descriptionMosaïque{
    width: 900px;
    font-style: italic;

  }

  .italic{
    font-style: italic;
  }

  .posts{
  text-align: center;
}

.titreBlogAccueil {
  width: 660px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  /* color: red; */
  color:lightgray;
}

.titreBlogBox{

width: 650px;
text-align: left;
 margin-left: auto;
  margin-right: auto; 
  margin-bottom:17px; 
}
/* .img-contain{
  width:100%;
  height: 100%;
  object-fit: contain;
   box-shadow: 10px 7px 10px black;
} */


.titreBlog{
  /* width:750 px; */
  /* margin-bottom:20px; */
  margin-left: 0px;
  margin-right: auto;  
  /* align-content: left;  */
  /* color: red; */
  color:lightgray;
  font-size: 20px;
   text-shadow: black 0.1em 0.1em 0.2em;
 


}
.video-preview-contain{

 
  width:100%;
  height: 100%; 
  object-fit: contain;
  margin-top: auto;
  margin-bottom: auto;


}

.imgBlog {
  
  width: 650px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  /* border: 5px solid red; */
  border: 5px solid lightgray; 
 
   box-shadow: 10px 7px 10px black;

  display: flex;
  overflow: hidden;
  margin-top: -15px;
}

.imgBlog:hover {
  
  
  border: 5px solid #a43b26;
  text-decoration: unset;

}

.conteneurImage{
   width: 187px;
  height: 300px;

}


.resumeBlog{
  /* width: 25ch; */
  /* overflow: hidden;
  text-overflow: ellipsis; */
  /* white-space: wrap;  */
  /* overflow-wrap: break-word; */
  width: 187px;
  height: 300px;
  font-size: 14px;
  color: grey;
  padding-top:7px;
  padding-left: 9px;
  padding-right: 9px;
  text-align: left; 
  background-color: rgb(20, 20, 20);
  /* text-shadow: lightgray 0.01em 0.01em 0.02em */


 
}

.imageArticle{
  width: 450px;
  height: 301px;
  overflow: hidden;
  margin-left: -1px;
}







</style>