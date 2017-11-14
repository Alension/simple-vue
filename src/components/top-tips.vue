<template>
  <section>
      <header class="top_tips">
          <span class="tip_num">第{{question_num}}题</span>
      </header>
      <div>

      </div>
  </section>
</template>

<script>
    export default {
      name: 'topTips',
      props: ['question_num'],
      data: function () {
        return {
          mes: 'hello'
        }
      }
    }
</script>
