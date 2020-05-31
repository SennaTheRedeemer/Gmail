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
            if(this.$route.name != "Trash"){
                return true
            }
            return false
        }
    },
    methods: {
    },
    data: () => ({
    }),
};
</script>
<style scoped>

</style>