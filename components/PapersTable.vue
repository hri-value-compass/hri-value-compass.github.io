<template>
  <div class="overflow-x-auto">
    <h2 class="text-2xl font-bold mb-5">
      References
      <span v-if="filter"
        >about the topic:
        {{ filter.charAt(0).toUpperCase() + filter.slice(1) }}</span
      >
    </h2>
    <p v-if="!navigation">
      These are the papers that were reviewed in the scoping study. Click on the
      title to access the paper.
    </p>
    <p v-else>
      These are the papers that were reviewed in the scoping study. Click on the
      title to access the paper. You can click on the topics to filter the
      papers.
    </p>
    <table class="table table-zebra">
      <thead>
        <tr>
          <th>
            Topics
            <button
              v-if="filter && navigation"
              class="badge ml-5"
              @click="filterTo('')"
            >
              Clear filter
            </button>
          </th>
          <th>Title</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="paper in papersData" :key="paper.id">
          <td>
            <span v-for="(topic, index) in paper.topics" :key="index">
              <button
                v-if="navigation"
                class="badge hover:bg-primary mr-1 mb-1"
                @click="filterTo(topic)"
              >
                {{ topic }}
              </button>
              <span v-else class="badge mr-1 mb-1">{{ topic }}</span>
            </span>
          </td>
          <td>
            <a
              :href="
                paper.url
                  ? paper.url
                  : 'https://scholar.google.com/scholar?q=' + paper.title
              "
              target="_blank"
              class="hover:underline"
              >{{ paper.title }}</a
            >
          </td>
          <td>{{ paper.year }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  filter: { type: String, default: null },
  navigation: { type: Boolean, default: true },
});
const papersData = computed(() =>
  papers().filter((p) => !props.filter || p.topics.includes(props.filter))
);

const filterTo = (topic: string) => {
  navigateTo("/table/" + topic);
};
</script>

<style></style>
