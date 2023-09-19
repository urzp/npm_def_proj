<template>
    <div class="main_div">{{ $options.name }}</div>
</template>

<script>
    export default{
        name: 'myAppName',
        data(){
            return {
                message: 'myAppMessage'
            }
        }
    };      
</script>

<style>
    .main_div{
        height: 300px;
        width: 300px;
        background-image: url(./assets/img/myImg.png) ;
    }
</style>