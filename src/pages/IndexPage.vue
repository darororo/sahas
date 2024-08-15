<template>
  <q-page class="flex flex-center">
    <HeroComponent />
  </q-page>
</template>

<script setup>
import HeroComponent from "src/components/HeroComponent.vue";

defineOptions({
  name: "IndexPage",
});
</script>
