<template>
    <h1>Message 示例</h1>

    <h2>基本</h2>
    <article>
        <Button type="default" @click="onClick">Normal</Button>
        <Button type="success" @click="openMsg">Success</Button>
        <Button type="danger">Error</Button>
        <Button type="warning">Warning</Button>
    </article>

    <article>
        <Message><template #content>阿斯蒂芬</template></Message>
        <Message><template #content>阿斯蒂芬</template></Message>
    </article>

</template>

<script lang="ts">
import Button from '../../lib/Button.vue';
import Message from '../../lib/Message.vue';
import { openMessage } from '../../lib/SxMessage';

export default {
    name: "MessageDemo",
    components: { Button, Message },
    setup() {
        const openMsg = () => {
            openMessage({ content: "hello" });
        }
        const onClick = () => {
            console.log('hi');
        }

        return { openMsg,onClick }
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