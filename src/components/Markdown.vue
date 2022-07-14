<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script lang="ts">
import hljs from "highlight.js";

export default {
  name: "Markdown",
  props: {
    content: {
      type: String,
      require: true,
    },
  },
  updated(){
    hljs.highlightAll();
  }
};
</script>
