<template>
  <v-container>
    <v-display-mails :items="items" :title="getSelectedTitle" :maxHeight="maxHeight" :stretch="getSelectedTitle=='דואר זבל'"></v-display-mails>
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
    ...mapGetters(['getSelectedTitle']),
    maxHeight:  function (){
      if (this.getSelectedTitle == 'דואר זבל') {
          return 890
        }
      else {
        return 550
      }
    }
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
