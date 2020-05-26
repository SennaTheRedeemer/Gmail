<template>
  <v-container>
    <DisplayMails :items="items" title="דואר זבל" class="mails" style="height: 85vh !important"></DisplayMails>
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
  },
  data: () => ({
      items: [
        {
          title: 'Ofir',
          from: 'Bar',
          content: 'contentcontentcontentcontentcontentcontentcontentcontent',
          date: '2 Days ago'
        },
        {
          title: 'Ofir',
          from: 'Bar',
          content: 'contentcontentcontentcontentcontentcontentcontentcontent',
          date: '2 Days ago'
        },
        {
          title: 'Ofir',
          from: 'Bar',
          content: 'contentcontentcontentcontentcontentcontentcontentcontent',
          date: '2 Days ago'
        },
        {
          title: 'Ofir',
          from: 'Bar',
          content: 'contentcontentcontentcontentcontentcontentcontentcontent',
          date: '2 Days ago'
        },
        {
          title: 'Ofir',
          from: 'Bar',
          content: 'contentcontentcontentcontentcontentcontentcontentcontent',
          date: '2 Days ago'
        },
        {
          title: 'Ofir',
          from: 'Bar',
          content: 'contentcontentcontentcontentcontentcontentcontentcontent',
          date: '2 Days ago'
        },
        {
          title: 'Ofir',
          from: 'Bar',
          content: 'contentcontentcontentcontentcontentcontentcontentcontent',
          date: '2 Days ago'
        },
        {
          title: 'Ofir',
          from: 'Bar',
          content: 'contentcontentcontentcontentcontentcontentcontentcontent',
          date: '2 Days ago'
        },
        {
          title: 'Ofir',
          from: 'Bar',
          content: 'contentcontentcontentcontentcontentcontentcontentcontent',
          date: '2 Days ago'
        },
        {
          title: 'Ofir',
          from: 'Bar',
          content: 'contentcontentcontentcontentcontentcontentcontentcontent',
          date: '2 Days ago'
        },
        {
          title: 'Ofir',
          from: 'Bar',
          content: 'contentcontentcontentcontentcontentcontentcontentcontent',
          date: '2 Days ago'
        },
        {
          title: 'Ofir',
          from: 'Bar',
          content: 'contentcontentcontentcontentcontentcontentcontentcontent',
          date: '2 Days ago'
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
