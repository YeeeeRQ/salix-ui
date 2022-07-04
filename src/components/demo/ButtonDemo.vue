<template>
    <div>Button 示例</div>
    <h1>示例1</h1>
    <Button>default button</Button>
    <Button theme="button">default button</Button>
    <Button theme="link">link button</Button>
    <Button theme="text">text button</Button>
    <h1>示例2</h1>
    <Button size="small">button</Button>
    <Button size="normal">button</Button>
    <Button size="big">button</Button>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';

export default {
    name: "ButtonDemo",
    components: { Button },
    setup() {
        const onClick = () => {
            console.log('hi');
        }
        return { onClick }
    }
}
</script>

<style lang="scss">
</style>