<template>
    <ui-modal id="modals-news" ref="modal" dismissOn="esc close-button">
        <template slot="header">
            News
        </template>
        qwe3
    </ui-modal>
</template>

<script>
    export default {
        name: 'modals-news',

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

</style>
