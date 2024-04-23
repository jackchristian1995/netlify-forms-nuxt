<template>
  <div class="full-width full-height flex column h-center">
    <h1>Do you pee standing up or sitting down?</h1>
    <conditional-rendering-netlify-form />
  </div>
</template>

<script setup>
// Component Imports
import ConditionalRenderingNetlifyForm from "~/components/ConditionalRenderingNetlifyForm.vue";
</script>

<style scoped>
h1 {
  margin-bottom: var(--padding-inner-base);
}
</style>