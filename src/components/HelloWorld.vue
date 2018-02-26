<!--代码块 sc -->
<template>
  <div class="hello">
    <div class="logo">
      <h1>{{ msg }}</h1>
      <h2>Essential Links</h2>
      <img src="build/logo.png">
    </div>
    <ul>
      <li><router-link to="test">test</router-link></li>
      <li><router-link to="table">table</router-link></li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo{
  text-align: center;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
