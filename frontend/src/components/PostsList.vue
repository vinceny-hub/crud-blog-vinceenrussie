
<template>

  <div class="container-fluid">
    <div class="h-100 justify-content-center row-personnalised align-items-center">
      <div class="col-md-8 gedf-main">
        <div class="" v-if="!submitted">
          <div class="box-header-body-input">          
            <div class="card-body card-input">
              <div class="form-group">
                <h1 class="" for="message">Créer un article</h1>
                <!-- <textarea-autosize ref="myTextarea" :min-height="75" :max-height="350" type="text" class="form-control" id="description" required v-model="post.description1" autofocus  placeholder="What are you thinking?"/> -->
                <div class="onLeft">
                <label for="" class="labelTitre">Titre du nouvel article</label>
                </div>
                <textarea-autosize ref="myTextarea" :min-height="75" :max-height="350" type="text" class="form-control" id="description" required v-model="post.title" autofocus  placeholder="Texte ici..."/>
                <!-- <textarea-autosize ref="myTextarea" :min-height="75" :max-height="350" type="text" class="form-control" id="description" required v-model="post.description" autofocus  placeholder="Titre du nouvel article"/> -->
                <!-- <textarea-autosize ref="myTextarea" :min-height="75" :max-height="350" type="text" class="form-control" id="description" required v-model="post.description" autofocus  placeholder="Titre du nouvel article"/>
                <textarea-autosize ref="myTextarea" :min-height="75" :max-height="350" type="text" class="form-control" id="description" required v-model="post.description2" autofocus  placeholder="Titre du nouvel article"/>
                <textarea-autosize ref="myTextarea" :min-height="75" :max-height="350" type="text" class="form-control" id="description" required v-model="post.description3" autofocus  placeholder="Titre du nouvel article"/>-->
                <!-- <input  type="file" ref="file" @change="onSelect" class="" id=""> -->
              <!--  <input  type="file" ref="file" @change="onSelect2" class="" id=""> -->  
               <div class="btn-container onRight">
                <button :disabled="!post.title" @click="savePost()" type="submit" class="btn btn-primary" v-show="isHidden">Créer un nouvel article</button>   
              </div>             
              </div>           
              <div>
                <div v-if="!emptyError"></div>
              </div>
            </div> 
          </div>
        </div>       
        <div class="">          
        <!-- <div class="d-inline-flex p-2 post_title_margin"> 
        <img class="" src="" alt="">        
        </div> -->
        <section>
          <h2 class="posts">Éditer les articles :</h2>
            <div class="postsDB"  @dblclick="editPost(index, post)" v-for="(post, index) in posts.slice().reverse()" :key="post.id">    
              <h1 class="titreBlogBox">
                <router-link class="titreBlog" :to="{name: 'post', params: { id: post.id }}"> {{ post.title }}
                </router-link>
              </h1>

                  
              <router-link class="imgBlog" :to="{name: 'post', params: { id: post.id }}"> 
                <div class="">
                  <!-- <div class="" v-if="post.id == comment.postId">                     -->
                     <div class="" v-for="comment in comments.slice()" :key="comment.id">                                  
                       <div class="" v-if="post.id == comment.postId"> 
                        <img class="img-contain" :src="comment.imageUrl">
                      </div>
                    </div>
                  <!-- </div> -->
                </div>                
                <div class="conteneurImage">
                   <div class="" v-for="comment in comments" :key="comment.id">
                     <div class="" v-if="post.id == comment.postId"> 
                  <p class="resumeBlog">{{ comment.description }}</p> 
                     </div>
                   </div>
                </div> 
              </router-link> 
              



              <!-- <router-link class="imgBlog" :to="{name: 'post', params: { id: post.id }}"> 
                <div class="" v-for="comment in comments" :key="comment.id">
                  <div class="" v-if="post.id == comment.postId">                    
                    <div class="">                                    
                      <div class="">
                        <img class="img-contain" :src="post.imageUrl">
                      </div>
                    </div>
                  </div>
                </div>                
                <div class="conteneurImage">
                  <p class="resumeBlog">{{ post.description }}</p> 
                </div> 
              </router-link>   -->
            </div>  
        </section>       
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import PostDataService from "../services/PostDataService";
import PostCommentService from "../services/PostCommentService";
import UpLoadFilesService from '../services/UpLoadFilesService';

export default {
  name: "posts-list",
  data() {
    return {
      posts:[],
      currentPost: null,
      currentIndex: -1,         
      message: '',
      post: {       
        id: null,
        // title: "",
        title:"",
        description: "",
          description2: "",
          description3: "",

        userId: "",
        username: "",
        published: false,
        imageUrl: "",
         imageUrl1: "",
          imageUrl2: "",
      },
        currentComment:"",
        comments:[],
        comment: {        
        id: null,
        title: "",
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
       this.post.imageUrl2 = e.target.files[0];

      console.log(this.post.imageUrl);
    },
     // upload image to folder image in backend and send url to database
     uploadImage() {
      let dataUser = JSON.parse(localStorage.getItem("user"))
      const formData = new FormData();
      // if (this.image !== null || "") {
        formData.append("file", this.post.imageUrl);
        formData.append("file", this.post.imageUrl2);
        formData.append("id", dataUser.id);
        formData.append("username", dataUser.username,);
         formData.append("title", this.post.title,);
         formData.append("description", this.post.description,);
         formData.append("description2", this.post.description2,);
         formData.append("description3", this.post.description3,);

         var data = {  
        // title: this.post.title,
        id: dataUser.id,
        description: this.post.description,
        description2: this.post.description2,
        description3: this.post.description3,

        // imageUrl : this.post.imageUrl.name,

        
      
      }

        UpLoadFilesService.upload(formData, data)
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
    onSelect2(e){     
      const file = this.$refs.file.files[0];
      this.post.imageUrl2 = file;
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
    // deletePost() {    
    //   PostDataService.delete(this.currentPost.id)
    //     .then(response => {
    //       console.log(response.data);
    //       this.retrievePosts();        
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // },
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

        // let dataUser = JSON.parse(localStorage.getItem("user"))
      let dataUser = JSON.parse(localStorage.getItem("user"))
      const formData = new FormData();
      // if (this.image !== null || "") {
        // formData.append("file", this.post.imageUrl, this.post.imageUrl.name);
        formData.append("id", dataUser.id);
        formData.append("username", dataUser.username,);
        formData.append("title",this.post.title,);
        //  formData.append("description",this.post.description,);

       


      // let dataUser = JSON.parse(localStorage.getItem("user"))
      // console.log(dataUser)  
      // var data = {  
      //   title: this.post.title,
      //   id: dataUser.id,
      //   description: this.post.description,
      //   description2: this.post.description2,
      //   description3: this.post.description3,

        // imageUrl : this.post.imageUrl.name,

        
      
      // }
      // UpLoadFilesService.upload(formData)
      PostDataService.create(formData)
      // PostDataService.create(data)
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

    //   getPost() {
    //   PostDataService.getAll()
    //     .then((response)=> {

    //       this.post = response.data;
         
    //       // console.log(response.data);
    //       console.log(this.post.userId)
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // },

        getPost(id) {
      PostDataService.get(id)
        .then((response)=> {

          this.post = response.data;
         
          // console.log(response.data);
          console.log(this.post.userId)
        })
        .catch(e => {
          console.log(e);
        });
    },
    // retrieveAllPosts(){
      
    //   this.retrievePosts()
    //   this.retrieveAllUsers()
    //   this.getComment()

    // }
  },

  // beforeMount(){
  // this.retrievePosts()
  // },
   
    mounted() {
      // this.refreshList()
      // this.getPost()
      this.getComment()
      this.retrievePosts()
      this.retrieveAllUsers()
     
      // this.retrieveAllPosts()
     
  }        
}

</script>

<style>

.card-header{
   background-color:  #091f43;
}
.title-pos{
  margin-left: 10px;
  margin-top: 10px;
  color: #091f43;
  font-weight: bold;
}
/* .card-img{
  width: 35px;
  height: 35px;
  /* border-radius: 50%; */
 
/* }  */
/* .card-img-post{
  width: 50px;
  margin-top: 10px;
  border-bottom: none;
} */
.post_title_margin{
  /* margin-top: 25px; */
}
#posts-tab{
  border: 1px solid #e1e1e1;
  border-bottom: none; 
}
#images-tab{
  border: 1px solid #e1e1e1;
  border-bottom: none; 
}
.nav-link{
  color: white;
} 
.box-header-body-input{ 
  /* box-shadow: 10px 7px 10px#091f43; */
}
.card-body{
   /* box-shadow: 10px 7px 10px #091f43; */
}
.titi_img{
  width: 50px; 
  height: 50px;
  margin-top: 0px;
  margin-bottom: 0px;
  border-radius: 50%;
}
.img-contain{
  width:100%;
  height: 100%;
  object-fit: contain;
   box-shadow: 10px 7px 10px black;
}
/* .title-img{
  margin-top: 15px;
  width: 50px; 
  margin-top: 0px;
  margin-bottom: 0px;
  border-radius: 50%;
} */
/* .gedf-main{
  margin-bottom: 100px;
} */
.comment {
    width: 80%;
    overflow: hidden;
    border: 1px solid #091f43;
    margin-bottom: 30px;
    margin-left: 100px;
    /* box-shadow: 5px 5px 5px #091f43;   */
} 

.row-personnalised{
  margin-left: -25px;
  margin-right: -25px;
}

.aPost {
    width: 100%;
    min-height: px;
    overflow: hidden;
    border: 0.1vw solid white;
    margin-bottom: 30px;  
} 
.postBox { 
    border: 1px solid #091f43;
    margin-bottom: 30px;     
} 
.list-group{
  border:white;
}
.list-group-item{
    border:white;
}
li{
   border:white

}
#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  max-width: 100%;
  max-height: 500px;
}
.pink{
  border: 1px solid  #091f43;
  color:  #091f43;
}
.colorLink{
  color: #0069d9;
}

.titi_title_mini{
  margin-top: -30px;
  margin-left: 60px;
  font-weight: bold;
  font-size: 11px;
  color:rgb(55, 13, 133);
  font-family:Verdana;
 

}
.labelTitre{
color: lightgray;
}
.mini_logo_pos{
float: left;
}
a:hover{
  text-decoration: unset;
}

</style>
