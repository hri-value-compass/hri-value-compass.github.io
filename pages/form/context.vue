<template>
  <div>
    <content-card
      :step="0"
      title="Step 1: Contextual Information"
      subtitle="Answer briefly to the following questions, which are intended to help you reflect on the context of your project."
      end-text="Next"
      :end-action="toReflection"
    >
      <answer-panel
        v-for="q in form.context"
        :key="q.id"
        v-model="q.answer"
        :title="q.title"
      >
        <p class="whitespace-pre-line">{{ q.text }}</p>
      </answer-panel>
    </content-card>
  </div>
</template>

<script lang="ts" setup>
const form = useState("form", formData);

const toReflection = () => {
  localStorage.setItem("formData", JSON.stringify(form.value));
  navigateTo("/form/reflection");
};
</script>
