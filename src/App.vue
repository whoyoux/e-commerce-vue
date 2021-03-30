<template>
  <Header />
  <router-view/>
</template>

<script>
import Header from './components/Header';
export default {
  components: {
    Header
  }
}
</script>

<style>
:root {
  --flex-gap: 20px;
  --baner-length: calc(100% - var(--flex-gap) * 2 - 430px);
  --bg-color: #f0f0f0;
}

body {
  background-color: var(--bg-color);
}
</style>