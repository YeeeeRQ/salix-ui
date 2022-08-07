<template>
    <div class="sx-msg" :class="classes" v-if="visible">
        <!-- messagemessagemessagemessagemessagemessagemessagemessagemessagemessage message message message message -->
        Hello World!
        <span class="closeIcon"></span>
    </div>
</template>

<script lang="ts" setup>
import './index.scss';
import { IType } from './type';

import {
    computed,
    ref,
    onMounted,
    onUnmounted,
} from "vue";

interface Props {
    id: string,
    message?: string
    center?: boolean
    duration?: number
    type?: IType
}

const props = withDefaults(defineProps<Props>(), {
    id: '',
    message: '',
    center: false,
    duration: 3000,
    type: 'info',
})

const classes = computed(() => [
    "sx-msg-" + props.type, props.center ? "is-center" : "",
]);

const visible = ref(true);

const hideOnTime = (duration) => {
    if (duration) {
        let timer: any;
        const startTimer = () => {
            timer = setTimeout(() => {
                visible.value = false;
            }, duration);
        };
        onMounted(() => {
            startTimer();
            visible.value = true;
        });
        onUnmounted(() => {
            clearTimeout(timer);
        });
    }
}
hideOnTime(props.duration);
</script>