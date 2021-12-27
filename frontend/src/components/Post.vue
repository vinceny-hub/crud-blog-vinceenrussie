<template>
  <div class="container-fluid">
    <div class="footer-post-list">
      <div class="h-100 justify-content-center row-personnalised align-items-center">    
        <div class="col-md-8 gedf-main card .post-comment ">   
          <div v-if="currentPost" class="card-body">
              <!-- <video id="videoElement" width="600px" controls poster="velocity-thumbnail.jpg"
  @canplay="updatePaused" @playing="updatePaused" @pause="updatePaused">
      <source src="../../../img/3.mp4" type="video/mp4" media="all and (max-width:680px)"> 
     
      <p>Sorry, there's a problem playing this video. Please try using a different browser.</p>
  </video> -->
            <div class="">
              <div class="d-inline-flex p-0"> 
              
                   <!-- <div class="d-inline-flex p-2 post_title_margin">  -->
                     <!-- <img class="title-img" src="" alt=""> -->
                     <!-- <h4 class="title-pos">{{currentPost.title}}</h4>-->
                     <!-- </div>  -->
                <!-- <img class="title-img-comment" src="../img/icon1.png" alt="icon logo titi"> -->
                <h4 class="title-pos">Écrire un nouveau paragraphe</h4>
              </div>
            </div>
            <div class="jk">
                <div class="post-heading">            
                  <div class="list-group">     
                    <div class="float meta ">
                      <div class="title h5">    <!-- post username  -->
                        <a href="#"><b> {{ currentPost.user.username }} </b></a>
                  
                      </div>
                      <h6 class="text-muted time"> {{ currentPost.createdAt.slice(7,10).replace(/-/g,` `) }} {{ currentPost.createdAt.slice(5,7).replace(/-/g,` `) }} {{ currentPost.createdAt.slice(0,4).replace(/-/g,`.`) }} {{currentPost.createdAt.slice(11,16).replace(/:/g,`h`)}} (UTC)</h6>
                    </div>
                  </div>      
                  <h4 class="title-pos">{{currentPost.title}}</h4>
                  
                                                      <!-- shown if not editing -->
                  <!-- <div class="kl card aPost rounded card-white" v-if="!editing">  -->
                                                                   <!-- get post selected -->
                    <!-- <h5 class="postCard"><strong>{{ currentPost.description }}</strong></h5> -->
                    <!-- <img class="img-contain" :src="currentPost.imageUrl" >
                    <img class="img-contain" :src="currentPost.imageUrl2" > -->
                  <!-- </div>    -->
                    <!-- shown if editing -->  
                                                           
                    <div>
                      <div class="card card-shadow card-margin">
                        <div class="onLeft">
                         <label class="" for="file"><strong>Modifier le titre de l'article</strong></label>
                        </div>
                        <textarea-autosize v-show="dataUser.id == currentPost.userId  || showAdminBoard " placeholder="Titre de l'article" ref="myTextarea"  :min-height="30" :max-height="350"    class="form-control" id="" v-model="currentPost.title"/>
                  <!-- <textarea-autosize v-show="dataUser.id == currentPost.userId  || showAdminBoard " placeholder="Titre de l'article" ref="myTextarea"  :min-height="30" :max-height="350"    class="form-control description" id="" v-model="currentPost.description"/>
                  <textarea-autosize v-show="dataUser.id == currentPost.userId  || showAdminBoard " placeholder="Titre de l'article" ref="myTextarea"  :min-height="30" :max-height="350"    class="form-control description" id="" v-model="currentPost.descriptionPhoto"/>
                   <img class="img-contain" :src="currentPost.imageUrl" > 
                  <input type="file" ref="file" @change="onSelect" class="form-control" id=""> -->
                  <div class="btn-container onRight">
                        <button  class="btn btn-success" type="submit" @click="updatePost(currentPost)"> Mettre à jour le titre </button>
                  </div>
                      </div>
                    
                    <div class="card card-shadow card-margin">
                      <!-- <div> -->
                        <!-- <button v-if=" !(editingImage || editingVideo || editingLink)" class="btn btn-success mr-4" type="submit" @click="editTexte">  {{editingTexte? 'Annuler':'Ajouter paragraphe'}} </button> -->
                        <!-- <button  v-if="editingParagraphe && editTexte" class="btn btn-success mr-4" type="submit" @click="editParagraphe, editTexte"> Texte </button> -->
                          <!-- <button  v-if=" !(editingTexte || editingVideo || editingLink)" class="btn btn-success mr-4" type="submit" @click="editImage">  {{editingImage? 'Annuler':'Ajouter photo'}} </button>
                            <button  v-if=" !(editingImage || editingVideo || editingTexte)"  class="btn btn-success mr-4" type="submit" @click="editLink">{{editingLink? 'Annuler':'Lien Youtube'}} </button>
                              <button    v-if=" !(editingImage || editingTexte || editingLink)" class="btn btn-success mr-4" type="submit" @click="editVideo">{{editingVideo? 'Annuler':'Ajouter Video'}} </button> -->
                      <!-- </div> -->
                   
                    <div>
                      <div class="onLeft">
                    <strong class="">
                    <label class="" for="file">Ajouter un paragraphe</label>
                    </strong>
                      </div>
                   <textarea-autosize v-show="dataUser.id == currentPost.userId  || showAdminBoard " placeholder="Texte ici..." ref="myTextarea"  :min-height="30" :max-height="350"    class="form-control description" id="" v-model="comment.description"/>
                    </div>
                                    
                    <div v-if="editingImage || editingLink || editingVideo">
                      <div class="onLeft">
                      <strong>
                      <label class="" for="file">Ajouter une légende média</label>
                      </strong>
                      </div>
                   <textarea-autosize v-show="dataUser.id == currentPost.userId  || showAdminBoard " placeholder="Texte ici..." ref="myTextarea"  :min-height="30" :max-height="350"    class="form-control description" id="" v-model="comment.descriptionPhoto"/>
                    </div>
                     <div v-if="editingLink && (!editingImage || !editingVideo)">
                      <div class="onLeft">
                      <strong>
                      <label class="" for="file">Ajouter une vidéo Youtube</label>
                      </strong>
                      </div>
                   <textarea-autosize v-show="dataUser.id == currentPost.userId  || showAdminBoard " placeholder="Vidéo URL ici..." ref="myTextarea"  :min-height="30" :max-height="350"    class="form-control description" id="" v-model="comment.youtubeUrl"/>
                    </div>
                     <div v-if="editingVideo && (!editingImage || !editingLink)">
                     <div class="onLeft">
                    
                   <label class="l" for="file"> <strong>Ajouter une vidéo</strong></label>
                   
                     </div>
                   <input type="file" ref="fileVideo" @change="onSelectVideo" class="form-control" id="">
                   </div>
                   <div v-if="editingImage && (!editingLink || !editingVideo)">
                     <div class="onLeft">
                    
                   <label class="l" for="file"> <strong>Ajouter une photo</strong></label>
                   
                     </div>
                   <input type="file" ref="file" @change="onSelect" class="form-control" id="">
                  
                   </div>
                   <div class="onLowRight">
                     <button  v-if=" !(editingTexte || editingVideo || editingLink)" class="btn btn-success mr-4" type="submit" @click="editImage">  {{editingImage? 'Annuler':'Ajouter photo'}} </button>
                     <button  :disabled="!noImage" v-if="editingImage" class="btn btn-primary" type="submit"  @click="uploadImage"> Envoyer </button>
                  
                            <button  v-if=" !(editingImage || editingVideo || editingTexte)" :key="currentPost.id" class="btn btn-success mr-4" type="submit" @click="editLink">{{editingLink? 'Annuler':'Lien Youtube'}} </button>
                             <button :disabled="!comment.youtubeUrl" v-if="editingLink" class="btn btn-primary" type="submit" @click="uploadLink"> Envoyer </button>
                              <button    v-if=" !(editingImage || editingTexte || editingLink)" class="btn btn-success mr-4" type="submit" @click="editVideo">{{editingVideo? 'Annuler':'Ajouter Video'}} </button>
                               <button :disabled="!noVideo" v-if="editingVideo" class="btn btn-primary" type="submit" @click="uploadVideo"> Envoyer </button>
                         </div>
                          <div class="onLowRight">
                      <button v-if=" !(editingImage || editingVideo || editingLink)" class="btn btn-primary mr-4" type="submit" @click="uploadParagraphe">  {{editingTexte? 'Annuler':'Envoyer'}} </button>
                    </div>
                    <!-- <div class="onRight">
                    <button  v-if=" !(editingTexte || editingVideo || editingLink)" class="btn btn-success mr-4" type="submit" @click="editImage">  {{editingImage? 'Annuler':'Ajouter photo'}} </button>
                   </div> -->
                    </div>
                   
                      <div v-show="currentPost.id == comment.postId" class="card card-shadow card-margin" v-for="comment in comments" :key="comment.id">
                         <!-- <div v-if="currentPost.id == comment.postId"> -->
                     <div  class="paragrapheEdit" v-if="currentPost.id == comment.postId"> <strong> {{comment.description}} </strong> </div>
                   <div class="descriptionPhotoEdit" v-if="currentPost.id == comment.postId"> <strong> {{comment.descriptionPhoto}} </strong> </div>
                   <video-embed v-if="currentPost.id == comment.postId" class="img-contain" :src="comment.youtubeUrl">

                   </video-embed>
                   
                  
                    <video id="videoElement"  v-if="(currentPost.id == comment.postId) && comment.videoUrl" class="video-preview-contain" controls> 
                    <source :src="comment.videoUrl" type="video/mp4" media="all and (max-width:680px)">      
                    <p>Sorry, there's a problem playing this video. Please try using a different browser.</p>
                    </video>
                 

                    
                   <img v-if="currentPost.id == comment.postId" class="img-contain" :src="comment.imageUrl" > 
                   

                   <router-link :to="{name: 'comment', params: { id: comment.id }}">
                        <div class="btn-container onRight">
                     <button class="btn btn-success" type="submit"> Editer le paragraphe </button>
                     </div>
                   </router-link>
                  </div>
                    <!-- </div> -->


                   <!-- <div class="card card-shadow card-margin" v-for="comment in comments" :key="comment.id">
                   <div v-if="currentPost.id == comment.postId"> <strong> {{comment.description}} </strong> </div>
                   <div v-if="currentPost.id == comment.postId"> <strong> {{comment.descriptionPhoto}} </strong> </div>
                  <img  v-if="currentPost.id == comment.postId" class="img-contain" :src="comment.imageUrl" > 
                   <router-link :to="{name: 'comment', params: { id: comment.id }}">
                        <div class="btn-container onRight">
                     <button class="btn btn-success" type="submit"> Editer le paragraphe </button>
                     </div>
                   </router-link>
                  </div> -->
                  <!-- v-for="item in items" v-if="item !== null" -->
                  
                  
                  <!-- </div>   -->
                   <!-- <input v-show="dataUser.id == currentPost.userId || showAdminBoard" type="file" ref="file" @change="onSelect" class="form-control" id="">  -->
                  <div class="btn-container onRight">
                  <button class="btn btn-secondary mr-2"  v-show="!editing" @click="cancelled()"> Retour </button>
                  <button v-show="editing" v-if="dataUser.id == currentPost.userId  || showAdminBoard" class="badge badge-danger mr-2" @click="deletePost()"> Delete </button>
                   <button v-show="editing" v-if="dataUser.id == currentPost.userId  || showAdminBoard"  id="" class="btn btn-secondary" @click="cancel()"> Cancel </button>
                
                                   
                  <button class="btn btn-warning" type="submit" v-show="!editing" :key="currentPost.id"  @click="editSupprimer"> Supprimer l'article </button>
                  <!-- <button class="btn btn-primary " type="submit" v-show="!editing"   @click="uploadImage"> Envoyer le nouveau paragraphe </button> -->
                   
                  </div>
                   <div class="btn-container onRight">
                     <router-link :to="{name: 'home'}">
                    <button class="btn btn-primary onRightEnvoyerArticle" v-show="!editing"  type="submit"> Envoyer l'article </button> 
                     </router-link>
                   </div>
                  <!-- <div class="btn-container">
                  <button class="btn btn-secondary mr-2" @click="cancelled()"> Cancel </button>
                  </div> -->
                            <!-- <button  @click="saveComment" class="btn btn-primary float-right"> Share </button> -->
                           
                        
                  
                   </div>
                   
                      
                  
                   <!-- ******************************************************************************************************************************* -->
                   
                    <!-- <input  v-show="dataUser.id == currentPost.userId && currentPost.imageUrl || showAdminBoard" type="file" ref="file" @change="onSelect" class="" id="">
                    <button   class="btn btn-success mr-2 float-right" type="submit" @click="updateImage(currentPost)"> Update Image </button> -->
                    <!-- <input  v-show="dataUser.id == currentPost.userId && currentPost.imageUrl || showAdminBoard" type="file" ref="file" @change="onSelect" class="" id="">
                    <button   class="btn btn-success mr-2 float-right" type="submit" @click="updateImage(currentPost)"> Update Image </button> -->
                   
                  <!-- <div>
                  <textarea-autosize v-show="dataUser.id == currentPost.userId  || showAdminBoard " placeholder="Corps 1" ref="myTextarea"  :min-height="30" :max-height="350"    class="form-control description" id="" v-model="currentPost.description"/>
                  <button  class="btn btn-success mr-2 float-right  description" type="submit" @click="updatePost(currentPost)"> Update </button>
                   <div class="" v-for="comment in comments.slice(1,2)" :key="comment.id">
                  <img class="img-contain" :src="comment.imageUrl" > 
                  </div> -->
                 
                    <!-- <input type="file" ref="file2" @change="onSelect2" class="form-control" id=""> -->
                  <!-- </div>   -->
                   <!-- <input v-show="dataUser.id == currentPost.userId || showAdminBoard" type="file" ref="file" @change="onSelect" class="form-control" id="">  -->
                  <!-- <button  v-show="comments== false" class="btn btn-success mr-2 float-right float-right-btn" type="submit"  @click="saveComment"> Upload Image </button>
                  <button v-show="comments.length>=2" class="btn btn-success mr-2 float-right float-right-btn" type="submit"  @click="saveComment"> Edit </button>
                  </div> -->
                 
                 
                   <!-- <input  v-show="dataUser.id == currentPost.userId && currentPost.imageUrl || showAdminBoard" type="file" ref="file" @change="onSelect" class="" id="">
                   <button class="btn btn-success mr-2 float-right" type="submit" @click="updateImage(currentPost)"> Update Image </button> -->
                 
                  <!-- <div>
                  <textarea-autosize v-show="dataUser.id == currentPost.userId  || showAdminBoard " placeholder="Corps 1" ref="myTextarea"  :min-height="30" :max-height="350"    class="form-control description" id="" v-model="currentPost.description"/>
                  <button  class="btn btn-success mr-2 float-right  description" type="submit" @click="updatePost(currentPost)"> Update </button>
                   <div class="" v-for="comment in comments.slice(2,3)" :key="comment.id">
                  <img class="img-contain" :src="comment.imageUrl" > 
                  </div> -->
                 
                    <!-- <input type="file" ref="file3" @change="onSelect3" class="form-control" id=""> -->
                  <!-- </div>   -->
                   <!-- <input v-show="dataUser.id == currentPost.userId || showAdminBoard" type="file" ref="file" @change="onSelect" class="form-control" id="">  -->
                  <!-- <button  v-show="comments.length < 3" class="btn btn-success mr-2 float-right float-right-btn" type="submit"  @click="saveComment"> Upload Image </button>
                  <button v-show="comments.length >= 3 " class="btn btn-success mr-2 float-right float-right-btn" type="submit"  @click="saveComment"> Edit </button>
                  </div> -->
                  

                   <!-- <div>
                  <textarea-autosize v-show="dataUser.id == currentPost.userId  || showAdminBoard " placeholder="Corps 1" ref="myTextarea"  :min-height="30" :max-height="350"    class="form-control description" id="" v-model="currentPost.description"/>
                  <button  class="btn btn-success mr-2 float-right  description" type="submit" @click="updatePost(currentPost)"> Update </button>
                   <div class="" v-for="comment in comments.slice(3,4)" :key="comment.id">
                  <img class="img-contain" :src="comment.imageUrl" > 
                  </div> -->
                 
                    <!-- <input type="file" ref="file4" @change="onSelect4" class="form-control" id=""> -->
                  <!-- </div>   -->
                   <!-- <input v-show="dataUser.id == currentPost.userId || showAdminBoard" type="file" ref="file" @change="onSelect" class="form-control" id="">  -->
                  <!-- <button  v-show="comments.length < 4" class="btn btn-success mr-2 float-right float-right-btn" type="submit"  @click="saveComment"> Upload Image </button>
                  <button v-show="comments.length >= 4 " class="btn btn-success mr-2 float-right float-right-btn" type="submit"  @click="saveComment"> Edit </button>
                  </div> -->
                  
                  <!-- <div>
                  <textarea-autosize v-show="dataUser.id == currentPost.userId  || showAdminBoard " placeholder="Corps 1" ref="myTextarea"  :min-height="30" :max-height="350"    class="form-control description" id="" v-model="currentPost.description"/>
                  <button  class="btn btn-success mr-2 float-right  description" type="submit" @click="updatePost(currentPost)"> Update </button>
                   <div class="" v-for="comment in comments.slice(4,5)" :key="comment.id">
                  <img class="img-contain" :src="comment.imageUrl" > 
                  </div> -->
                 
                    <!-- <input type="file" ref="file5" @change="onSelect5" class="form-control" id=""> -->
                  <!-- </div>   -->
                   <!-- <input v-show="dataUser.id == currentPost.userId || showAdminBoard" type="file" ref="file" @change="onSelect" class="form-control" id="">  -->
                  <!-- <button  v-show="comments.length < 5" class="btn btn-success mr-2 float-right float-right-btn" type="submit"  @click="saveComment"> Upload Image </button>
                  <button v-show="comments.length >= 5 " class="btn btn-success mr-2 float-right float-right-btn" type="submit"  @click="saveComment"> Edit </button>
                  </div> -->


                  <div v-show="editing" class="form-group">
                   
                 
                  </div>
                </div>
                <!-- <img  v-if="dataUser.id == currentPost.userId || showAdminBoard" class="card-img-bottom" src="" alt="">
                <img  v-else class="card-img-bottom" src="" alt=""> -->
                                     <!-- Buttons accesssibles if current user is user whom made post or administrator-->   
                <!-- <a href="#top"> <button v-show="!editing"  class="btn btn-outline pink float-right buttonCEC"> Comment </button></a> -->
                <!-- <button v-if="dataUser.id == currentPost.userId || showAdminBoard" class="btn btn-success float-right buttonCEC" href="#top" @click="editPost(currentPost)"> Edit </button>
                <button v-show="editing" v-if="currentPost.description" class="btn btn-success mr-2 float-right" type="submit" @click="editPost(currentPost)"> Update </button>
                <button v-show="editing" v-if="currentPost.imageUrl" class="btn btn-success mr-2 float-right" type="submit" @click="updateImage(currentPost)"> Update Image </button>
                 
                  <button v-show="editing" v-if="currentPost.imageUrl" class="btn btn-success mr-2 float-right" type="submit" @click="uploadImage(currentPost)"> Upload </button>
                <button v-show="!editing" class="btn btn-secondary mr-2 float-right" @click="cancelled()"> Back </button>      -->
                <!-- <button v-show="editing" v-if="dataUser.id == currentPost.userId  || showAdminBoard"  id="btnC" class="btn btn-secondary mr-2 float-right marginRightButton" @click="cancel()"> Cancel </button>
                <button v-show="editing" v-if="dataUser.id == currentPost.userId  || showAdminBoard" class="badge badge-danger mr-2" @click="deletePost()"> Delete </button>
                  -->
                
                <div class="post-heading">
                  <div class="float meta">
                    <div class="title h5">
                      <div class="" v-show="!editing">     
                         <!-- get all comments of a post    -->
                        <!-- <div v-for="comment in comments" :key="comment.id">  
                          <div v-if="currentPost.id == comment.postId" class="comment float-right card rounded card-white"> 
                            <div class="list-group-item">
                              <a href="#"><b> {{ comment.user.username }} </b></a> 
                              <span> made a comment </span>  
                              <h6 class="text-muted time"> {{ comment.createdAt.slice(7,10).replace(/-/g,` `) }} {{ comment.createdAt.slice(5,7).replace(/-/g,` `) }} {{ comment.createdAt.slice(0,4).replace(/-/g,`.`) }} {{comment.createdAt.slice(11,16).replace(/:/g,`h`)}} (UTC)</h6> 
                              <div>{{ comment.description }} </div>    
                                              Edit button is accesssible if current user is user whom made comment of the post or administrator-->  
                              <!-- <a :href="'/comments/' + comment.id"><button v-if="dataUser.id == comment.userId || showAdminBoard" class="btn btn-success float-right"> Edit </button></a>
                            </div>
                          </div>
                        </div> --> 
                       
                        <!-- <div class="postCard">  -->
                           <!-- <input  v-show="dataUser.id == currentPost.userId && currentPost.imageUrl || showAdminBoard" type="file" ref="file" @change="onSelect" class="" id="">        -->
                          <!-- <textarea-autosize placeholder="Type something here..." ref="myTextarea" :min-height="30" :max-height="350" type="text"   class="form-control" id="description" autofocus v-model="comment.description"/> -->
                        <!-- </div> -->
                   
                           <!-- <img class="card-img-bottom float-left" src="" alt=""> -->
                             <!-- <div class="btn-container onRight"> -->
                            <!-- <button  @click="saveComment" class="btn btn-primary float-right"> Share </button> -->
                            <!-- <button class="btn btn-secondary mr-2" @click="cancelled()"> Cancel </button> -->
                          <!-- </div> -->
                          
                      </div>
                    </div>
                  </div>
                </div>
                <p>{{ message }}</p>
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
import VideoDataService from "../services/VideoDataService";
import PostDataService from "../services/PostDataService";
import UpLoadFilesService from "../services/UpLoadFilesService";
export default {
  name: "post",
  data() {
    return {
        comments:[],
        currentComment: null,
        currentIndex: -1,         
        message: '',
        comment: {      
          id: null,
          youtubeUrl:"",
          videoUrl:"",
          // title: "",
          description: "",
          // userId: "",
          username: "",
          published: false
      },
      userId: "", 
      postId: "",   
      isDisplay:true,
      currentPost: null,
      editing: false, 
       editingParagraphe: false,
       editingTexte: false, 
        editingImage: false, 
         editingLink: false, 
          editingVideo: false,  
      // paused:false, 
      // play:true,
       videoElement: null,
    paused: null,
    noImage:false,
    noVideo:false,
    // noLink:false,
    };
  },
  methods: {


 updatePaused(event) {
      this.videoElement = event.target;
      this.paused = event.target.paused;
    },
    play() {
      this.videoElement.play();
    },
    pause() {
      this.videoElement.pause();
    },
  
    // Play(){
    //   this.play = true
    // },
    // Pause(){
    //   this.paused = true
    // },
  
      
  
    // selected image file
     onSelect(e){     
      const file = this.$refs.file.files[0];
        this.currentPost.imageUrl = file;
         if( this.currentPost.imageUrl){
        this.noImage = true
      }
        console.log(e)
        // console.log(this.currentPost.imageUrl)        
    },
      onSelectVideo(e){     
      const file = this.$refs.fileVideo
      .files[0];
        this.currentPost.videoUrl = file;
         if( this.currentPost.videoUrl){
        this.noVideo = true
      }
        console.log(e)
        // console.log(this.currentPost.imageUrl)        
    },
       onSelect3(e){     
      const file = this.$refs.file3.files[0];
        this.currentPost.imageUrl = file;
        console.log(e)
        // console.log(this.currentPost.imageUrl)        
    },
       onSelect4(e){     
      const file = this.$refs.file4.files[0];
        this.currentPost.imageUrl = file;
        console.log(e)
        // console.log(this.currentPost.imageUrl)        
    },
       onSelect5(e){     
      const file = this.$refs.file5.files[0];
        this.currentPost.imageUrl = file;
        console.log(e)
        // console.log(this.currentPost.imageUrl)        
    },
    // upload image
     updateImage() {
     const formData = new FormData();
     let id = this.currentPost.id
    //  formData.append("file", this.currentPost.imageUrl, this.currentPost.imageUrl.name);
      formData.append("file", this.currentPost.imageUrl, this.currentPost.imageUrl.name);
         formData.append("title", this.currentPost.title,);
         formData.append("description", this.currentPost.description,);
         formData.append("description2", this.currentPost.description2,);
         formData.append("description3", this.currentPost.description3,);
     UpLoadFilesService.update(id, formData)
        .then(() => {
          // console.log(response.data);
          this.message = 'The post was updated successfully!';
          this.$router.push({ name: "posts" });
             
        })
        .catch(e => {
          console.log(e);
        });
    },


     uploadParagraphe() {
       
      let dataUser = JSON.parse(localStorage.getItem("user"))
      const formData = new FormData();
      // if (this.image !== null || "") {
        // formData.append("file", this.currentPost.imageUrl);
        formData.append("id", dataUser.id);
        formData.append("username", dataUser.username,);
         formData.append("description", this.comment.description || '',);
           formData.append("descriptionPhoto", this.comment.descriptionPhoto || '',);
           formData.append("youtubeUrl", this.comment.youtubeUrl || '',);

        //  descriptionPhoto
          formData.append("u", this.currentUser.id,);
        formData.append("postId", this.currentPost.id,);
      //  description: this.currentPost.description,
        // UpLoadFilesService.upload(formData)
        PostCommentService.create(formData)
       
         .then(response => {
          this.resetInput()

        

          this.getComment()
          console.log(response.data);
          console.log();

       
          // this.retrievePosts();
      
         })
    },

    uploadImage() {
       
      let dataUser = JSON.parse(localStorage.getItem("user"))
      const formData = new FormData();
      // if (this.image !== null || "") {
        formData.append("file", this.currentPost.imageUrl);
        formData.append("id", dataUser.id);
        formData.append("username", dataUser.username,);
         formData.append("description", this.comment.description || '',);
           formData.append("descriptionPhoto", this.comment.descriptionPhoto || '',);
           formData.append("youtubeUrl", this.comment.youtubeUrl || '',);

        //  descriptionPhoto
          formData.append("u", this.currentUser.id,);
        formData.append("postId", this.currentPost.id,);
      //  description: this.currentPost.description,
        // UpLoadFilesService.upload(formData)
        PostCommentService.create(formData)
       
         .then(response => {
          this.resetFile()

        

          this.getComment()
          console.log(response.data);
          console.log();

       
          // this.retrievePosts();
      
         })
    },
     uploadVideo() {
       
      let dataUser = JSON.parse(localStorage.getItem("user"))
      const formData = new FormData();
      // if (this.image !== null || "") {
        formData.append("file", this.currentPost.videoUrl);
        formData.append("id", dataUser.id);
        formData.append("username", dataUser.username,);
         formData.append("description", this.comment.description || '',);
           formData.append("descriptionPhoto", this.comment.descriptionPhoto || '',);
          //  formData.append("youtubeUrl", this.comment.youtubeUrl || '',);

        //  descriptionPhoto
          formData.append("u", this.currentUser.id,);
        formData.append("postId", this.currentPost.id,);
      //  description: this.currentPost.description,
        // UpLoadFilesService.upload(formData)
        VideoDataService.create(formData)
       
         .then(response => {
          this.resetFileVideo()

        

          this.getComment()
          console.log(response.data);
          console.log();

       
          // this.retrievePosts();
      
         })
    },
    uploadLink() {
       
      let dataUser = JSON.parse(localStorage.getItem("user"))
      const formData = new FormData();
      // if (this.image !== null || "") {
        // formData.append("file", this.currentPost.imageUrl);
        formData.append("id", dataUser.id);
        formData.append("username", dataUser.username,);
         formData.append("description", this.comment.description || '',);
           formData.append("descriptionPhoto", this.comment.descriptionPhoto || '',);
           formData.append("youtubeUrl", this.comment.youtubeUrl || '',);

        //  descriptionPhoto
          formData.append("u", this.currentUser.id,);
        formData.append("postId", this.currentPost.id,);
      //  description: this.currentPost.description,
        // UpLoadFilesService.upload(formData)
        PostCommentService.create(formData)
       
         .then(response => {
          this.resetInput()

          // if(this.currentPost.imageUrl){
         
          // this.resetFile()

          // }

          this.getComment()
          console.log(response.data);
          console.log();

       
          // this.retrievePosts();
      
         })
    },

    
    resetFile(){
      this.$refs.file.value=null;  
      this.comment.description="",
      this.comment.descriptionPhoto="",
      this.comment.youtubeUrl="",
      this.editingTexte= false,
      this.editingImage= false,
      this.editingVideo= false,
      this.editingLink= false
      
    },

      resetFileVideo(){
      this.$refs.fileVideo.value=null;  
      this.comment.description="",
      this.comment.descriptionPhoto="",
      this.comment.youtubeUrl="",
      this.editingTexte= false,
      this.editingImage= false,
      this.editingVideo= false,
      this.editingLink= false
      
    },
    resetInput(){

       this.comment.description="",
      this.comment.descriptionPhoto="",
      this.comment.youtubeUrl="",
      this.editingTexte= false,
      this.editingImage= false,
      this.editingVideo= false,
      this.editingLink= false

  // this.$refs.form.reset()
  // this.dialog = false;
  // this.imgSrc = ''
  // this.fileName = ''
  // this.imgUrl = ''
  // this.file = '',
    // this.$refs.file.value=null;
  
       
      
       this.file = null
       
    },

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
    // save comment
     saveComment() {    
       
        let dataUser = JSON.parse(localStorage.getItem("user"))
      const formData = new FormData();
      // if (this.image !== null || "") {
        formData.append("file", this.currentPost.imageUrl);
        formData.append("id", dataUser.id);
        formData.append("username", dataUser.username,);
        formData.append("u", this.currentUser.id,);
        formData.append("postId", this.currentPost.id,);

        //  u: this.currentUser.id,
      //   postId: this.currentPost.id
      
        PostCommentService.create(formData)
         .then(response => {
          
          console.log(response.data);
       
          // this.retrievePosts();
      
         })
       
      // let data = {
      //   description: this.comment.description,
      //   u: this.currentUser.id,
      //   postId: this.currentPost.id
      // }
      // PostCommentService.create(data)
      //   .then(response => {
      //     this.comment.id = response.data.id;      
      //     // console.log(response.data);
      //     this.submitted = true;    
      //     this.message = 'The post was updated successfully!';
      //     this.$router.push({ name: "posts" });
      //   })
      //   .catch(e => {
      //     console.log(e);
      //   });
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
    // showElement(){
    //    if (this.comments.imageUrl[0]) {
    //    console.log('ok')
    //   }else{
    //     console.log('rien')
    //   }
    // },
    // get a post 
    getPost(id) {
      PostDataService.get(id)
        .then((response)=> {

          this.currentPost = response.data;
         
          // console.log(response.data);
          console.log(this.currentPost.userId)
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
     editParagraphe(){    
      this.editingParagraphe = this.editingParagraphe == true?false:true    
      this.hide()
        // if(this.editing== false){
        //     this.$router.push({ name: "comment" });
        // this.updatePost()
        
    // }      
    console.log(this.editingParagraphe)  
    },

    editPost(){    
      this.editing = this.editing == true?false:true    
      this.hide()
        if(this.editing== false){
            this.$router.push({ name: "comment" });
        // this.updatePost()
        
    }      
    console.log(this.editing)  
    },
      editTexte(){    
      this.editingTexte =  this.editingTexte == true?false:true 
      this.hide()
        // if(this.editingTexte== false){
    //         this.$router.push({ name: "comment" });
    //     // this.updatePost()
        
    // }      
    console.log(this.editingTexte)  
    },
      editImage(){    
      this.editingImage = this.editingImage == true?false:true  
      this.hide()
        if(this.editingImage == false){
            this.comment.descriptionPhoto ="",
            this.comment.imageUrl =""
    //     // this.updatePost()
        
     }      
    console.log(this.editingImage)  
    },
      editLink(){    
      this.editingLink = this.editingLink == true?false:true 
      this.hide()
    if(this.editingImage == false){
            this.comment.descriptionPhoto ="",
            this.comment.youtubeUrl =""
        
     }      
    console.log(this.editingLink)  
    },
      editVideo(){    
      this.editingVideo =  this.editingVideo == true?false:true  
      this.hide()
    if(this.editingVideo == false){
            this.comment.descriptionPhoto ="",
            this.comment.youtubeUrl =""
        
     }      
    console.log(this.editingVideo)  
    },

      editSupprimer(){    
      this.editing = this.editing == true?false:true    
      this.hide()
        if(this.editing== false){
            // this.$router.push({ name: "comment" });
        // this.updatePost()
        
    }      
    console.log(this.editing)  
    },
    // cancelled 
    cancelled(){
       this.show()
       this.$router.push({ name: "posts-list" });
    },
    // updating post
    updatePost() {
      
       var upData = {    
       title: this.currentPost.title,
       description: this.currentPost.description,
       description2: this.currentPost.description2,
       description3: this.currentPost.description3,
       
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
    updateComment() {
       let id = this.currentPost.id
       var data = {    
       title: this.currentPost.title,
       description: this.comment.description,
       youtubeUrl : this.comment.youtubeUrl
      //  description2: this.currentPost.description2,
      //  description3: this.currentPost.description3,
       
       }
       
      //  JSON.parse(JSON.stringify(upData))
      
      PostCommentService.update(id,data)
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
    // delete post

      deletePost() {
        this.$confirm("Are you sure?").then(() => {
     PostDataService.delete(this.currentPost.id)  
         
        .then(response => {
          console.log(response.data);
          // this.$router.push({ name: "posts" });
          this.$router.push({ name: "posts" })
        })

        .catch(e => {
          console.log(e);
        });
        })
    },
  

    // deletePost() {
      
    //    PostDataService.delete(this.currentPost.id)      
    //     .then(()=> {         
    //       // PostCommentService.delete(this.currentPost.id)   
    //       // console.log(response.data);  
    //       this.$router.push({ name: "post", params: { id: this.currentComment.postId} });       
    //       this.$router.push({ name: "posts" })
    //       .then(() => {
    //       // location.reload()
    //       })
         
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // },

 
  },

// plum(){
//    PostCommentService.getAll()
//         .then(response => {
          
//           this.comments = response.data;
         
//           console.log(response.data);        
//         })
//         .catch(e => {
//           console.log(e);
//         });

// },

    
  mounted() {
    // this.create()
    this.getComment();
    this.message = '';
    this.getPost(this.$route.params.id);
    // this.plum()
    
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
    /* box-shadow: 5px 5px 5px #091f43; */
} 
.onLeft{
 text-align: start;
 /* margin-top: 30px;
 margin-bottom: 30px;     */

}
.video-preview-contain{
  margin-top: 30px;
  margin-bottom: 30px;
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
  /* margin-top: 10px; */
}
 .card-shadow{
    box-shadow: 10px 7px 10px black;
 }
 .gedf-main{
   /* padding-bottom: 66.6px; */
  /* margin-bottom: 66.6px; */
   border:lightgray 1px solid;
   box-shadow: 10px 7px 10px black;

  
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
.description{
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
.imgBlog{
  margin-bottom: 33.33px;
}

.inputBox{

  margin-top:75px;
  margin-bottom: 55px;
  /* margin-left:-100px; */
}
.float-right-btn{
margin-top: 30px;
margin-bottom: 30px;
}
.onRight{
 text-align: end;
 margin-top: 30px;
 margin-bottom: 30px;    

}

.onLowRight{
 text-align: end;
 margin-top: 15px;
 margin-bottom: 15px;    

}
 .onRightEnvoyerArticle{
    text-align: end;
 margin-top: 30px;
 /* margin-bottom: 30px;   */
 }
.card-margin{
  padding: 20px 20px 20px 20px;
  margin-bottom: 30px;
  
}
.paragrapheEdit{
   color: black;
  font-family:serif;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  text-align: justify;
  font-size: 17px;
   text-shadow:lightgray 0.1em 0.1em 0.2em;
}
.descriptionPhotoEdit{
    color: black;
    font-weight: 100;
    font-family:serif;
    font-style: italic;
    font-size: 15px;
   
    text-align: justify;
     text-shadow: lightgray 0.1em 0.1em 0.2em;
}
</style>