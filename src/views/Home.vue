<template>
  <div class="home">
    <div>
      <b-nav fill class="d-flex justify-space-between">
        <b-nav-item><h1 class="float-left">PHOTOUS</h1></b-nav-item>
        <div class="d-flex float-right mt-3">
          <b-nav-item @click="modal1 = !modal1">Login</b-nav-item>
          <b-nav-item @click="modal2 = !modal2">Sign Up</b-nav-item>
          <b-nav-item @click="modal3 = !modal3">Add</b-nav-item>
        </div>
      </b-nav>
    </div>
    <div>
      <b-img :src="require('../assets/hero11.jpg')" fluid alt="Responsive image"></b-img>
    </div>
    <div class="row">
      <div class="col-lg-4" v-for="image in product.images" :key="image">
        <b-card title="Card Title" height="250" :img-src="image" img-top tag="article" style="max-width: 20rem" class="m-4">
          <b-button href="#" variant="primary">Download</b-button>
        </b-card>
      </div>
    </div>

    <div>
      <b-modal centered v-model="modal1" title="Login">
        <b-form-input type="email" v-model="email" placeholder="Email"></b-form-input><br />
        <b-form-input type="password" v-model="password" placeholder="Password"></b-form-input>
        <template #modal-footer="{ ok}">
          <b-button size="sm" variant="primary" @click="loginUser; ok()"> OK </b-button>
          <b-button size="sm" variant="primary" @click="signup"> Signup </b-button>
        </template>
      </b-modal>
    </div>
    <div>
      <b-modal centered v-model="modal2" title="Sign Up">
        <b-form-input type="text" v-model="text" placeholder="Enter Your Name"></b-form-input><br />
        <b-form-input type="email" v-model="email" placeholder="Email"></b-form-input><br />
        <b-form-input type="password" v-model="password" placeholder="Password"></b-form-input>
        <template #modal-footer="{ ok }">
          <b-button size="sm" variant="primary" @click="ok(); signupUser"> OK </b-button>
          <b-button size="sm" variant="primary" @click="login"> Login </b-button>
        </template>
      </b-modal>
    </div>

    <div>
      <b-modal centered v-model="modal3" title="Add Image">
        <input @change="uploadImage" type="file" /> <br />
        <br />
        <b-progress :value="value" :max="max" show-progress animated></b-progress>

        <template #modal-footer="{ ok }">
          <b-button size="sm" variant="primary" @click="ok()"> Close </b-button>
        </template>
      </b-modal>
    </div>
    <footer class="bg-primary text-center p-3 text-white mt-5">
      <div>
        <p>Designed by Excel Tech 2020</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { fb } from "../firebase";

export default {
  name: "Home",
  data() {
    return {
      product: {
        name: null,
        images: [],
      },
      text: null,
      image: "",
      value: 0,
      max: 100,
      email: "",
      password: "",
      modal3: false,
      modal2: false,
      modal1: true,
    };
  },
  mounted: function () {
    var storageRef = fb.storage().ref("image/");
    var listRef = storageRef.child("file");

    // Find all the prefixes and items.
    listRef
      .listAll()
      .then((res) => {
        res.prefixes.forEach((result) => {
          console.log(result);
        });
        res.items.forEach((itemRef) => {
          console.log(itemRef);
        });
      })
      .catch((error) => {
        console.log("an error occured");
      });
  },
  methods: {
    uploadImage(e) {
      let file = e.target.files[0];
      // console.log(file);
      var storageRef = fb.storage().ref("image/" + file.name);
      var uploadTask = storageRef.put(file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          this.value = progress;
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.product.images.push(downloadURL);
            console.log("File available at", downloadURL);
            this.value = 0;
            this.modal3 = false;
          });
        }
      );
    },
    loginUser() {
      fb.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log("scuucessful loggedin");
          // Signed in
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // console.log(errorMessage)
        });
    },
    signupUser() {
      fb.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log("scuucessful signed up");
          // Signed in
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
        });
    },
    signup() {
      this.modal1 = false;
      this.modal2 = true;
    },
    login() {
      this.modal2 = false;
      this.modal1 = true;
    },
  },
};
</script>
<style scoped>
#hero {
  width: 100%;
}
#hero-text h1 {
  position: relative;
  margin-top: -100px;
}
</style>
