<template>
    <div> Tabs </div>
    <h2>示例1</h2>
    <Tabs>
        <Tab title="导航1">内容1</Tab>
        <Tab title="导航2">内容2</Tab>
    </Tabs>
</template>

<script lang="ts">
import Tabs from '../../lib/Tabs.vue';

export default {
    name: "TabsDemo",
    components:{
        Tabs
    }
}
</script>

<style lang="scss" scoped>


</style>