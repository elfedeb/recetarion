<template>
    <div id="app">
        <router-view/>
    	<notifications group="app" />
    </div>
</template>

<script>
import { components } from 'aws-amplify-vue'

export default {
  name: 'app', 
  components: {
    ...components
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/main.scss";
</style>
