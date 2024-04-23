<template>
  <form ref="formRef" data-netlify="true" name="framework-votes-ajax" @submit.prevent="handleSubmit">
    <input type="hidden" name="form-name" value="framework-votes-ajax">
    <fieldset>
      <label for="name">
        <p>
          Your Name:
        </p>
        <input type="text" name="name" id="name" v-model="formEntries.name" required />
      </label>
      <label for="name">
        <p>
          Your Role:
        </p>
        <select name="occupation" id="occupation" v-model="formEntries.role" required>
          <option disabled value="default">Select...</option>
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
        <input type="radio" name="framework" :id="framework" :value="framework" @change="setVote" required />
      </label>
    </fieldset>
    <button type="submit">
      Submit
    </button>
    <p class="response-message" v-if="formResponse">{{ formResponse }}</p>
  </form>
</template>

<script setup>
// Module Imports
import { ref, reactive } from 'vue';

// Framework Options
const frameworks = ref([
  'React',
  'VueJS',
  'Angular',
  'Svelte',
  'Ember',
  'Electron'
]);

// Form Entries and Data
const formEntries = reactive({
  name: null,
  role: 'default',
  vote: null
});

const setVote = (e) => formEntries.vote = e.target.value;

// Form Submission
const formRef = ref(null);
const formResponse = ref(null);

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

const handleSubmit = (e) => {
  const formData = {
    ...formEntries,
    'form-name': formRef.value.name
  }

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode(formData)
  })
    .then(() => formResponse.value = 'Thank you for your vote.')
    .catch((e) => formResponse.value = e.message);
}
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

.response-message {
  padding: var(--padding-inner-base) 0;
}
</style>