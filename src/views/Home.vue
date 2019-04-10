<template>
  <div class="home">
    <HelloWorld msg="Home of The Hello World"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/common/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
