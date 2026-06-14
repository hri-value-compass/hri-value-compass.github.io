<script setup lang="ts">
import { computed } from "vue"
import { getConcernMeta } from "~/utils/concernsAndValues"
import { absoluteUrl, paperUrl as studyUrl, siteName, truncateDescription } from "~/utils/seo"
import papers from "~/utils/papers"

const route = useRoute()
const valueSlug = String(route.params.value ?? "")
const topicSlug = String(route.params.topic ?? "")
const meta = getConcernMeta(valueSlug, topicSlug)

if (!meta) {
  throw createError({
    statusCode: 404,
    statusMessage: "Concern topic not found",
  })
}

const contentTitle = meta.valueTitle + " - " + meta.title
const pageTitle = contentTitle + " | " + siteName
const canonicalUrl = absoluteUrl("/" + valueSlug + "/" + topicSlug)
const pageDescription = truncateDescription(meta.description + " " + meta.intro[0])

useSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  ogType: "article",
  description: pageDescription,
  ogDescription: pageDescription,
  ogUrl: canonicalUrl,
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
})

useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: contentTitle,
        name: contentTitle,
        description: pageDescription,
        url: canonicalUrl,
        isPartOf: {
          "@type": "WebSite",
          name: siteName,
          url: absoluteUrl("/"),
        },
        about: [
          meta.valueTitle,
          meta.title,
          "human-robot interaction",
          "social robotics",
        ],
        citation: studyUrl,
      }),
    },
  ],
})

const normalizeTopic = (topic: string) => topic.toLowerCase().replaceAll("-", " ").trim()

const topicNames = computed(() => [
  topicSlug,
  meta.topic.tableTitle,
  meta.topic.title,
].filter((topicName): topicName is string => Boolean(topicName)))

const paperUrl = (paper: ReturnType<typeof papers>[number]) =>
  paper.url || "https://scholar.google.com/scholar?q=" + encodeURIComponent(paper.title)

const topicPapers = computed(() => {
  const topicSet = new Set(topicNames.value.map(normalizeTopic))

  return papers()
    .filter((paper) =>
      paper.topics.some((topic) => topicSet.has(normalizeTopic(topic))),
    )
    .sort((a, b) => b.year - a.year || a.title.localeCompare(b.title))
})
</script>

<template>
  <article class="space-y-5">
    <h1 class="text-2xl font-bold">{{ meta.valueTitle }} &ndash; {{ meta.title }}</h1>
    <blockquote class="border-l-4 border-gray-300 pl-4 italic text-gray-600">{{ meta.description }}</blockquote>
    <div class="space-y-4">
      <p v-for="(paragraph, index) in meta.intro" :key="index">
        {{ paragraph }}
      </p>
    </div>
    <section class="card card-body bg-base-200">
      <h3 class="card-title">
        Excerpts from the
        <NuxtLink to="https://doi.org/10.1007/s12369-025-01351-1" target="_blank" class="underline">paper:</NuxtLink>
      </h3>
      <h4 class="font-bold">About the value "{{ meta.valueTitle }}"</h4>
      <p class="border-l-4 border-base-content/25 pl-4">{{ meta.valueText }}</p>
      <h4 class="font-bold">About "{{ meta.title }}"</h4>
      <p class="border-l-4 border-base-content/25 pl-4">{{ meta.topicText }}</p>
    </section>
  </article>

  <section v-if="topicPapers.length" class="mt-10 border-t border-base-300 pt-6">
    <h3 class="mb-4 text-xl font-bold">Papers related to this topic</h3>
    <ol class="list-decimal space-y-3 pl-5 text-base-content/80">
      <li v-for="paper in topicPapers" :key="paper.title + paper.year">
        {{ paper.authors }}; {{ paper.year }}.
        <NuxtLink :to="paperUrl(paper)" target="_blank" class="font-medium text-base-content hover:underline">
          {{ paper.title }}
        </NuxtLink>
      </li>
    </ol>
  </section>
</template>
