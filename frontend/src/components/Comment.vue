<template>
  <div id="#top" class="container-fluid">
    <div class="row h-100 justify-content-center align-items-center">
      <div class="col-md-6 gedf-main card">
        <div v-if="currentComment" class="card-body">
          <h4>Modifier le paragraphe</h4>
          <div class="">
            <div class="post-heading">            
              <div   class="list-group">
                <div class="float meta ">
                  <div class="title h5">                <!-- comment username -->
                    <a href="#"><b> {{ currentComment.user.username }} </b></a>
                     
                  </div>
                  <h6 class="text-muted time"> {{ currentComment.createdAt.slice(7,10).replace(/-/g,` `) }} {{ currentComment.createdAt.slice(5,7).replace(/-/g,` `) }} {{ currentComment.createdAt.slice(0,4).replace(/-/g,`.`) }} {{currentComment.createdAt.slice(11,16).replace(/:/g,`h`)}} (UTC)</h6>
                </div>                            
              </div>                                                 <!-- get comment if editing -->
              <!-- <div v-if="!editing"> <h5><strong>{{ currentComment.description }}</strong></h5></div>  -->
               <textarea-autosize placeholder="Titre de l'article" ref="myTextarea"  :min-height="30" :max-height="350"    class="form-control " id="" v-model="currentComment.description"/>
               <div class="btn-container onRight">
               <button v-if="dataUser.id == currentComment.userId || showAdminBoard" class="btn btn-success float-right" @click="updateComment()"> update </button>
               </div>
               <textarea-autosize placeholder="Titre de l'article" ref="myTextarea"  :min-height="30" :max-height="350"    class="form-control" id="" v-model="currentComment.descriptionPhoto"/>
                <div class="btn-container onRight">
               <button v-if="dataUser.id == currentComment.userId || showAdminBoard" class="btn btn-success float-right" @click="updateComment()"> update </button>
                </div>
                <input  v-show="dataUser.id == currentComment.userId && !comment.imageUrl || showAdminBoard && !comment.imageUrl" type="file" ref="file" @change="onSelect" class="form-control" id=""> 
                 <div class="btn-container onRight">
                 <button v-if="dataUser.id == currentComment.userId || showAdminBoard" class="btn btn-success" @click="updatePhoto()"> update </button>
                 </div>
                 <!-- <button class="btn btn-secondary mr-2" @click="$router.go(-1)"> Retour </button> -->
                  
              <!-- <div v-if="!editing"> <h5><strong>{{ currentComment.descriptionPhoto }}</strong></h5></div>  -->
               <!-- <button v-if="dataUser.id == currentComment.userId || showAdminBoard" class="btn btn-success float-right" @click="updateComment">  {{editing? 'Update':'Modify'}} </button>
              <input  v-show="dataUser.id == currentComment.userId && !comment.imageUrl || showAdminBoard && !comment.imageUrl" type="file" ref="file" @change="onSelect" class="form-control" id="">  -->
              <!-- <textarea-autosize placeholder="Type something here..." ref="myTextarea" :min-height="30" :max-height="350" v-else type="text"  class="form-control" id="description" v-model="currentComment.description"/> -->
            </div>                                              <!-- edit, cancel and upload button. This is accesssible if current user is user whom made post or administrator-->
            <!-- <img v-if="dataUser.id == currentComment.userId || showAdminBoard" class="card-ico" src="../img/titi1.png" alt="icon titi"> -->
             <div class="btn-container onRight">
               <button v-show="!editing" class="btn btn-secondary mr-2" @click="$router.go(-1)"> Retour </button> 
            <button  v-show="!editing" v-if="dataUser.id == currentComment.userId || showAdminBoard" class="btn btn-primary" @click="editPost(currentComment)"> Modifier </button>
               
           
  
           
            <button  v-show="editing" v-if="dataUser.id == currentComment.userId || showAdminBoard" class="badge badge-danger mr-2" @click="deleteComment"> Supprimer </button>
          
            <button v-show="editing" v-if="dataUser.id == currentComment.userId || showAdminBoard" class="btn btn-secondary" @click="cancel()"> Annuler </button>     
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostCommentService from "../services/PostCommentService";
// import UpLoadFilesService from "../services/UpLoadFilesService";
// import CommentPostService from "../services/CommentPostService";

export default {
  name: "post",
  data() {
    return {
        comments:[],
        currentComment: null,
        currentIndex: -1,         
        message: '',
        comment: {
          imageUrl:"",
          id: null,
          post_id: "",      
          description: "",
          user_Id: "",
          username: "",
          published: false
      },
        currentPost: null,      
        editing: false,      
    };
  },

  methods: {
      onSelect(e){     
      const file = this.$refs.file.files[0];
        this.currentComment.imageUrl = file;
        console.log(e)
        // console.log(this.currentPost.imageUrl)        
    },
    // save a comment
    saveComment() {     
    //   let dataUser = JSON.parse(localStorage.getItem("user"))
    //   console.log(dataUser)  
    //   var data = {     
    //     description: this.comments.description,
    //     userId : dataUser.id,
    //     username : dataUser.username,
    //     postId : this.currentPost.id,
    //     id: this.comments.id,        
    //   }
    
    // PostCommentService.create(data)
    //     .then(response => {
    //       this.comment.id = response.data.id;        
    //       console.log(response.data);
    //       this.submitted = true;       
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // },

     let dataUser = JSON.parse(localStorage.getItem("user"))
      const formData = new FormData();
      formData.append("file", this.currentPost.imageUrl2);
      formData.append("id", dataUser.id);
      formData.append("username", dataUser.username,);
     PostCommentService.create(formData)
        .then(() => {
        
          this.message = 'Image was updated successfully!';
          this.retrievePost()
          // this.$router.push({ name: "posts" });
             
        })
        .catch(e => {
          console.log(e);
        });
    },
    // get all comment
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
    // get a comment
    getCommentId(id) {
      PostCommentService.get(id)
        .then(response => {
          this.currentComment = response.data;
          console.log(response.data);
             console.log(response.data.imageUrl);
        })
        .catch(e => {
          console.log(e);
        });
    },
    // cancel button
    cancel(){
      this.editing = this.editing == false
    },
    // cancelled 
    cancelled(){
      this.$router.push({ name: "posts" });

    },
    // edit a post
    editPost(){    
      this.editing = this.editing == true?false:true    
        if(this.editing== false){
        // this.updateComment()
        // this.updateImage()
        // this.updateComment()
        }      
      console.log(this.editing)
    },
    // update a comment
 updateComment() {
        var data = {    
       description: this.currentComment.description,
       descriptionPhoto: this.currentComment.descriptionPhoto
       
       }
       
      PostCommentService.update(this.currentComment.id, data)
        .then(response => {
          console.log(response.data);
          this.message = 'The post was updated successfully!';
          // this.$router.push({ name: "posts" });
        })
        .catch(e => {
          console.log(e);
        });
    },

     updatePhoto() {
     const formData = new FormData();
     let id = this.currentComment.id
    //  formData.append("file", this.currentPost.imageUrl, this.currentPost.imageUrl.name);
      formData.append("file", this.currentComment.imageUrl, this.currentComment.imageUrl.name);
        //  formData.append("title", this.current.title,);
        //  formData.append("description", this.currentPost.description,);
        //  formData.append("description2", this.currentPost.description2,);
        //  formData.append("description3", this.currentComment.description3,);
     PostCommentService.updatePhoto(id, formData)
        .then(() => {
          // console.log(response.data);
          this.message = 'The post was updated successfully!';
          // this.$router.push({ name: "posts" });
             
        })
        .catch(e => {
          console.log(e);
        });
    },
    // delete a comment

        deleteComment() {
        this.$confirm("Are you sure?").then(() => {
      PostCommentService.delete(this.currentComment.id) 
         
        .then(response => {
          console.log(response.data);
          // this.$router.push({ name: "posts" });
           this.$router.push({ name: "post", params: { id: this.currentComment.postId} });
        })

        .catch(e => {
          console.log(e);
        });
        })
    }
  },


  //   deleteComment() {
  //     this.$confirm("Are you sure?").then(() => {
  //     PostCommentService.delete(this.currentComment.id) 
  //     // this.$router.go(-1)
      
  //     // :to="{name: 'post', params: { id: currentComment.postId}}"
  //     })  
  //       .then(() => {
  //         //  this.$router.push({ name: "post", params: { id: this.currentComment.postId} });
  //         console.log(response.data);
           
  //       })
  //        .then(() => {
  //          this.$router.push({ name: "post", params: { id: this.currentComment.postId} });
  //         // console.log(response.data);
           
  //       })
  //       .catch(e => {
  //         console.log(e);
  //       });
  //   }
  // },

  mounted() {
    this.message = '';    
    this.getCommentId(this.$route.params.id);
    this.getComment()
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
};

</script>

<style>
.comment {
    width: 80%;
    overflow: hidden;
    border: 0.1vw solid grey;
    margin-bottom: 30px;
    margin-left: 100px;
} 

.aPost {
    width: 100%;
    min-height: px;
    overflow: hidden;
    border: 0.1vw solid white;
     margin-bottom: 30px;  
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
.card-ico{
  margin-top: -0px;
  width: 37px;
  border-radius: 50%;
}
.textBox{
   width: 100%;
}
.gedf-main{  
   margin-bottom: 200px;  
   /* box-shadow: 10px 7px 10px #091f43; */
}
.marginBottomButton{
  margin-bottom: 30px;
  margin-right: 15px;
}
.marginRightButton{ 
  margin-bottom: 30px;
}

#description{
  margin-bottom: 15px;
}

</style>
