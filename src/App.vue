<script lang="ts">
import { provide, ref } from "vue"

export default {
  name: 'App',
  setup(){
    const width = document.documentElement.clientWidth;

    const asideVisible = ref(width <= 500 ? false : true);

    provide('asideVisible', asideVisible)
  }
}


</script>

<template>
  <router-view/>
</template>


<style lang="scss">
@import "./src/assets/style/reset.scss";
@import "./src/assets/style/helper.scss";

</style>
