<template>
  <div class="container-fluid">
    <div class="footer-post-list">
      <div class="row h-100 justify-content-center align-items-center">    
        <div class="col-md-8 gedf-main card .post-comment card-shadow">   
          <div v-if="currentPost" class="card-body">
            <div class="">
              <div class="d-inline-flex p-0"> 
                   <div class="d-inline-flex p-2 post_title_margin"> <img class="title-img" src="" alt=""><h4 class="title-pos">PostId</h4></div>
                <!-- <img class="title-img-comment" src="../img/icon1.png" alt="icon logo titi"> -->
                <!-- <h4 class="title-pos">Post</h4> -->
              </div>
            </div>
            <div class="jk">
                <div class="post-heading">            
                  <div class="list-group">     
                    <div class="float meta ">
                      <div class="title h5">    <!-- post username  -->
                        <a href="#"><b> {{ currentPost.user.username }} </b></a>
                          made a post.
                      </div>
                      <h6 class="text-muted time"> {{ currentPost.createdAt.slice(7,10).replace(/-/g,` `) }} {{ currentPost.createdAt.slice(5,7).replace(/-/g,` `) }} {{ currentPost.createdAt.slice(0,4).replace(/-/g,`.`) }} {{currentPost.createdAt.slice(11,16).replace(/:/g,`h`)}} (UTC)</h6>
                     
                    </div>
                  </div>  
                                                          <!-- shown if not editing -->
                  <div class="kl card aPost rounded card-white" v-if="!editing"> 
                                                                   <!-- get post selected -->
                    <!-- <h5 class="postCard"><strong>{{ currentPost.description }}</strong></h5> -->
                    <h5 class=""><strong>Tableau texte 1</strong></h5>
                     <textarea-autosize v-show="dataUser.id == currentPost.userId || showAdminBoard" placeholder="texte" ref="myTextarea"  :min-height="30" :max-height="350"  type="text"   class="form-control" id="description" v-model="currentPost.description"/>
                        <button class="btn btn-success mr-2 float-right" type="submit" @click="updatePost(currentPost)"> Envoyer </button>
                    <input v-show="dataUser.id == currentPost.userId|| showAdminBoard" type="file" ref="file" @change="onSelect" class="" id="">
                    <img v-show="currentPost.imageUrl" class="img-contain" :src="currentPost.imageUrl" >
                  </div>  
                   <button  v-if="!currentPost.imageUrl" class="btn btn-success mr-2 float-right" type="submit" @click="uploadImage(currentPost)"> Nouvelle image </button>
                            <button v-if="currentPost.imageUrl" class="btn btn-success mr-2 float-right" type="submit" @click="uploadImage(currentPost)"> Mise à jour de l'image </button> 
                     <div class="kl card aPost rounded card-white" v-if="!editing"> 
                                                                   <!-- get post selected -->
                    <!-- <h5 class="postCard"><strong>{{ currentPost.description }}</strong></h5> -->
                    <h5 class=""><strong>Tableau texte 2</strong></h5>
                     <textarea-autosize v-show="dataUser.id == currentPost.userId || showAdminBoard" placeholder="texte" ref="myTextarea"  :min-height="30" :max-height="350"  type="text"   class="form-control" id="description" v-model="currentPost.description2"/>
                       <button class="btn btn-success mr-2 float-right" type="submit" @click="updatePost(currentPost)"> Envoyer </button>
                    <input v-show="dataUser.id == currentPost.userId|| showAdminBoard" type="file" ref="file" @change="onSelect" class="" id="">
                    <img v-show="currentPost.imageUrl" class="img-contain" :src="currentPost.imageUrl" >
                  </div> 
                   <button  v-if="!currentPost.imageUrl" class="btn btn-success mr-2 float-right" type="submit" @click="uploadImage2(currentPost)"> Nouvelle image </button>
                            <button v-if="currentPost.imageUrl" class="btn btn-success mr-2 float-right" type="submit" @click="uploadImage2(currentPost)"> Mise à jour de l'image </button>
                     <div class="kl card aPost rounded card-white" v-if="!editing"> 
                                                                   <!-- get post selected -->
                    <!-- <h5 class="postCard"><strong>{{ currentPost.description }}</strong></h5> -->
                    <h5 class=""><strong>Tableau texte 3</strong></h5>
                     <textarea-autosize v-show="dataUser.id == currentPost.userId || showAdminBoard" placeholder="texte" ref="myTextarea"  :min-height="30" :max-height="350"  type="text"   class="form-control" id="description" v-model="currentPost.description3"/>
                       <button class="btn btn-success mr-2 float-right" type="submit" @click="updatePost(currentPost)"> Envoyer </button>
                    <input v-show="dataUser.id == currentPost.userId|| showAdminBoard" type="file" ref="file" @change="onSelect" class="" id="">
                    <img v-show="currentPost.imageUrl" class="img-contain" :src="currentPost.imageUrl" >
                  </div> 
                  <div>
                     <textarea-autosize v-show="dataUser.id == currentPost.userId || showAdminBoard" placeholder="texte" ref="myTextarea"  :min-height="30" :max-height="350"  type="text"   class="form-control" id="description" v-model="currentPost.description"/>
                   <button  v-if="!currentPost.imageUrl" class="btn btn-success mr-2 float-right" type="submit" @click="uploadImage(currentPost)"> Nouvelle image </button>
                            <button v-if="currentPost.imageUrl" class="btn btn-success mr-2 float-right" type="submit" @click="uploadImage(currentPost)"> Mise à jour de l'image </button>
                            <button  class="btn btn-success mr-2 float-right" type="submit" @click="saveComment()"> comment </button>
                  </div>
                    <div class="kl card aPost rounded card-white" v-if="!editing"> 
                                                                   <!-- get post selected -->
                    <!-- <h5 class="postCard"><strong>{{ currentPost.description }}</strong></h5> -->
                     <button v-if="dataUser.id == currentPost.userId  || showAdminBoard" class="badge badge-danger mr-2" @click="deletePost()"> Delete </button> 
          <button class="btn btn-success mr-2 float-right" type="submit"  @click="retour()"> Retour </button>
                  </div> 
                    <!-- shown if editing -->                                                   
                  <!-- <textarea-autosize v-show="dataUser.id == currentPost.userId || showAdminBoard" placeholder="Type something here..." ref="myTextarea"  :min-height="30" :max-height="350" v-else type="text"   class="form-control" id="description" v-model="currentPost.description"/> -->
                  
                  <div v-show="editing" class="form-group">
                    <div class="custom-file">
                                                            <!-- shown if editing -->   
                    
                      <label class=""></label>                 
                    </div>
                    <div class="py-3"></div>
                  </div>
                
                </div>
                
                <!-- <img  v-if="dataUser.id == currentPost.userId || showAdminBoard" class="card-img-bottom" src="" alt="">
                <img  v-else class="card-img-bottom" src="" alt=""> -->
                                     <!-- Buttons accesssibles if current user is user whom made post or administrator-->   
                <!-- <a href="#top"> <button v-show="!editing"  class="btn btn-outline pink float-right buttonCEC"> Comment </button></a> -->
                <!-- <button v-show="isDisplay" v-if="dataUser.id == currentPost.userId || showAdminBoard" class="btn btn-success float-right buttonCEC" href="#top" @click="editPost(currentPost)"> Edit </button>
                <button v-show="editing" v-if="currentPost.description" class="btn btn-success mr-2 float-right" type="submit" @click="editPost(currentPost)"> Update </button>
                <button v-show="editing" v-if="currentPost.imageUrl" class="btn btn-success mr-2 float-right" type="submit" @click="uploadImage(currentPost)"> Upload </button>
                <button v-show="!editing" class="btn btn-secondary mr-2 float-right" @click="cancelled()"> Back </button>     
                <button v-show="editing" v-if="dataUser.id == currentPost.userId  || showAdminBoard"  id="btnC" class="btn btn-secondary mr-2 float-right marginRightButton" @click="cancel()"> Cancel </button>
                <button v-show="editing" v-if="dataUser.id == currentPost.userId  || showAdminBoard" class="badge badge-danger mr-2" @click="deletePost()"> Delete </button> 
                 <div class="post-heading">
                  <div class="float meta">
                    <div class="title h5">
                      <div class="" v-show="!editing">      get all comments of a post-->   
                        <!-- <div v-for="comment in comments" :key="comment.id">  
                          <div v-if="currentPost.id == comment.postId" class="comment float-right card rounded card-white"> 
                            <div class="list-group-item">
                              <a href="#"><b> {{ comment.user.username }} </b></a> 
                              <span> made a comment </span>  
                              <h6 class="text-muted time"> {{ comment.createdAt.slice(7,10).replace(/-/g,` `) }} {{ comment.createdAt.slice(5,7).replace(/-/g,` `) }} {{ comment.createdAt.slice(0,4).replace(/-/g,`.`) }} {{comment.createdAt.slice(11,16).replace(/:/g,`h`)}} (UTC)</h6> 
                              <div>{{ comment.description }} </div>    -->
                                             <!-- Edit button is accesssible if current user is user whom made comment of the post or administrator-->  
                              <!-- <a :href="'/comments/' + comment.id"><button v-if="dataUser.id == comment.userId || showAdminBoard" class="btn btn-success float-right"> Edit </button></a>
                            </div>
                          </div>
                        </div>
                        <div class="postCard">        
                          <textarea-autosize placeholder="Type something here..." ref="myTextarea" :min-height="30" :max-height="350" type="text"   class="form-control" id="description" autofocus v-model="comment.description"/>
                        </div>
                        <div class="d-flex justify-content-between float-right width-box">   <img class="card-img-bottom float-left" src="" alt="">
                          <div  class="">
                            <button  @click="saveComment" class="btn btn-primary float-right"> Share </button>
                            <button class="btn btn-secondary mr-2 float-right" @click="cancelled()"> Cancel </button>
                          </div>
                        </div>       
                      </div>
                    </div>
                  </div>
                </div> -->
                 <!-- <button v-if="dataUser.id == currentPost.userId  || showAdminBoard" class="badge badge-danger mr-2" @click="deletePost()"> Delete </button>  -->
                <p>{{ message }}</p>
            </div>
              <!-- <input v-show="dataUser.id == currentPost.userId|| showAdminBoard" type="file" ref="file" @change="onSelect" class="" id=""> -->
                          <!-- <button  v-if="!currentPost.imageUrl" class="btn btn-success mr-2 float-right" type="submit" @click="uploadImage(currentPost)"> Nouvelle image </button>
                            <button v-if="currentPost.imageUrl" class="btn btn-success mr-2 float-right" type="submit" @click="updateImage(currentPost)"> Mise à jour de l'image </button> -->
                      <div>
         
        </div>             
          </div>
   
          <div v-else>
          <br />
          <p>Please click on a Post...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

import PostCommentService from "../services/PostCommentService";
import PostDataService from "../services/PostDataService";
import UpLoadFilesService from "../services/UpLoadFilesService";

export default {
  name: "home",
  data() {
    return {
         componentKey: 0,
        comments:[],
        currentComment: null,
        currentIndex: -1,         
        message: '',
        
        comment: {      
          id: null,
         
          // title: "",
          description: "",
          description2: "",
          description3: "",
          imageUrl:"",
          imageUrl2:"",
          imageUrl3:"",
          // userId: "",
          username: "",
          published: false
      },
      userId: "", 
      postId: "",   
      isDisplay:true,
      currentPost: null,
      editing: false,      
    };
  },
 

  methods: {
      forceRerender() {
      this.componentKey += 1;
    },
    // selected image file
     onSelect(e){     
      const file = this.$refs.file.files[0];
        this.currentPost.imageUrl = file;
        // this.currentPost.imageUrl2 = file;
        // this.currentPost.imageUrl3 = file;
        console.log(e)
        // console.log(this.currentPost.imageUrl)        
    },
    // upload image
    //  updateImage() {
    //  const formData = new FormData();
    //  let id = this.currentPost.id
    //  formData.append("file", this.currentPost.imageUrl, this.currentPost.imageUrl.name);
    //  UpLoadFilesService.update(id, formData)
    //     .then(() => {
    //       this.retrievePost()
    //       // console.log(response.data);
    //       this.message = 'The post was updated successfully!';
    //       // this.$router.push({ name: "posts" });
             
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // },

         updateImage() {
            
      //   let data = {
      //   // description: this.comment.description,
      //   u: this.currentUser.id,
      //   postId: this.currentPost.id
      // }
       let dataUser = JSON.parse(localStorage.getItem("user"))
     const formData = new FormData();
      formData.append("file", this.currentPost.imageUrl);
      formData.append("id", dataUser.id);
      formData.append("username", dataUser.username,);
     this.imageUrl = this.currentPost.imageUrl
     let id = this.currentPost.id
    //  formData.append("file", this.currentPost.imageUrl, this.currentPost.imageUrl.name);
     UpLoadFilesService.update(id, formData)
        .then(() => {
          this.retrievePost()
          // console.log(response.data);
          this.message = 'The post was updated successfully!';
          // this.$router.push({ name: "posts" });
             
        })
        .catch(e => {
          console.log(e);
        });
    },

    
     uploadImage() {
      // this.saveComment()
         let data = {
        // description: this.comment.description,
        u: this.currentUser.id,
        postId: this.currentPost.id
      }
      let dataUser = JSON.parse(localStorage.getItem("user"))
      //  let id = this.currentPost.id
      const formData = new FormData();
      formData.append("file", this.currentPost.imageUrl);
      formData.append("id", dataUser.id);
      formData.append("username", dataUser.username,);
      UpLoadFilesService.upload(formData, data)
        .then(() => {
          // UpLoadFilesService.upload(formData)
          console.log(this.currentPost.id)
        
          this.message = 'Image was updated successfully!';
          this.retrievePost()
          // this.$router.push({ name: "posts" });
             
        })
        .catch(e => {
          console.log(e);
        });
    },
       uploadImage2() {

      let dataUser = JSON.parse(localStorage.getItem("user"))
      const formData = new FormData();
      formData.append("file", this.currentPost.imageUrl2);
      formData.append("id", dataUser.id);
      formData.append("username", dataUser.username,);
      UpLoadFilesService.upload(formData)
        .then(() => {
        
          this.message = 'Image was updated successfully!';
          this.retrievePost()
          // this.$router.push({ name: "posts" });
             
        })
        .catch(e => {
          console.log(e);
        });
    },
       uploadImage3() {

      let dataUser = JSON.parse(localStorage.getItem("user"))
      const formData = new FormData();
      formData.append("file", this.currentPost.imageUrl3);
      formData.append("id", dataUser.id);
      formData.append("username", dataUser.username,);
      UpLoadFilesService.upload(formData)
        .then(() => {
        
          this.message = 'Image was updated successfully!';
          this.retrievePost()
          // this.$router.push({ name: "posts" });
             
        })
        .catch(e => {
          console.log(e);
        });
    },
    retour(){

   
    this.$router.push({ name: "home" });
     },
    // save comment
     saveComment() {     
       
      let data = {
        //  description: this.comment.description,
        u: this.currentUser.id,
        postId: this.currentPost.id
      }
      PostCommentService.create(data)
        .then(response => {
          this.updateImage()
          this.comment.id = response.data.id;      
          // console.log(response.data);
          this.submitted = true;    
          this.message = 'The post was updated successfully!';
          // this.$router.push({ name: "posts" });
        })
        .catch(e => {
          console.log(e);
        });
    },
    // get all comment of a post
    getComment() {
      PostCommentService.getAll()
        .then(response => {
          this.comments = response.data;
          console.log(response.data);        
        })
        .catch(e => {
          console.log(e);
        });
    },
    // get a post 
    getPost(id) {
      PostDataService.get(id)
        .then((response)=> {
          this.currentPost = response.data;
          // console.log(response.data);
          console.log(this.currentPost.userId)
          // this.saveComment()
        })
        .catch(e => {
          console.log(e);
        });
    },
    // cancel button
    cancel(){
      this.show()
      this.editing = this.editing == false      
    },

    hide: function () {
      this.isDisplay = false
    },

    show: function () {
      this.isDisplay = true
    },
    //edit a post
    editPost(){    
      this.editing = this.editing == true?false:true    
      this.hide()
        if(this.editing== false){
        this.updatePost()
    }      
    console.log(this.editing)  
    },
    // cancelled 
    cancelled(){
       this.show()
       this.$router.push({ name: "posts" });
    },
    // updating post
    updatePost() {
       var upData = {    
       description: this.currentPost.description,
       description2: this.currentPost.description2,
       description3: this.currentPost.description3
       
       }
       
      //  JSON.parse(JSON.stringify(upData))
      PostDataService.updateAPost(this.currentPost.id,upData)
      // console.log(this.currentPost.id,upData)
        .then((response) => {
          console.log(response.data);
          this.message = 'The post was updated successfully!';
          // this.$router.push({ name: "posts" });
        })
        .catch(e => {
          console.log(e);
        });
    },
     retrievePost() {
      // console.log()
      let id = this.currentPost.id
      PostDataService.get(id)
        .then(response => {        
          this.currentPost = response.data;
          console.log(response.data);
         
        })        
        .catch(e => {
          console.log(e);
        });
    },
    // delete post
    deletePost() {
       PostDataService.delete(this.currentPost.id)      
        .then(()=> {         
          // PostCommentService.delete(this.currentPost.id)   
          // console.log(response.data);         
          this.$router.push({ name: "posts" })
          .then(() => {
          // location.reload()
          })
         
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  
  mounted() {
  
    this.message = '';
    this.getPost(this.$route.params.id);
    this.getComment();
    // this.retrievePost()
      
  },

  computed: {

   

tst: function() {
      return this.$route.path + '/' + this.language
    },


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

};

</script>

<style>

.width-box{
  width: 100%;  
}
.title-pos{
  margin-top: 8px;
  color:#091f43;
  font-weight: bold;
}
.title-img-comment{
  width: 40px;
  height: 40px;
  margin-top: 0px;
  margin-bottom: 0px;
}
.edit-form {
  max-width: 300px;
  margin: auto;
}
.card-img{ 
  width: 100px;
  height: 20px;
}
.card-img-bottom{
  width: 37px;
  height: 37px;
  border-radius: 50%;
}
.comment {
    width: 80%;
    overflow: hidden;
    border: 0.1vw solid grey;
    margin-bottom: 30px;
    margin-left: 100px; 
    box-shadow: 5px 5px 5px #091f43;
} 
.pink{
  border: 1px solid  #091f43;
  color:  #091f43;
}
.aPost {
  width: 100%;
  min-height: px;
  overflow: hidden;
  border: 0.1vw solid white;
  margin-bottom: 30px;
} 
.card-ico{
  margin-top: -4px;
  width: 37px;
  border-radius: 50%;
}
.postBox {   
  border: 0.1vw solid grey;
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
.textBox{
   width: 100%;
}
.gedf-main .post-comment{    
   margin-bottom: 30px;
}
.img-contain{
  width:100%;
  height: 100%;
  object-fit: contain;
}
 .card-shadow{
    box-shadow: 10px 7px 10px #091f43;
 }
 .gedf-main{
  margin-bottom: 100px;
}
.marginRightButton{ 
  margin-right: 30px;
}
.marginLeftButton{
  margin-left: 8px;
}
.postCard{ 
  margin-bottom: 30px;
}
.buttonCEC{
  margin-right:8px;
  margin-bottom: 30px;
}
#description{
  margin-bottom: 30px;
}
#btnC{
  margin-right: 50px;
}
.footer-post-list{  
  margin-bottom: 30px;
  bottom:0;
  width:100%;
}
.title-img{
  margin-top: 15px;
  width: 50px; 
  height: 50px;
  margin-top: 0px;
  margin-bottom: 0px;
  border-radius: 50%;
}
.title-pos{
  margin-left:7px;
}

</style>
