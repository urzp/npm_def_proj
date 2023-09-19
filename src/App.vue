<template>
    <div>
        <UiText  :text="'Some text'" />
    </div>
</template>

<script>
    import UiText from './UiText.vue'

    export default{
        name: 'AppName',
        components: { UiText },
    };      
</script>

<style>
    .main_div{
        height: 300px;
        width: 300px;
        background-image: url(./assets/img/myImg.png) ;
    }
</style>