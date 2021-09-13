<template>
  <Component1 />
  <Component2 />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Component1 from './components/component1.vue';
import Component2 from './components/component2.vue';

export default defineComponent({
  name: 'App',
  components: {
    Component1,
    Component2,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
