<template>
    <div class="main_div">
        <!-- <UiText  :text="'Some text'" color="red" /> -->
        <UiButton><UiText  :text="'Some text'" color="red" /></UiButton>
        <!-- <button class="button">HTML button</button> -->
    </div>
</template>

<script>
    import UiButton from './UiButton.vue';
    import UiText from './UiText.vue'

    export default{
        name: 'AppName',
        components: { UiText, UiButton },
    };      
</script>

<style>
    .main_div{
        margin: 50px;
    }
</style>