<template>
    <div id="app">
        <router-view ></router-view>
    </div>
</template>

<script>
export default {
    name: 'app',

}
</script>
<style lang="scss" >
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');
    * {
        padding: 0px;
        margin: 0px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    #app {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    //modals
    .ui-modal__container {
        background: none!important;
    }
    .ui-modal__header {
        background: rgba(0, 67, 167, 0.7)!important;
        color:white!important;
        height: 30px!important;
    }
    .ui-icon svg  {
        color: white;
    }
    .ui-modal__body {
        background: #42abae70;
    }   
</style>

