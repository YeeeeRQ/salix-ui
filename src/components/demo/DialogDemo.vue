<template>
    <h1>Dialog 示例</h1>
    <div>
        <h2>示例1</h2>
        <Button @click="handleBtnClick">Toggle</Button>
        <Dialog v-model:visible="visible" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
            <template v-slot:title>
                <strong>加粗标题</strong>
            </template>
            <template v-slot:content>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, reprehenderit ut tempora
                    dolorum voluptatum expedita, nihil cumque eaque vitae asperiores accusamus esse beatae nobis,
                    placeat eligendi sequi omnis! Ipsam, iusto!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, reprehenderit ut tempora
                    dolorum voluptatum expedita, nihil cumque eaque vitae asperiores accusamus esse beatae nobis,
                    placeat eligendi sequi omnis! Ipsam, iusto!</p>
            </template>
        </Dialog>

        <h2>示例2</h2>
        <Button @click="showDialog">show dialog</Button>
    </div>
</template>

<script lang="ts">
import Dialog from '../../lib/Dialog/Dialog.vue';
import Button from '../../lib/Button/Button.vue';
import { ref } from 'vue';

import { openDialog } from '../../lib/Dialog/openDialog';

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
        const f1 = () => {
            console.log("call f1");
            return true;
        }
        const f2 = () => {
            console.log("call f2");
            return true;
        }

        const showDialog = () => {
            openDialog({
                title: () => '标题',
                content: () => '你好',
                ok() {
                    console.log('ok')
                    return true;
                },
                cancel() {
                    console.log("cancel");
                    return true;
                }
            });
        }
        return { visible, handleBtnClick, f1, f2, showDialog };
    }

}
</script>

<style lang="scss" scoped>
</style>