<template>

    <div>
      <router-view></router-view>
    </div>
  
  
</template>

<script>

import login from "@/components/login.vue";
import signup from "@/components/signup.vue";

export default {
  name: "App",

  components: {
    login,
    signup
  },
  data: () => ({
    
  }),
};
</script>
