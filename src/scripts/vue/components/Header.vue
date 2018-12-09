<template>
    <div id="header">
        <p>100</p>
        <p>100</p>
        <p>100</p>
        <p>100</p>
    </div>
</template>
<script>
    export default {
        name: 'header',
    }
</script>


<style lang="scss" scoped>
    #header {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        left: 0;
        top:0;
        right: 0;
        z-index: 2;
        height: 28px;
        background: rgba(0, 67, 167, 0.5);
        p{
            color: white;
            font-size: 12px;
            margin: 0px 10px;
        }
    }
</style>

