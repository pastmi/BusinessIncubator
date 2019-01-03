<template>
    <ui-modal id="modals-new-project" ref="modal" dismissOn="esc close-button">
        <template slot="header">
            New projects
        </template>
        qwe2
    </ui-modal>
</template>

<script>
    export default {
        name: 'modals-new-project',

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
