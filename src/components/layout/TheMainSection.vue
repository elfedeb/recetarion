<template>
  <section class="section" role="main">
    <slot></slot>
  </section>
</template>


<script>
export default {
  name: "TheMainSection"
};
</script>

<style lang="scss" scoped>
.section {
    flex: 1 auto;
    padding: 0.7rem 0.5rem;
    display: flex;
    flex-flow: column wrap;
  }
</style>
