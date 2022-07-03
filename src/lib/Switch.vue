<template>
    <button :class="{ checked:value }" @click="toggle">
        <span></span>
    </button>
    <div>{{value}}</div>
</template>

<script lang="ts">

export default {
    name: "Switch",
    props:{
        value: Boolean
    },
    setup(props, context) {
        const toggle = () => {
            context.emit('update:value', !props.value)
        }
        return { toggle }
    }
}
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
$t: 0.4s;

button {
    height: $h;
    width: $h*2;
    border: none;
    border-radius: $h2;
    position: relative;
    background-color: rgb(167, 183, 192);
    transition: background-color $t;
}

span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background-color: white;
    border-radius: $h2;
    transition: left $t;
}

button.checked>span {
    left: calc(100% - #{$h2} - 2px);
}

button.checked {
    background-color: rgb(20, 156, 241);
}

button::focus{
    outline: none;
}
</style>