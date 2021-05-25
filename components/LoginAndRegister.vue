<template>
  <div class="main-page">
    <div class="register">

      <q-card-section>
        <h4 class="header">Register</h4>
        <div class="q-pa-md" style="max-width: 35vh">

          <q-form
              @submit="onSubmitForRegister"
              @reset="onResetForRegister"
              class="q-gutter-md"
          >
            <q-input
                dense
                filled
                type="email"
                v-model="emailRegister"
                label="Your email *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
            />

            <q-input
                dense
                filled
                type="password"
                v-model="passwordRegister"
                label="Your password *"
                lazy-rules

            />
            <div>
              <q-btn label="Submit" type="submit" color="primary"/>
              <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"/>
            </div>
          </q-form>

        </div>
      </q-card-section>
      <q-card-section>
        <h4 class="header">Login</h4>
        <div class="q-pa-md" style="max-width: 35vh">

          <q-form
              @submit="onSubmitForLogin"
              @reset="onResetForLogin"
              class="q-gutter-md"
          >
            <q-input
                dense
                filled
                type="email"
                v-model="emailLogin"
                label="Your email *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
            />

            <q-input
                dense
                filled
                type="password"
                v-model="passwordLogin"
                label="Your password *"
                lazy-rules
            />
            <div>
              <q-btn label="Submit" type="submit" color="primary"/>
              <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"/>
            </div>
          </q-form>

        </div>
      </q-card-section>
    </div>

    <q-btn color="blue" @click="login">Log In With Google</q-btn>

  </div>

</template>

<script>
import firebaseInstance from "@/middleWare/firebase";

export default {
  name: "LoginAndRegister",
  data() {
    return {
      emailLogin: '',
      passwordLogin: '',
      emailRegister: '',
      passwordRegister: '',
      accept: false
    }
  },
  methods: {
    login() {
      const provider = new firebaseInstance.firebase.auth.GoogleAuthProvider();
      firebaseInstance.firebase.auth()
          .signInWithPopup(provider)
          .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            window.user = result.user;
            this.$router.push('/home');
            // ...
          }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });

    },
    onSubmitForRegister() {
      firebaseInstance.firebase.auth().createUserWithEmailAndPassword(this.emailRegister, this.passwordRegister)
          .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            this.$router.push('/managementPage');
            // ...
          })

          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
          });

    },
    onResetForRegister() {
      this.emailRegister = ""
      this.passwordRegister = ""
    },

    onSubmitForLogin() {
      firebaseInstance.firebase.auth().signInWithEmailAndPassword(this.emailLogin, this.passwordLogin)
          .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            this.$router.push('/managementPage');

            // ...
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
          });


    },

    onResetForLogin() {
      this.emailLogin = ""
      this.passwordLogin = ""
    }
  },
}
</script>

<style scoped>
.header {
  color: black;
  margin-right: 70rem;
}

.register {

}


</style>
