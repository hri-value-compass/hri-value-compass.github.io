<template>
  <div>
    <dialog id="my_modal" class="modal">
      <div class="modal-box w-11/12 max-w-5xl">
        <form method="dialog">
          <button
            class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2"
          >
            ✕
          </button>
        </form>
        <papers-table :filter="currentTopic" :navigation="false" />
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
    <content-card
      :step="1"
      title="Step 2: Values & Topics"
      subtitle="Answer briefly to the following questions, which are intended to help you reflect on which values are relevant in your project. Each value (e.g. 'Agency') contains several topics (on the left). If a topic does not apply to your project, you can skip it. You can also click on the topic name to access more information."
      start-text="Back"
      start-path="/form/context"
      end-text="Results"
      :end-action="toResults"
    >
      <div v-for="v in form.reflection" :key="v.valueName">
        <div class="divider uppercase text-xl mb-10">{{ v.valueName }}</div>
        <answer-panel
          v-for="t in v.topics"
          :key="t.topicName"
          v-model="t.answer"
          :title="t.topicName"
          placeholder="Write your answer here (one sentence) if this applies to your scenario..."
          :title-clickable="true"
          @title-clicked="toggle(t.topicName)"
        >
          <p class="style-italics">{{ t.description }}</p>
          <p>{{ t.question }}</p>
        </answer-panel>
      </div>
    </content-card>
  </div>
</template>

<script lang="ts" setup>
const form = useState("form", formData);
const currentTopic = useState("currentTopic", () => "");

const toResults = async () => {
  localStorage.setItem("formData", JSON.stringify(form.value));
  navigateTo("/form/results");
};

const toggle = (topic: string) => {
  currentTopic.value = topic;
  my_modal.showModal();
};
</script>
