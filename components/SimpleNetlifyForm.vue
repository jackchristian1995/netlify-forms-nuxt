<template>
  <form 
    action="/simple-netlify-form" method="post" enctype="application/x-www-form-urlencoded" 
    data-netlify="true" name="framework-votes">
    <input type="hidden" name="form-name" value="framework-votes">
    <fieldset>
      <label for="name">
        <p>
          Your Name:
        </p>
        <input type="text" name="name" id="name" required />
      </label>
      <label for="name">
        <p>
          Your Role:
        </p>
        <select name="occupation" id="occupation" required>
          <option disabled selected>Select...</option>
          <option value="front-end-developer">Front-end Developer</option>
          <option value="full-stack-developer">Full-stack Developer</option>
          <option value="web-designer">Web Designer</option>
          <option value="project-manager">Project Manager</option>
        </select>
      </label>
    </fieldset>
    <fieldset>
      <label v-for="framework of frameworks" :key="framework" :for="framework">
        <p>{{ framework }}</p>
        <input type="radio" name="framework" :id="framework" :value="framework" required />
      </label>
    </fieldset>
    <button type="submit">
      Submit
    </button>
  </form>
</template>

<script setup>
// Module Imports
import { ref } from 'vue';

// Framework Options
const frameworks = ref([
  'React',
  'VueJS',
  'Angular',
  'Svelte',
  'Ember',
  'Electron'
]);
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

fieldset {
  display: flex;
  margin-bottom: var(--padding-inner-base);
}

label > p {
  margin-bottom: calc(var(--padding-inner-base) / 2);
}

fieldset:last-of-type > label {
  display: flex;
  flex-direction: column;
  align-items: center;
}

fieldset:last-of-type > label > p {
  margin-bottom: 0;
}

button {
  margin: 0 auto;
}
</style>