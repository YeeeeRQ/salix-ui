<template>
    <div>
        <h1>Switch 开关</h1>
            <h2>基本</h2>
            <Switch v-model="isOpen" ></Switch>
            <p>
                isOpen: {{isOpen}}
            </p>
            <br>
            <h2>禁用</h2>
            <Switch v-model="isOpen" disabled></Switch>
            <p>
                isOpen: {{isOpen}}
            </p>


        <div class="demo">
            <h2>基本</h2>
            <div class="demo-component">
                <!-- <component :is="Switch1Demo" /> -->
            </div>
            <div class="demo-actions">
                <Button>查看代码</Button>
            </div>
            <div class="demo-code">
                <!-- <pre>{{Switch1Demo.__sourceCode}}</pre> -->
                <pre>&ltSwitch v-model:value="isOpen"/&gt;</pre>
            </div>
        </div>
        <div class="demo">
            <h2>禁用</h2>
            <div class="demo-component">
                <!-- <component :is="Switch3Demo"/> -->
            </div>
            <div class="demo-actions">
                <Button>查看代码</Button>
            </div>
            <div class="demo-code">
                <!-- <pre>{{Switch1Demo.__sourceCode}}</pre> -->
                <pre>&ltSwitch v-model:value="isOpen" disabled /&gt;</pre>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ref } from "vue";
import Button from "../../lib/Button/Button.vue";
import Switch from "../../lib/Switch/Switch.vue";

// console.log("sourceCode1:",Switch1Demo?.__sourceCode);
// console.log("sourceCode3:",Switch3Demo?.__sourceCode);
// console.log('Switch1Demo',Switch1Demo)
// console.log('Switch3Demo',Switch3Demo)
export default {
    components: {
    Button,
    Switch
    },
    setup() {
        const isOpen = ref(false);

        return {
            // Switch1Demo,
            // Switch3Demo,
            isOpen
        };
    },
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;

.demo {
    border: 1px solid $border-color;
    margin: 16px 0 32px;

    >h2 {
        font-size: 20px;
        padding: 8px 16px;
        border-bottom: 1px solid $border-color;
    }

    &-component {
        padding: 16px;
    }

    &-actions {
        padding: 8px 16px;
        border-top: 1px dashed $border-color;
    }

    &-code {
        padding: 8px 16px;
        border-top: 1px dashed $border-color;

        >pre {
            line-height: 1.1;
            font-family: Consolas, 'Courier New', Courier, monospace;
            margin: 0;
        }
    }
}
</style>