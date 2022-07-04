<template>
    <h1>Dialog 示例</h1>
    <div>
        <Button @click="handleBtnClick">Toggle</Button>
        <Dialog 
            v-model:visible="visible" 
            :closeOnClickOverlay="false" 
            :ok="f1" 
            :cancel="f2" 
        />
    </div>
</template>

<script lang="ts">
import Dialog from '../../lib/Dialog.vue';
import Button from '../../lib/Button.vue';
import { ref } from 'vue';

export default {
    name: "SwitchDemo",
    components: {
        Dialog,
        Button
    },
    setup() {
        const visible = ref(false);
        const handleBtnClick = () => {
            visible.value = !visible.value;
        }
        const f1 = () =>{
            console.log("f1");
            return false;
        }
        const f2 = () =>{
            console.log("f2");
            return false;
        }
        return { visible, handleBtnClick, f1, f2 };
    }

}
</script>

<style lang="scss" scoped>
</style>