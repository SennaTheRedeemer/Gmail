<template>
  <v-container>
    <DisplayMails :items="items" title="דואר יוצא" class="mails" :styleStr='"max-height: 45vh !important"'></DisplayMails>
    <DisplayMail class="mail" style="height: 25vh !important"></DisplayMail>
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
