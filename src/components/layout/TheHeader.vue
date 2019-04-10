<template>
  <header class="header">
    <nav>
      <a class="burger-menu" href="#">
        <i class="material-icons dp48">menu</i>
      </a>
      <h3 class="title">Home</h3>
      <ul id="nav-mobile" class="hide-on-med-and-down">
        <li>
          <a href="#">
            <i class="material-icons dp48">notifications_none</i>
          </a>
        </li>
        <li>
          <a href="#">Sign out</a>
        </li>
        <li>
          <a href="#">
            <i class="material-icons dp48">more_vert</i>
          </a>
        </li>
      </ul>
      <!-- <div class="nav-wrapper">
      </div>-->
    </nav>
  </header>
</template>

<script>
export default { name: "TheHeader" };
</script>

<style lang="scss" scoped>
.header {
  z-index: 888;
}
nav {
  display: flex;
  align-items: center;
  .burger-menu {
    padding: 0 16px;
  }
  .title {
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: -0.065rem;
    margin: 0 0 0 16px;
  }
  ul {
    margin-left: auto;
    li {
      display: flex;
      padding: 0;
      &:not(:first-child):before {
        content: "";
        background: #2e3661;
        width: 1px;
        height: 23px;
        display: flex;
        align-self: center;
      }
    }
    a {
      font-size: 0.9rem;
      display: flex;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 0.035rem;
    }
  }
}
</style>
