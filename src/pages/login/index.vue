<template>
  <section>
      <div>
        <label for="user_name">用户名:</label>
        <input  id="user_name" name="user_name"/>
      </div>
      <div>
        <label for="password">密码:</label>
        <input  id="password" name="password"/>
      </div>
      <div>
          <button @click="login">登录</button>
          <button>取消</button>
      </div>
  </section>
</template>

<script>
  export default {
    name: 'login',
    methods: {
      login: function () {
        this.$router.push({path: '/question'})
      }
    }
  }
</script>
