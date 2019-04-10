<template>
  <div class="wrap">
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