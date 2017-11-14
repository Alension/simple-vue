<template>
  <section>
    <topTips :question_num=num></topTips>
    <div>难度:{{count}}<i @click="plus_difficulty" class="el-icon-circle-plus-outline"></i></div>
    <button @click="next_item">下一题</button>
  </section>
</template>

<script>
  import topTips from './../../components/top-tips'
  import {mapState} from 'vuex'
  import {PLUS_DIFF} from '../../store/mutation-types'
  export default {
    name: 'index',
    components: {
      topTips
    },
    data: function () {
      return {num: 1}
    },
    computed: mapState(['count']),
    methods: {
      next_item: function () {
        this.num += 1
      },
      plus_difficulty: function () {
        this.$store.commit(PLUS_DIFF, 2)
      }
    }
  }
</script>

<style scoped>

</style>
