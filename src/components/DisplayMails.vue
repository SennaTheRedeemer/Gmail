<template>
    <BaseCard :title="title" class=" viewCard" :showFavoriteSwitch="true">
        <v-row class="list">
            <v-col class="col-12 list" :style='styleStr'>
                <v-list class="viewCard list overflow-y-auto fullHeight">
                    <v-list-item-group v-model="selected" class="overflow-y-auto list" >
                    <MailItem 
                    v-for="(mail, index) in items"
                    :key="index"
                    :mail="mail"
                    :trash="trash"
                    :inbox="inbox"
                >
                    </MailItem>
                    </v-list-item-group>
                </v-list>
            </v-col>
        </v-row>
    </BaseCard>
</template>
<script>
import BaseCard from "../components/BaseCard.vue";
import MailItem from "../components/MailItem.vue";


export default {
    name: 'DisplayMails',
    props: {
        items: Array,
        title: String,
        styleStr: String,
        trash: Boolean,
        inbox: Boolean
    },
    methods: {
    },
    computed: {
    },
    components: {
        BaseCard,
        MailItem
    },
     data: () => ({
        selected: null,
    }),
}
</script>
<style>
.list {
    height: inherit !important;
}
.fullHeight {
    max-height: 100% !important
}
</style>