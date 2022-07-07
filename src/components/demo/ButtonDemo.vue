<template>
    <h1>Button 示例</h1>

    <h2>类型</h2>
    <Button>default button</Button>
    <Button theme="default">default button</Button>
    <Button theme="link">link button</Button>
    <Button theme="text">text button</Button>

    <h2>尺寸</h2>
    <Button size="small">small button</Button>
    <Button size="normal">normal button</Button>
    <Button size="big">big button</Button>

    <h2>级别</h2>
    <div>
        <Button level="main">main</Button>
        <Button>normal</Button>
        <Button level="danger">danger</Button>
    </div>
    <div>
        <Button theme="link" level="main">main</Button>
        <Button theme="link">normal</Button>
        <Button theme="link" level="danger">danger</Button>
    </div>
    <div>
        <Button theme="text" level="main">main</Button>
        <Button theme="text">normal</Button>
        <Button theme="text" level="danger">danger</Button>
    </div>

    <h2>禁用</h2>
    <div>
        <Button disabled>Disabled</Button>
        <Button disabled theme="link">Disabled</Button>
        <Button disabled theme="text">Disabled</Button>
    </div>

    <h2>载入</h2>
    <div>
        <Button loading>Loading...</Button>
        <Button>Done</Button>
    </div>

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

<style lang="scss" scoped>
h1,
h2 {
    padding-top: 16px;
    padding-bottom: 16px;
}

button.sx-button {
    margin-top: 16px;
}
</style>