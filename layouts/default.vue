<template>
  <div class="flex flex-col h-screen justify-between">
    <NuxtRouteAnnouncer />
    <header-simple />
    <div class="md:container md:mx-auto px-8 pb-8 pt-24">
      <slot />
    </div>
    <footer-simple />
  </div>
</template>

<script lang="ts" setup>
const form = useState("form", formData);

onBeforeMount(() => {
  const localFormString = localStorage.getItem("formData");
  if (localFormString) {
    const localForm = JSON.parse(localFormString);
    if (localForm.version === form.value.version) {
      console.log("loading local form");
      form.value = localForm;
    } else {
      // TODO: handle version mismatch
      console.log(
        "local form version mismatch",
        localForm.version,
        form.value.version
      );
    }
  } else {
    console.log("no local form found");
  }
});

useHead({
  script: [
    {
      src: "https://stats.hri.ilabt.imec.be/count.js",
      "data-goatcounter": "https://stats.hri.ilabt.imec.be/count",
      body: true,
    },
  ],
});

const description =
  "The HRI Value Compass is a web tool that helps researchers identify values and ethical concerns that arise in human-robot interactions";

useSeoMeta({
  title: "HRI Value Compass",
  ogTitle: description,
  description: description,
  ogDescription: description,
});
</script>
