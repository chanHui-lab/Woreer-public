<template lang="pug">
.forum-tabs.pt-2
  v-tabs.scroll-x(
    background-color="rgba(254, 184, 30, 0.1)"
    :color="$vuetify.theme.themes.light.primary"
    :style="scrollSize"
    grow
  )
    v-tab(v-for="item in tabs" :keys="item.id" @click="emitClick(item.name)") {{item.name}}
      
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import VueHorizontalList from 'vue-horizontal-list'
import WIcon from '../componenets-custom/WIcon.vue'

export default {
  name: 'ForumTabs',
  components: {
    VueHorizontalList,
    WIcon
  },
  props: {
  },
  data () {
    return {
      tabs: [
        { id: 1, name: 'Post'},
        { id: 2, name: 'Popular'},
        { id: 3, name: 'Announcement'},
        { id: 4, name: 'Webinar'}
      ]
    }
  },
  computed: {
    ...mapGetters({
      scrollSize: 'screen/getScrollXClass'
    }),
  },
  methods: {
    ...mapActions({
    }),
    emitClick (name) {
      this.$emit('click', name)
    }
  }
}
</script>

<style lang="scss" scoped>
:deep(.scroll-x) {
  overflow-x: auto !important;
  overflow-y: hidden;
}

:deep(.v-slide-group__prev) {
  min-width: 0px !important;
  flex: 0px;
}
</style>
