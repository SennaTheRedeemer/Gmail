<template>
    <keep-alive>
        <component v-bind:is="currentTabComponent"></component>
    </keep-alive>
</template>
<script>
import Inbox from "../views/Inbox.vue"
import Outbox from "../views/Outbox.vue"
import Trash from "../views/Trash.vue"
import Vue from 'vue';
import bus from "../eventbus"

export default {
    name: 'Content',
    components: {
        Inbox,
        Outbox,
        Trash,
    },
    methods: {
    },
    data: () => ({
        currentTabComponent: Inbox,
        componentTitles: {
            'דואר נכנס': Inbox,
            'דואר יוצא': Outbox,
            'דואר זבל': Trash
        },
        title: 'דואר נכנס'
    }),
    mounted() {
        const self = this
        bus.$on("changeView", function(title) {
            self.currentTabComponent = self.componentTitles[title]
            self.title = title
        })
    },
};
</script>
<style scoped>

</style>