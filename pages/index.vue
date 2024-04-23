<template>
  <div class="full-width full-height flex column h-center">
    <ul>
      <li>
        <nuxt-link to="/simple-netlify-form">Simple Netlify Form</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/ajax-netlify-form">AJAX Netlify Form</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/conditional-rendering-netlify-form">Conditional Rendering Netlify Form</nuxt-link>
      </li>
    </ul>
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