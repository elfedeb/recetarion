<template>
  <section class="section" role="main">
    <slot></slot>
  </section>
</template>


<script>
export default {
  name: "MainSection"
};
</script>

<style lang="scss" scoped>
.section {
  background: rgba(243, 240, 235, 0.48);
  flex: 1 auto;
  padding: 1.5vw;
  display: flex;
  flex-flow: column wrap;
}
</style>
