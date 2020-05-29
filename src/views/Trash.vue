<template>
  <v-container>
    <DisplayMails :items="items" title="דואר זבל" class="mails" :styleStr='"max-height: 76vh !important"'></DisplayMails>
  </v-container>
</template>

<script>
import DisplayMails from '../components/DisplayMails.vue'
import DisplayMail from '../components/DisplayMail.vue'
import { mapGetters } from 'vuex'
import trash from "../assets/trash.json"

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
      items:  trash
    }),
};
</script>
<style scoped>
.trashBox {
  background-color: sandybrown !important;
}
</style>
