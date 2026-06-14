<script setup lang="ts">
import { computed } from "vue"
import { concernValues } from "~/utils/concernsAndValues"

const route = useRoute()
const normalizedPath = computed(() => route.path.replace(/\/$/, "") || "/")
const isCurrentPath = (path: string) => normalizedPath.value === path
const isCurrentTopic = (valueSlug: string, topicSlug: string) => isCurrentPath("/" + valueSlug + "/" + topicSlug)
</script>

<template>
  <aside id="concerns-and-values-nav"
    class="border-t border-base-300 pt-8 md:w-64 md:shrink-0 md:border-r md:border-t-0 md:pr-6 md:pt-0 lg:w-72"
    aria-label="Concerns and values">
    <div class="space-y-3">
      <NuxtLink to="/"
        class="block text-sm font-semibold uppercase tracking-wide text-base-content/70 hover:text-base-content"
        :class="{ 'underline': isCurrentPath('/') }">Home</NuxtLink>
      <NuxtLink to="/form/context"
        class="block text-sm font-semibold uppercase tracking-wide text-base-content/70 hover:text-base-content"
        :class="{ 'underline': normalizedPath.startsWith('/form') }">
        Use the tool
      </NuxtLink>
      <h3 class="text-sm font-semibold uppercase tracking-wide text-base-content/70">Concerns and values</h3>
      <nav>
        <section v-for="valueItem in concernValues" :key="valueItem.slug">
          <h4 class="text-base font-semibold">{{ valueItem.title }} </h4>
          <ul>
            <li v-for="topic in valueItem.topics" :key="topic.slug">
              <NuxtLink :to="'/' + valueItem.slug + '/' + topic.slug"
                class="block rounded px-2 py-1.5 text-sm transition-colors hover:bg-base-200" :class="{
                  'bg-base-200 font-semibold text-base-content':
                    isCurrentTopic(valueItem.slug, topic.slug),
                  'text-base-content/75':
                    !isCurrentTopic(valueItem.slug, topic.slug),
                }" :aria-current="isCurrentTopic(valueItem.slug, topic.slug) ? 'page' : undefined
                  ">
                {{ topic.title }}
              </NuxtLink>
            </li>
          </ul>
        </section>
      </nav>
      <NuxtLink to="/table"
        class="block text-sm font-semibold uppercase tracking-wide text-base-content/70 hover:text-base-content"
        :class="{ 'underline': normalizedPath.startsWith('/table') }">
        References table
      </NuxtLink>
      <h3 class="pt-16 text-sm font-semibold uppercase tracking-wide text-base-content/70">Cite this work:</h3>
      <cite class="text-sm text-base-content/70">
        Abbo, G.A., Belpaeme, T. & Spitale, M. Concerns and Values in
        Human-Robot Interactions: A Focus on Social Robotics. Int J of Soc
        Robotics 18, 4 (2026).
        <NuxtLink to="https://doi.org/10.1007/s12369-025-01351-1" target="_blank" class="underline">
          https://doi.org/10.1007/s12369-025-01351-1
        </NuxtLink>
      </cite>
    </div>
  </aside>
</template>
