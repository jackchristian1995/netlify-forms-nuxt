<template>
  <div class="full-width full-height flex column h-center">
    <h1>Vote For Your Fravourite JavaScript Framework</h1>
    <simple-netlify-form />
  </div>
</template>

<script setup>
// Component Imports
import SimpleNetlifyForm from '~/components/SimpleNetlifyForm.vue';
</script>

<style scoped>
h1 {
  margin-bottom: var(--padding-inner-base);
}
</style>