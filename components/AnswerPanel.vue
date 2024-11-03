<template>
  <span class="flex flex-col md:flex-row mb-4">
    <div class="md:basis-1/3 md:text-right pb-4 md:mr-8">
      <h4 v-if="title" @click="emit('titleClicked')">
        <button
          v-if="titleClickable"
          class="text-xl capitalize font-bold hover:underline"
        >
          {{ title }}
        </button>
        <span v-else class="text-xl" :class="{ capitalize: capitalize }">
          {{ title }}
        </span>
      </h4>
      <p class="text-base">
        <slot />
      </p>
    </div>
    <textarea
      v-model="model"
      class="basis-2/3 textarea textarea-bordered"
      :placeholder="placeholder"
    />
  </span>
</template>

<script lang="ts" setup>
const model = defineModel({ type: String });
defineProps({
  title: { type: String, default: undefined },
  placeholder: { type: String, default: "Write your answer here..." },
  titleClickable: { type: Boolean, default: false },
  capitalize: { type: Boolean, default: false },
});
const emit = defineEmits(["titleClicked"]);
</script>

<style></style>
