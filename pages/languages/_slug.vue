<template>
<div>
  <no-translations v-if="noTranslatedWords" />
  <v-layout v-else>
    <v-flex>
      <category
        v-for="{ name, words } in allCategories"
        v-bind:key="name"
        :name="name"
        :words="words"
      />
    </v-flex>
  </v-layout>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import Category from "../../components/category.vue";
import NoTranslations from "../../components/noTranslations.vue";

export default {
  validate({ params: { slug } }) {
    return /^[a-zA-Z-]+$/i.test(slug);
  },
  components: {
    Category,
    NoTranslations,
  },
  computed: {
    ...mapGetters(["allCategories", "translatedWordCount"]),
    noTranslatedWords() {
      return this.translatedWordCount === 0;
    },
  },
};
</script>
