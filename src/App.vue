<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from './common/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#app {
  position: absolute;
  height: 100%;
  width: 100%;
 
}
* {
  margin: 0;
  padding: 0;
}
/* .el-input {
  width: 80%;
} */
</style>
