<template>
  <form data-netlify="true" name="toilet-votes" @submit.prevent="handleSubmit">
    <input type="hidden" name="form-name" value="toilet-votes">
    <fieldset>
      <label v-for="position of positions" :key="position" :for="position">
        <p>{{ position }}</p>
        <input type="radio" name="position" :id="position" :value="position" @change="setPosition" required />
      </label>
    </fieldset>
    <fieldset v-show="formEntries.position && formEntries.position === 'Standing Up'">
      <label for="percent">
        <p>As a percentage, how much of the time do you remember to put down the toilet seat?</p>
        <input type="number" name="percent" id="percent" v-model="formEntries.percent" max="100" required />
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
import { ref } from 'vue';

// Framework Options
const positions = ref([
  'Standing Up',
  'Sitting Down'
]);

// Form Entries and Data
const formEntries = reactive({
  position: null,
  percent: 0
});

const setPosition = (e) => formEntries.position = e.target.value;

// Form Submission
const formRef = ref(null);
const formResponse = ref(null);

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

const handleSubmit = (e) => {
  const { position, percent } = formEntries;
  const formData = {
    position,
    percent,
    'form-name': 'toilet-votes'
  }

  fetch('/conditional-rendering-netlify-form', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode(formData)
  })
    .then(() => formResponse.value = 'Thank you for sharing.')
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