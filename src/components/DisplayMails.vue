<template>
    <BaseCard :title="title" class="overflow-y-auto viewCard">
        <v-container>
            <v-row class="">
                <v-col class="col-12">
                    <v-list class="viewCard">
                        <v-list-item-group v-model="selected">
                        <v-list-item
                            v-for="(item, i) in items"
                            :key="i"
                        >
                            <v-list-item-icon>
                                <v-checkbox :on-icon="item.icon" :off-icon="item.icon" color="#FFD600"></v-checkbox>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title v-text="item.text"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
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
        stretch: Boolean
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