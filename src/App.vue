<script lang="ts">
import { provide, ref } from "vue"

export default {
  name: 'App',
  setup(){
    const menuVisible = ref(false)
    provide('xxx', menuVisible)
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
