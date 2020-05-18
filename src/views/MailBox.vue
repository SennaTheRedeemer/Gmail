<template>
  <v-container>
    <v-display-mails v-if="getSelectedTitle == 'דואר זבל'" :items="items" :title="getSelectedTitle" :maxHeight="5000" :stretch="true"></v-display-mails>
    <v-display-mails v-else :items="items" :title="getSelectedTitle" :maxHeight="550"></v-display-mails>
    <v-display-mail v-if="getSelectedTitle != 'דואר זבל'" :mail="selectedMail"></v-display-mail>
  </v-container>
</template>

<script>
import DisplayMails from '../components/DisplayMails.vue'
import DisplayMail from '../components/DisplayMail.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'MailBox',
  components: {
    'v-display-mails': DisplayMails,
    'v-display-mail': DisplayMail
  },
  props: {
  },
  computed: {
    ...mapGetters(['getSelectedTitle'])

  },
  data: () => ({
      selectedMail: {
        id: 1,
        title: 'שלום אופיר',
        sent: '15 דקות',
        from: 'יובל דייזי',
        content: "הי אופיר מה קורה אתה בא היום"
      },
      items: [
        {
          icon: 'mdi-star',
          text: 'PLACEHOLDER',
        },
        {
          icon: 'mdi-star',
          text: 'PLACEHOLDER',
        },
        {
          icon: 'mdi-star',
          text: 'PLACEHOLDER',
        },
        {
          icon: 'mdi-star',
          text: 'PLACEHOLDER',
        },
        {
          icon: 'mdi-star',
          text: 'PLACEHOLDER',
        },
        {
          icon: 'mdi-star',
          text: 'PLACEHOLDER',
        },
      ],
    }),
};
</script>
<style scoped>
.trashBox {
  background-color: sandybrown !important;
}
</style>
