<template>
    <button class="sx-switch" :class="{ 'sx-checked': modelValue, 'sx-disabled': disabled }" @click="toggle">
        <span class="sx-circle"></span>
    </button>
</template>

<script lang="ts" setup>
import './index.scss';

interface Props {
    modelValue?: boolean
    disabled?: boolean
}
const props = withDefaults(defineProps<Props>(), {
    modelValue: false,
    disabled: false,
})

const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>()

const toggle = () => {
    if (props.disabled) return;
    emit('update:modelValue', !props.modelValue)
}

</script>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: "Switch",
    inheritAttrs: false,
})
</script>