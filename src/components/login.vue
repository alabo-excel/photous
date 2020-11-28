<template>
  <v-container>
    <v-dialog v-model="login" max-width="500px">
      <v-card>
        <v-card-text>
          <v-text-field type="email" label="Email"></v-text-field>
          <v-text-field type="password" label="Password"></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text color="primary" @click="login = false"> Submit </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "login",
  data: () => ({
login: false
  }),

};
</script>
