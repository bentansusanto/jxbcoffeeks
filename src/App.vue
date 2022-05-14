<template>
    <app-nav/>
    <router-view/>
    <app-fot/>
</template>

<script>
import AppNav from './headfot/AppNav.vue'
import AppFot from './headfot/AppFoot.vue'

export default {
  name: 'App',
  components: {
    AppNav,
    AppFot
  }
}
</script>
<style scoped>
    
</style>

