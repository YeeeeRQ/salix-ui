<template>
    <h1>Button 示例</h1>

    <h2>基本</h2>
    <article>

    <Button type="default">Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button>
    <br>
    <br>
    <Button type="default" text>Default</Button>
    <Button type="primary" text>Primary</Button>
    <Button type="success" text>Success</Button>
    <Button type="warning" text>Warning</Button>
    <Button type="danger" text>Danger</Button>
    <br>
    <br>
    <Button type="default" link>Default</Button>
    <Button type="primary" link>Primary</Button>
    <Button type="success" link>Success</Button>
    <Button type="warning" link>Warning</Button>
    <Button type="danger" link>Danger</Button>
    </article>

    <h2>尺寸</h2>
    <Button size="small">Small</Button>
    <Button size="medium">Medium</Button>
    <Button size="large">Large</Button>

    <h2>禁用</h2>
    <div>
        <Button disabled type="default">Default</Button>
        <Button disabled type="primary">Primary</Button>
        <Button disabled type="success">Success</Button>
        <Button disabled type="warning">Warning</Button>
        <Button disabled type="danger">Danger</Button>
        <br>
        <br>
        <Button disabled type="default" text>Default</Button>
        <Button disabled type="primary" text>Primary</Button>
        <Button disabled type="success" text>Success</Button>
        <Button disabled type="warning" text>Warning</Button>
        <Button disabled type="danger" text>Danger</Button>
        <br>
        <br>
        <Button disabled type="default" link>Default</Button>
        <Button disabled type="primary" link>Primary</Button>
        <Button disabled type="success" link>Success</Button>
        <Button disabled type="warning" link>Warning</Button>
        <Button disabled type="danger" link>Danger</Button>
    </div>

    <h2>载入</h2>
    <article>
        <Button type="default" loading>Loading...</Button>
        <Button type="default">Done</Button>

    </article>

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