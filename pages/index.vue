<template>
  <v-container grid-list-md>
    <v-card>
      <v-layout row wrap>
        <v-flex xs12 sm4 md4 lg4>
          <feature icon="🌍" title="Simple" description="Select from wide range of emojis, to look up new words or to revise already known" />
        </v-flex>
        <v-flex xs12 sm4 md4 lg4>
          <feature icon="👐" title="Open source" description="Everyone can contribute, by adding new translations, emojis or code" />
        </v-flex>
        <v-flex xs12 sm4 md4 lg4>
          <feature icon="📱" title="Reliable" description="Accesible from any device and works offline. Feel like a native app" />
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
import Feature from "../components/feature.vue";

export default {
  components: {
    Feature,
  },
};
</script>

<style scoped>
.card {
  padding: 1rem;
}
</style>
