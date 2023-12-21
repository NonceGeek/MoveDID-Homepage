<template>
  <div class="h-px bg-gradient-to-r from-grdb via-grdm to-grde" :class="[classText || 'w-full']"></div>
</template>

<script setup lang="ts">
defineProps(['classText'])
</script>
