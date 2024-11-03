<template>
  <papers-table :filter="topic" />
</template>

<script lang="ts" setup>
const route = useRoute();
const topic = route.params.topic as string;
</script>
