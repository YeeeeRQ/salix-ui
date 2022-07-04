<template>
    <h1>Button 示例</h1>

    <h2>示例1</h2>
    <Button>default button</Button>
    <Button theme="default">default button</Button>
    <Button theme="link">link button</Button>
    <Button theme="text">text button</Button>

    <h2>示例2</h2>
    <Button size="small">small button</Button>
    <Button size="normal">normal button</Button>
    <Button size="big">big button</Button>

    <h2>示例3</h2>
    <dir>
        <Button level="main">main</Button>
        <Button>normal</Button>
        <Button level="danger">danger</Button>
    </dir>
    <dir>
        <Button theme="link" level="main">main</Button>
        <Button theme="link">normal</Button>
        <Button theme="link" level="danger">danger</Button>
    </dir>
    <dir>
        <Button theme="text" level="main">main</Button>
        <Button theme="text">normal</Button>
        <Button theme="text" level="danger">danger</Button>
    </dir>

    <h2>示例4</h2>
    <dir>
        <Button disabled>Disabled</Button>
        <Button disabled theme="link">Disabled</Button>
        <Button disabled theme="text">Disabled</Button>
    </dir>

    <h2>示例5</h2>
    <dir>
        <Button loading>Loading...</Button>
        <Button>Done</Button>
    </dir>

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