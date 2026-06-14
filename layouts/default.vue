<template>
  <div class="flex flex-col h-screen justify-between">
    <NuxtRouteAnnouncer />
    <header-simple />
    <div class="md:container md:mx-auto px-8 pb-8 pt-40">
      <div class="flex flex-col gap-10 md:flex-row md:items-start">
        <main class="order-1 min-w-0 md:order-2 md:flex-1">
          <nav class="mb-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-sm font-semibold md:hidden"
            aria-label="Page shortcuts">
            <NuxtLink to="/" class="underline">Home</NuxtLink>
            <NuxtLink to="/form/context" class="underline">Use the tool</NuxtLink>
            <a href="#concerns-and-values-nav" class="underline">
              Concerns and values
            </a>
            <NuxtLink to="/table" class="underline">References table</NuxtLink>
          </nav>

          <slot />
        </main>

        <ConcernsAndValuesSidebar class="order-2 md:order-1" />
      </div>
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
  ogTitle: "HRI Value Compass",
  description: description,
  ogDescription: description,
});
</script>
