<template>
    <h1>Message 示例</h1>

    <h2>基本</h2>
    <article>
        <Button type="default" @click="openMessage({message:'Info' , type:'info'})">Info</Button>
        <Button type="success" @click="openMessage({message:'Success', type:'success'})">Success</Button>
        <Button type="danger" @click="openMessage({message:'Error', type:'error'})">Error</Button>
        <Button type="warning" @click="openMessage({message:'Warning', type:'warning'})">Warning</Button>
    </article>

    <article>
        <!-- <Message><template #content>阿斯蒂芬</template></Message> -->
    </article>
</template>

<script lang="ts">
import Button from '../../lib/Button/Button.vue';
import Message from '../../lib/Message/Message.vue';
import { openMessage } from '../../lib/Message';

export default {
    name: "MessageDemo",
    components: { Button, Message },
    setup() {

        const onClick = () => {
            console.log('hi');
        }

        return { onClick, openMessage }
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