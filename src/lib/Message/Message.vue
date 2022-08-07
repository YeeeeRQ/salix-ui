<template>
<transition
    name="sx-msg-fade"
    @before-leave="onClose"
    @after-leave="emit('destroy', props.id)"
>
    <div class="sx-msg" :class="classes" v-show="visible" :style="styles">
        <!-- messagemessagemessagemessagemessagemessagemessagemessagemessagemessage message message message message -->
        {{id}} {{message}}
        <span class="closeIcon" @click="hideMessage"></span>
    </div>
</transition>
</template>

<script lang="ts" setup>
import './index.scss';
import { IType } from './type';

import { computed, ref, onMounted, onUnmounted} from "vue";

interface Props {
    id: number,
    message?: string
    center?: boolean
    duration?: number
    type?: IType
    offset?:number
    onClose: ()=>void
}

const props = withDefaults(defineProps<Props>(), {
    message: '',
    center: false,
    duration: -1,
    type: 'info',
    offset: 20,
})

const emit = defineEmits<{
    (e:'destroy', id:number):void
}>()

const classes = computed(() => [
    "sx-msg-" + props.type, props.center ? "is-center" : "",
]);

const visible = ref(true);

const hideMessage = () => {
    visible.value = false;
    // emit('destroy', props.id);
}

const hideOnTime = () => {
    let timer: any;
    const startTimer = () => {
        timer = setTimeout(() => {
            hideMessage();
        }, props.duration);
    };
    onMounted(() => {
        startTimer();
        visible.value = true;
    });
    onUnmounted(() => {
        clearTimeout(timer);
    });
}

// 不指定duration则需手动关闭message
if (props.duration > 0) {
    hideOnTime();
}

const styles = computed(()=>({
    top:`${props.offset}px`,
}))

</script>