<template>
    <div id="menu">
        <div class="menu-buttons">
            <button  @click="openModal('my-projects')">
                My projects
            </button>
            <button @click="openModal('new-projects')">
                New projects
            </button>
            <button @click="openModal('news')">
                News
            </button>
            <button >
                Next
            </button>
        </div>
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
        padding: 20px 10px;
        padding-top: 48px;
        display: flex;
        flex-direction: column;
        position: absolute;
        width: 200px;
        top:0;
        left: 0;
        bottom: 0;
        background: rgba(100, 67, 67, 0.5);
        .menu-buttons {
            button {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 48px;
                width: 100%;
                margin-bottom: 18px;
                font-size: 20px;
                color: white;
                border: none;
                background-color: rgb(0, 179, 88);
                cursor: pointer;
            }
            button:first-child {
                background-color: rgb(255, 61, 0); 
            }
            button:last-child  {
                background-color: rgb(255, 169, 64);
            }
        }
    }
</style>