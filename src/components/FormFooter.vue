<template>
	<v-container class="complementary-links">
		<a href="#!" title="Help">Help</a>
		<a href="#!" title="Privacy">Privacy</a>
		<a href="#!" title="Terms">Terms</a>
	</v-container>
</template>
<script>
export default {
  name: 'FormFooter'
}
</script>
<style lang=scss scoped>
.complementary-links {
  text-align: right;
  padding: 16px;
  font-weight: 600;
  a {
    &:first-of-type {
      margin-left: auto;
    }
    margin: 0 0 0 24px;
    &:not(:hover),
    &:not(:focus) {
      text-decoration: none;
    }
  }
}
</style>