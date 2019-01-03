<template>
    <ui-modal id="modal-my-projects" ref="modal" dismissOn="esc close-button">
            <template slot="header">
                My projects
            </template>
        <div class="body">
            <div class="body-container-image">
                <img src="../img/IT-project.png"/>  
            </div>
            <div class="body-container-information">
                <p><img src="../img/project_invest.png"/>9000</p>
                <p><img src="../img/project_feddback.png"/>300</p>
            </div>
        </div>
        <button>Additional loan</button>
    </ui-modal>
</template>

<script>
    export default {
        name: 'modal-my-projects',

        data() {
            return {

            };
        },

        methods: {
            open() {
                this.$refs['modal'].open();
            },

            cancel() {
                this.$refs['modal'].close();
            }
        }
    };
</script>
<style lang="scss" scoped>
    .body {
        display: flex;
        align-items: center;
        margin-top: 55px;
        height: 115px;
        div {
            flex: 1;
        }
        .body-container-information {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            color: white;
            font-size: 20px;
            height: 100%;
            p{
                display: flex;
                align-items: center;
            }
            img {
                margin-right: 20px;
            }
        }
    }
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 48px;
        width: 165px;
        font-size: 20px;
        color: white;
        border: none;
        cursor: pointer;
        box-shadow:  3px 3px 10px #00000060;
        background-color: rgb(255, 61, 0); 
        margin-left: auto;
        margin-top: 17px
    }
</style>
