<template>
    <BaseCard :title="title" class=" viewCard">
        <v-row class="list">
            <v-col class="col-12 list" :style='styleStr'>
                <v-list class="viewCard list overflow-y-auto fullHeight">
                    <v-list-item-group v-model="selected" class="overflow-y-auto list" >
                    <Mail 
                    v-for="(mail, index) in items"
                    :key="index"
                    :mail="mail"
                    :trash="trash"
                   >
                    </Mail>
                    </v-list-item-group>
                </v-list>
            </v-col>
        </v-row>
    </BaseCard>
</template>
<script>
import BaseCard from "../components/BaseCard.vue";
import Mail from "../components/Mail.vue";


export default {
    name: 'DisplayMails',
    props: {
        items: Array,
        title: String,
        styleStr: String,
        trash: Boolean
    },
    methods: {
    },
    computed: {
    },
    components: {
        BaseCard,
        Mail
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