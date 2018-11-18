<template>
    <div id="menu">
        <button @click="openModal('my-projects')">
            qwe
        </button>
        <button @click="openModal('new-projects')">
            qwe
        </button>
        <button @click="openModal('news')">
            qwe
        </button>
        <button>
            qwe
        </button>
        <map-control/>
        <modal-my-projects ref="modal-my-projects"/>
        <modal-new-projects ref="modal-new-projects"/>
        <modal-news ref="modal-news"/>
    </div>
</template>
<script>
    export default {
        name:"menu",
        methods:{
            openModal(type){
                switch (type) {
                    case 'my-projects':
                        this.$refs['modal-my-projects'].open();
                        break;
                    case 'new-projects':
                        this.$refs['modal-new-projects'].open();
                        break;
                    case 'news':
                        this.$refs['modal-news'].open();
                        break;
                
                    default:
                        break;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    #menu {
        padding-top: 40px;
        display: flex;
        flex-direction: column;
        position: absolute;
        width: 100px;
        top:0;
        left: 0;
        bottom: 0;
        background: grey;
    }
</style>