<template>
  <v-container>
    <DisplayMails :items="items" :title="title" :size="size" :stretch="title=='דואר זבל'" class="mails" style="height: 55vh !important"></DisplayMails>
    <DisplayMail v-if="title != 'דואר זבל'" :mail="selectedMail" class="mail" style="height: 25vh !important"></DisplayMail>
  </v-container>
</template>

<script>
import DisplayMails from '../components/DisplayMails.vue'
import DisplayMail from '../components/DisplayMail.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'MailBox',
  components: {
    DisplayMails,
    DisplayMail
  },
  props: {
    title: String
  },
  computed: {
    //...mapGetters(['getSelectedTitle']), - for vuex
    size:  function (){
      if (this.title == 'דואר זבל') {
          return "large"
        }
      else {
        return "small"
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
