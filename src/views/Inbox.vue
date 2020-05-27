<template>
  <v-container>
    <DisplayMails :items="items" title="דואר נכנס" class="mails" :styleStr='"max-height: 45vh !important"'></DisplayMails>
  </v-container>
</template>

<script>
import DisplayMails from '../components/DisplayMails.vue'
import DisplayMail from '../components/DisplayMail.vue'
import { mapGetters } from 'vuex'
import inbox from "../assets/inbox.json"

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
  },
  data: () => ({
      items: inbox
    }),
};
</script>
<style>
.mail {
  height: 25vh !important
}
</style>
