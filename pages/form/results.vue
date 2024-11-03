<template>
  <div>
    <content-card
      :step="2"
      title="Step 3: Results Overview"
      subtitle="Here you can see an overview of the data you inserted."
      start-text="Back"
      start-path="/form/reflection"
      end-text="Exit"
      :end-action="completedForm"
    >
      <h3 class="text-3xl font-bold mb-2">About your context:</h3>
      <div class="grid grid-cols-1 items-stretch gap-4 md:grid-cols-3 mb-4">
        <p v-if="!context.length">
          You did not specify anything about your context.
        </p>
        <div v-for="q in context" :key="q.id" class="card card-bordered">
          <div class="card-body">
            <h4 class="card-title">{{ q.recap }}</h4>
            <p class="text-pretty hyphens-auto break-words">{{ q.answer }}</p>
          </div>
        </div>
      </div>
      <h3 class="text-3xl font-bold m-2">The values you considered:</h3>
      <p v-if="!reflection.length">
        You did not specify anything about the values in your use case.
      </p>
      <div class="grid grid-cols-1 items-stretch gap-4 md:grid-cols-3 mb-4">
        <div
          v-for="v in reflection"
          :key="v.valueName"
          class="card card-bordered"
        >
          <div class="card-body">
            <h4 class="card-title capitalize">{{ v.valueName }}</h4>
            <p
              v-for="t in v.topics"
              :key="t.topicName"
              class="text-pretty hyphens-auto break-words"
            >
              <strong class="capitalize">{{ t.topicName }}</strong> -
              {{ t.answer }}
            </p>
          </div>
        </div>
      </div>
    </content-card>
  </div>
</template>

<script lang="ts" setup>
const form = useState("form", formData);
const context = computed(() => form.value.context.filter((q) => q.answer));
const reflection = computed(() =>
  form.value.reflection
    .filter((v) => v.topics.some((t) => t.answer))
    .map((v) => ({
      valueName: v.valueName,
      topics: v.topics.filter((t) => t.answer),
    }))
);

const completedForm = async () => {
  navigateTo("/");
};
</script>
