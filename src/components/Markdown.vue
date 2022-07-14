<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script lang="ts">
import { ref } from "vue";
import hljs from "highlight.js";

export default {
  name: "Markdown",
  props: {
    path: {
      type: String,
      require: true,
    },
  },
  setup(props) {
    const content = ref<string>('');
    import(props.path).then((result) => {
      let html = result.default;
      content.value = html;
    });
    return { content };
  },
  updated(){
    hljs.highlightAll();
  }
};
</script>
