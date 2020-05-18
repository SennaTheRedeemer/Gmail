<template>
    
    <v-mailcard :title="title" :maxHeight="maxHeight" >
        <v-responsive :min-height="minHeight">
            <v-list class="viewCard">
                <v-list-item-group v-model="model">
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
      </v-responsive>
    </v-mailcard>
    
</template>
<script>
import MailCard from "../components/MailCard.vue";

export default {
    name: 'DisplayMails',
    props: {
        items: Array,
        title: String,
        maxHeight: Number,
        stretch: Boolean
    },
    computed: {
        minHeight: function() {
            if (this.stretch) {
                return 844;
            }
            else {
                return 0;
            }
        }
    },
    components: {
        'v-mailcard': MailCard,
    },
     data: () => ({
        model: null,
    }),
}
</script>