<template>
    <div class="dialog-overlay"></div>
    <div class="dialog-wrapper">
        <header>标题</header>
        <main>
            <p>第1行字</p>
            <p>第2行字</p>
        </main>
        <footer>
            <Button>OK</Button>
            <Button>Cancel</Button>
            
        </footer>
    </div>
</template>

<script lang="ts">
import Button from './Button.vue';
export default {
    name: "Dialog",
    components:{Button},
}
</script>

<style lang="scss" scoped>


</style>