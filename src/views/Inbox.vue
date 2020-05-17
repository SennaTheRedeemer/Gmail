<template>
  <v-container>
    <v-display-mails :items="items" :title="'דואר נכנס'"></v-display-mails>
    <v-display-mail :mail="selectedMail"></v-display-mail>
  </v-container>
</template>

<script>
import DisplayMails from '../components/DisplayMails.vue'
import DisplayMail from '../components/DisplayMail.vue'

export default {
  name: 'Inbox',
  components: {
    'v-display-mails': DisplayMails,
    'v-display-mail': DisplayMail
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
