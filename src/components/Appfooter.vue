<template>
  <v-footer dark padless>
    <v-card class="flex text-center primary" flat tile>
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="py-2 white--text text-center"> {{ new Date().getFullYear() }} — <strong>Alabo Excel</strong> </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Appfooter",
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
