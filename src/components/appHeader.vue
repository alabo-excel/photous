<template >
<div>
    <v-app-bar app color="primary" dark>
      <div><h1>PhotoUs</h1></div>
      <v-spacer></v-spacer>

      <div @click="login = !login" class="mr-5"><h5 >Login</h5></div>
      <div @click="signup = !signup" class="mr-5"><h5>Sign Up</h5></div>
    </v-app-bar>
</div>
</template>

<script>
export default {
    
}
</script>