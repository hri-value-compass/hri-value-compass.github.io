<template>
  <div class="card shadow-xl">
    <div class="card-body">
      <ul class="steps">
        <li
          v-for="(el, index) in steps"
          :key="index"
          :class="['step', { 'step-primary': el.active }]"
        >
          {{ el.name }}
        </li>
      </ul>
      <h2 v-if="title" class="text-2xl font-bold text-center">{{ title }}</h2>
      <p v-if="subtitle" class="italic text-center mb-16">{{ subtitle }}</p>
      <slot />
      <div class="card-actions justify-between">
        <NuxtLink v-if="startText" class="btn md:btn-wide" :to="startPath">
          {{ startText }}
        </NuxtLink>
        <div v-else />
        <button
          v-if="endText"
          class="btn btn-primary md:btn-wide"
          @click="endAction()"
        >
          {{ endText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { step } = defineProps({
  step: { type: Number, required: true },
  title: { type: String, default: undefined },
  subtitle: { type: String, default: undefined },
  startText: { type: String, default: undefined },
  startPath: { type: String, default: undefined },
  endText: { type: String, default: undefined },
  endAction: { type: Function, default: () => null },
});
const steps = [
  { name: "Context", active: step >= 0 },
  { name: "Values", active: step >= 1 },
  { name: "Results", active: step >= 2 },
];
</script>
