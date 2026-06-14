<script setup lang="ts">
import { concernRows } from '~/utils/concernsAndValues'
import { absoluteUrl, defaultDescription, paperUrl, siteName, zenodoToolUrl } from '~/utils/seo'

useSeoMeta({
  title: siteName,
  ogTitle: siteName,
  description: defaultDescription,
  ogDescription: defaultDescription,
  ogUrl: absoluteUrl('/'),
  twitterTitle: siteName,
  twitterDescription: defaultDescription,
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: siteName,
        url: absoluteUrl('/'),
        applicationCategory: 'ResearchApplication',
        description: defaultDescription,
        citation: paperUrl,
        sameAs: [paperUrl, zenodoToolUrl],
        audience: {
          '@type': 'Audience',
          audienceType: 'Human-robot interaction researchers',
        },
      }),
    },
  ],
})
</script>

<template>
  <div class="prose md:prose-lg">
    <article class="space-y-8">
      <h1 class="text-3xl font-bold">HRI Value Compass</h1>
      <p>
        The HRI Value Compass is the result of a joint study by Ghent University
        (Belgium) and Politecnico di Milano (Italy):
        <NuxtLink to="https://doi.org/10.1007/s12369-025-01351-1" target="_blank" class="underline">Concerns and Values
          in Human-Robot
          Interactions: A Focus on Social Robotics</NuxtLink>. It consists of a
        set of topics and a web tool. The topics are ethical concerns and values
        that arise in human-robot interactions, extracted from a scoping review
        of HRI literature, and validated through focus group discussions with
        technology ethics experts. The web tool helps researchers identify which
        of these values are relevant in their research context, and provides
        useful links to the literature for reference. If you use the tool or the
        insights in your research, please cite the publication.
      </p>
      <cite class="card card-body bg-base-200">
        Abbo, G.A., Belpaeme, T. & Spitale, M. Concerns and Values in
        Human-Robot Interactions: A Focus on Social Robotics. Int J of Soc
        Robotics 18, 4 (2026).
        <NuxtLink to="https://doi.org/10.1007/s12369-025-01351-1" target="_blank" class="underline">
          https://doi.org/10.1007/s12369-025-01351-1
        </NuxtLink>
      </cite>
      <nav class="md:space-x-4 flex flex-col md:flex-row max-w-full *:flex-auto">
        <a href="#concerns-and-values" class="btn btn-neutral mt-2
        pointer-events-auto">Concerns and values</a>
        <NuxtLink class="btn btn-primary mt-2 pointer-events-auto" to="/form/context">Use the tool</NuxtLink>
      </nav>
      <h2 class="text-2xl pt-8">How to use the HRI Value Compass tool</h2>
      <p>
        The HRI Value Compass guides the user through a three steps process. In
        the first step, the user is invited to reflect on the context in which
        the robot will be used. In the second step, the user is guided through a
        series of questions that help identify the values that are relevant in
        that context. In the third step, the interface displays provides an
        overview of the values that were identified, useful for further
        reflection and discussion.
      </p>
      <p>
        The tool is built on the results of a scoping review and a focus group
        with technology ethics experts. The results of this study are available
        by clicking names of each topic in the navigation menu or in the tool,
        providing useful links to the literature for further reading. You can
        also explore the topics and references in a table format.
      </p>
      <p>
        A paper version of the tool is available on
        <NuxtLink to="https://doi.org/10.5281/zenodo.14002841" target="_blank" class="underline">Zenodo</NuxtLink>.
      </p>
      <h2 id="concerns-and-values" class="text-2xl">Concerns and Values</h2>
      <div class="mt-4 overflow-x-auto [&_a]:underline">
        <table class="table-auto w-full border-collapse">
          <thead>
            <tr class="bg-gray-100">
              <th class="text-left px-3 py-2">Value</th>
              <th class="text-left px-3 py-2">Topic - Positive</th>
              <th class="text-left px-3 py-2">Topic - Negative</th>
              <th class="text-left px-3 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in concernRows" :key="row.value + '-' + (row.positive?.label || row.negative?.label)">
              <td class="px-3 py-2">{{ row.value }}</td>
              <td class="px-3 py-2">
                <NuxtLink v-if="row.positive" :to="row.positive.to">{{ row.positive.label }}</NuxtLink>
              </td>
              <td class="px-3 py-2">
                <NuxtLink v-if="row.negative" :to="row.negative.to">{{ row.negative.label }}</NuxtLink>
              </td>
              <td class="px-3 py-2">{{ row.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 class="text-2xl">
        &OpenCurlyDoubleQuote;Concerns and Values in Human-Robot Interactions: A
        Focus on Social Robotics&CloseCurlyDoubleQuote; &ndash; Abstract
      </h2>
      <p>
        Robots, as AI with physical instantiation, inhabit our social and
        physical world, where their actions have both social and physical
        consequences, posing challenges for researchers when designing social
        robots. This study starts with a scoping review to identify discussions
        and potential concerns arising from interactions with robotic systems in
        the context of healthcare, education, and private homes. Two focus
        groups of technology ethics experts then validated a comprehensive list
        of key topics and values in human-robot interaction (HRI) literature in
        these contexts. These insights were integrated into the HRI Value
        Compass web tool, to help HRI researchers identify these values in robot
        design. The tool was evaluated in a pilot study. This work benefits the
        HRI community by highlighting key concerns in human-robot interactions
        and providing an instrument to help researchers design robots that align
        with human values, ensuring future robotic systems adhere to these
        values in social applications.
      </p>
    </article>
  </div>
</template>
