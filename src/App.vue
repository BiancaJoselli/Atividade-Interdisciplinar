<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import { ref } from 'vue';

const searchTerm = ref(""); 
</script>

<template>
  <HeaderComponent @search="searchTerm = $event" />

  <router-view :search="searchTerm" />
</template>

<style>
body {
  margin: 0;
  background-color: #000;
}
</style>.