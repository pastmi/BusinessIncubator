<template>
    <ui-modal id="modal-my-projects" ref="modal" dismissOn="esc close-button">
        qwe1
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

</style>
