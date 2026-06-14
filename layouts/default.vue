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
import { absoluteUrl, defaultDescription, paperUrl, siteName, siteUrl } from "~/utils/seo"

const route = useRoute()
const canonicalUrl = computed(() => absoluteUrl(route.path))
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
  htmlAttrs: { lang: "en" },
  link: [
    { rel: "canonical", href: canonicalUrl },
  ],
  script: [
    {
      src: "https://stats.hri.ilabt.imec.be/count.js",
      "data-goatcounter": "https://stats.hri.ilabt.imec.be/count",
      body: true,
    },
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "@id": siteUrl + "/#website",
            name: siteName,
            url: siteUrl + "/",
            description: defaultDescription,
          },
          {
            "@type": "ScholarlyArticle",
            "@id": paperUrl + "#article",
            name: "Concerns and Values in Human-Robot Interactions: A Focus on Social Robotics",
            url: paperUrl,
            datePublished: "2026-01-14",
            isPartOf: {
              "@type": "Periodical",
              name: "International Journal of Social Robotics",
            },
            author: [
              { "@type": "Person", name: "Giulio Antonio Abbo" },
              { "@type": "Person", name: "Tony Belpaeme" },
              { "@type": "Person", name: "Micol Spitale" },
            ],
          },
        ],
      }),
    },
  ],
});

useSeoMeta({
  title: siteName,
  ogTitle: siteName,
  description: defaultDescription,
  ogDescription: defaultDescription,
  ogUrl: canonicalUrl,
  twitterCard: "summary",
  twitterTitle: siteName,
  twitterDescription: defaultDescription,
});
</script>
