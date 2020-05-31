<template>
    <div>
        <router-view></router-view>
        <DisplayMail class="mail" v-if="toDisplay"></DisplayMail>
        <Send></Send>
    </div>
</template>
<script>
import Inbox from "../views/Inbox.vue"
import Outbox from "../views/Outbox.vue"
import Trash from "../views/Trash.vue"
import Send from "../views/Send"
import Vue from 'vue';
import bus from "../eventbus"
import DisplayMail from "./DisplayMail"

const componentsIDs = {
    INBOX: 0,
    OUTBOX: 1,
    TRASH: 2,
    SEND: 3
}

export default {
    name: 'Content',
    components: {
        Inbox,
        Outbox,
        Trash,
        DisplayMail,
        Send
    },
    computed: {
        toDisplay() {
            if(this.currentTabComponent.component == Inbox || 
                this.currentTabComponent.component == Outbox){
                return true
            }
            return false
        }
    },
    methods: {
    },
    data: () => ({
        currentTabComponent: {
            title: 'דואר נכנס',
            component: Inbox,
            id: componentsIDs.INBOX
        },
        views: [
            {
                title: 'דואר נכנס',
                component: Inbox,
                id: componentsIDs.INBOX
            },
            {
                title: 'דואר יוצא',
                component: Outbox,
                id: componentsIDs.OUTBOX
            },
            {
                title: 'דואר זבל',
                component: Trash,
                id: componentsIDs.TRASH
            },
            {
                title: 'שלח הודעה',
                component: Send,
                id: componentsIDs.SEND
            },
        ],
    }),
    mounted() {
        bus.$on("changeView", title => {
            if(this.currentTabComponent && 
                this.views.find(view => view.title == title).id != componentsIDs.SEND) {
                this.currentTabComponent = this.views.find(view => view.title == title)
            }
            if(this.currentTabComponent == undefined){
                this.currentTabComponent = this.views.find(view => view.title == title)
            }
        })
    },
};
</script>
<style scoped>

</style>