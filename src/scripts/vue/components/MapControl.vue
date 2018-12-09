<template>
    <div id="map-control">
        <p> Map navigator</p>
        <div class="block-buttons-controle">
            <div class="buttons-line">
                <button class="big">
                    +
                </button>
            </div>

            <div class="buttons-line">
                <button class="big">
                    +
                </button>
                <button class="little">
                    +
                </button>
                <button class="big">
                    +
                </button>
            </div>

            <div class="buttons-line-footer">
                <button class="little">
                    +
                </button>
                <button class="big">
                    +
                </button>
                <button class="little">
                    +
                </button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'map-control',
    }
</script>


<style lang="scss" scoped>
    #map-control {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-top: auto;
        P{
            font-size: 20px;
            color:white;
            margin-bottom: 10px;
        }
        .block-buttons-controle {
            button {
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 26px;
                background: #c8d92b;
                border: none;
                border-radius: 100%;
                cursor:pointer;
            }
            .big {
                width: 46px;
                height: 46px;
            }
            .little {
                width: 30px;
                height: 30px;
            }
            .buttons-line {
                display: flex;
                align-items: center;
                justify-content: center;
                button{
                    margin: 0 5px;
                }
            }
            .buttons-line-footer {
                display: flex;
                justify-content: center;
                align-items: flex-end;
                button{
                    margin: 0 14px;
                }
            }
        }
    }
</style>

