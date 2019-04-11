<template>
  <div class="application--wrap">
    <slot name="header"></slot>

    <main class="main">
      <slot name="main"></slot>
    </main>

    <slot name="footer"></slot>
  </div>
</template>

<script>
export default { name: "TheLayout" };
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex: 1 0 auto;
  background: #f2f2f2;
}
</style>