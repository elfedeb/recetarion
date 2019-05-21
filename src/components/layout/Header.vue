<template>
  <header>
    <span class="brand-image">
      <svg class="svg-icon icn icon-pacman-icn-blk">
        <use xlink:href="@/assets/svg/icons-defs.svg#icon-pacman-icn-blk"></use>
      </svg>
    </span>
    <span class="user-name">
      Parguito Gourmet
      <small class="user-email">hola@parguitogourmet.com</small>
    </span>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>


<style lang="scss" scoped>
header {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.03);
}
.brand-image {
  height: 32px;
  width: 32px;
  display: inline-flex;
}
.user-name {
  font-size: 1.39rem;
  font-weight: 700;
  letter-spacing: 0.02rem;
  margin-left: 16px;
  line-height: 1.15;
}
.user-email {
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.016rem;
  color: #757575;
  display: block;
}
</style>