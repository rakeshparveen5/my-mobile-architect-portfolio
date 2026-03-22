<template>
  <footer class="bg-dark text-white text-center q-pa-md">
    <div class="text-caption">
      © {{ new Date().getFullYear() }} {{ props.name }}. Built with Vue 3 + Quasar
    </div>
  </footer>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string;
}>();
</script>

<style scoped lang="scss"></style>
