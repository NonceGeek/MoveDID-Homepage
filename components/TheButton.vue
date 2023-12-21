<template>
  <div class="rounded-full p-px border bg-third-gray"
    :class="[coloredBorder && 'bg-gradient-to-r from-grdb via-grdm to-grde']">
    <button class="rounded-full bg-[#fff] px-8 text-black-2 text-[15x] font-['Montserrat']"
      :class="[high ? 'py-4' : 'py-2.5', uppercase && 'uppercase', classText]">
      {{ text }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  classText: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    required: true,
  },
  uppercase: {
    type: Boolean,
    default: false,
  },
  high: {
    type: Boolean,
    default: false,
  },
  coloredBorder: {
    type: Boolean,
    default: false,
  },
})
</script>
