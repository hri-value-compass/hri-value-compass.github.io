<template>
  <papers-table :filter="topic" />
</template>

<script lang="ts" setup>
import { absoluteUrl, siteName, truncateDescription } from "~/utils/seo"

const route = useRoute();
const topic = route.params.topic as string;
const contentTitle = topic ? "References about " + topic : "References";
const pageTitle = contentTitle + " | " + siteName;
const description = truncateDescription(
  topic
    ? "Reviewed human-robot interaction papers related to the topic " + topic + " in the HRI Value Compass scoping study."
    : "Reviewed papers from the HRI Value Compass scoping study on values and ethical concerns in human-robot interaction.",
);

useSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  description,
  ogDescription: description,
  ogUrl: absoluteUrl(route.path),
  twitterTitle: pageTitle,
  twitterDescription: description,
});
</script>
