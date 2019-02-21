<template>
  <div class="container">
    <h1 v-if="error.statusCode === 403">403</h1>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'empty' // you can set a custom layout for the error page
}
</script>
