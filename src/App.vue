<template>
    <app-nav/>
    <router-view/>
    <app-foot/>
</template>

<script>
import AppNav from './headfot/AppNav.vue'
import AppFoot from './headfot/AppFoot.vue'
export default {
  name: 'App',
  components: {
    AppNav,
    AppFoot
  }
}
</script>
<style scoped>
    
</style>

