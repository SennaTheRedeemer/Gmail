<template>
    <div>
        <keep-alive>
            <component v-bind:is="currentTabComponent"></component>
        </keep-alive>
        <DisplayMail class="mail" v-if="toDisplay"></DisplayMail>
    </div>
</template>
<script>
import Inbox from "../views/Inbox.vue"
import Outbox from "../views/Outbox.vue"
import Trash from "../views/Trash.vue"
import Vue from 'vue';
import bus from "../eventbus"
import DisplayMail from "./DisplayMail"

export default {
    name: 'Content',
    components: {
        Inbox,
        Outbox,
        Trash,
        DisplayMail
    },
    computed: {
        toDisplay() {
            if(this.currentTabComponent == Inbox || 
                this.currentTabComponent == Outbox){
                return true
            }
            return false
        }
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
        bus.$on("changeView", title => {
            this.currentTabComponent = this.componentTitles[title]
            this.title = title
        })
    },
};
</script>
<style scoped>

</style>