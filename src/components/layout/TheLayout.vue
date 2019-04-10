<template>
  <div class="wrap">
    <header class="header">
      <slot name="header"></slot>
    </header>
    <main class="main">
      <slot name="main"></slot>
    </main>

    <slot name="footer"></slot>
 
  </div>
</template>

<script>
    export default { name: "TheLayout" };
</script>