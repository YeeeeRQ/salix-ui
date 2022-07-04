<template>
    <h1>Dialog 示例</h1>
    <div>
        <!-- <Dialog :visible="true" /> -->
        <!-- <Dialog :visible="false" /> -->
        <Button  @click="handleBtnClick">Toggle</Button>
        <Dialog v-model:visible="x" />
    </div>
</template>

<script lang="ts">
import Dialog from '../../lib/Dialog.vue';
import Button from '../../lib/Button.vue';
import { ref } from 'vue';

export default {
    name: "SwitchDemo",
    components:{
        Dialog,
        Button
    },
    setup(){
        const x = ref(false);
        const handleBtnClick= ()=>{
            x.value =  !x.value;
        }
        return {x, handleBtnClick};
    }

}
</script>

<style lang="scss" scoped>


</style>