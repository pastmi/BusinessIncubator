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
<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');
    * {
        padding: 0;
        margin: 0;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    #app {
        width: 100vw;
        height: 100vh;
    }
</style>

