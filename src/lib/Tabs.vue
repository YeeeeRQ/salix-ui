<template>
    <div v-for="t,index in titles" :key="index">{{t}}</div>
    <component v-for="tab, index in tabs" :is="tab" :key="index"/>
</template>

<script lang="ts">
import { callWithAsyncErrorHandling } from 'vue';
import Tab from './Tab.vue';

export default {
    name: "Tabs",
    setup(props, context) {
        const defaults = context.slots.default()
        const tabs = defaults.filter((item) => item.type === Tab)
        if(defaults.length > tabs.length){
            console.warn('Tabs tag must include Tab tag');
        }

        const titles = tabs.map((tag)=>{
            return tag.props.title;
        })

        return {
            tabs,
            titles
        }
    }
}
</script>

<style lang="scss">
</style>