<template>
    <BaseCard :title="title" class="overflow-y-auto viewCard">
        <v-container>
            <v-row class="">
                <v-col class="col-12">
                    <v-list class="viewCard">
                        <v-list-item-group v-model="selected">
                        <Mail 
                        v-for="(a, index) in items"
                        :key="index"
                        :mail="a">
                        </Mail>
                        </v-list-item-group>
                    </v-list>
                </v-col>
            </v-row>
        </v-container>
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