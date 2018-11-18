<template>
    <div id="page-main">
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
        width: 760px;
        height: 637px;
        background: black;
        position: relative;
    }
    
</style>
