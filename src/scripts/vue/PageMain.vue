<template>
    <div id="page-main">
        <img class="map" src="../../img/map.jpg"/>
        <Header/>
        <Menu/>
        
    </div>
</template>
<script>

    import { actions } from '../store';

    export default {
        name:'page-main',
    }
</script>

<style lang="scss" scoped>
    #page-main {
        width: 760px!important;
        height: 637px!important;
        background: black;
        position: relative;
        overflow: hidden;
    }
    .map {
        height: 100%;
    }
    
</style>
