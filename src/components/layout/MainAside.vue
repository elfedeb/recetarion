<template>
  <aside class="aside">
    <span class="brand-image">
      <svg class="svg-icon sunstreet-svg" viewBox="0 0 50 50" aria-hidden="true">
        <path
          d="M2.74463162,-3.55271368e-15 L12.601903,-3.55271368e-15 L15.3465347,2.74463162 L15.3465347,12.601903 L12.601903,15.3465347 L2.74463162,15.3465347 L4.4408921e-16,12.601903 L0,2.74463162 L2.74463162,-3.10862447e-15 Z M2.74463162,17.3267327 L12.601903,17.3267327 L15.3465347,20.0713643 L15.3465347,29.9286357 L12.601903,32.6732673 L2.74463162,32.6732673 L4.4408921e-16,29.9286357 L0,20.0713643 L2.74463162,17.3267327 Z M20.0713643,-3.55271368e-15 L29.9286357,-3.55271368e-15 L32.6732673,2.74463162 L32.6732673,12.601903 L29.9286357,15.3465347 L20.0713643,15.3465347 L17.3267327,12.601903 L17.3267327,2.74463162 L20.0713643,-3.10862447e-15 Z M20.0713643,17.3267327 L29.9286357,17.3267327 L32.6732673,20.0713643 L32.6732673,29.9286357 L29.9286357,32.6732673 L20.0713643,32.6732673 L17.3267327,29.9286357 L17.3267327,20.0713643 L20.0713643,17.3267327 Z M37.398097,-3.55271368e-15 L47.2553684,-3.55271368e-15 L50,2.74463162 L50,12.601903 L47.2553684,15.3465347 L37.398097,15.3465347 L34.6534653,12.601903 L34.6534653,2.74463162 L37.398097,-3.10862447e-15 Z M37.398097,17.3267327 L47.2553684,17.3267327 L50,20.0713643 L50,29.9286357 L47.2553684,32.6732673 L37.398097,32.6732673 L34.6534653,29.9286357 L34.6534653,20.0713643 L37.398097,17.3267327 Z M2.74463162,34.6534653 L12.601903,34.6534653 L15.3465347,37.398097 L15.3465347,47.2553684 L12.601903,50 L2.74463162,50 L4.4408921e-16,47.2553684 L0,37.398097 L2.74463162,34.6534653 Z M20.0713643,34.6534653 L29.9286357,34.6534653 L32.6732673,37.398097 L32.6732673,47.2553684 L29.9286357,50 L20.0713643,50 L17.3267327,47.2553684 L17.3267327,37.398097 L20.0713643,34.6534653 Z M37.398097,34.6534653 L47.2553684,34.6534653 L50,37.398097 L50,47.2553684 L47.2553684,50 L37.398097,50 L34.6534653,47.2553684 L34.6534653,37.398097 L37.398097,34.6534653 Z"
          id="Sunstreet-SVG"
          fill="#182251"
        ></path>
      </svg>
    </span>
    <span class="user-name">Robert Montgomery</span>
    <span class="user-email">rmontgomery@gmail.com</span>
    <hr>
    <v-list>
      <v-list-tile v-for="item in items" :key="item.title" @click="listLink">
        <v-list-tile-action>
          <v-icon v-if="item.icon">{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </aside>
</template>

<script>
export default {
  name: "MainAside",
  data() {
    return {
      items: [
        { icon: "home", title: "Home" },
        { icon: "check_circle", title: "To-do" },
        { icon: "account_circle", title: "Profile" },
        { icon: "help", title: "Help" }
      ]
    };
  },
  methods: {
    listLink: function(event) {
      console.log("Hello 👋");
    }
  }
};
</script>

<style lang="scss" scoped>
.aside {
  flex: 0 0 257px;
  display: flex;
  flex-flow: column wrap;
  background: #fff;
  border-right: 1px solid #e6e6e6;
  .brand-image {
    height: 48px;
    width: 48px;
    margin: 40px 0 16px 16px;
  }
  .user-name {
    font-size: 1.39rem;
    font-weight: 700;
    letter-spacing: 0.02rem;
    margin-left: 16px;
    line-height: 1.3;
  }
  .user-email {
    margin-left: 16px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.016rem;
    margin-bottom: 12px;
    color: #757575;
  }
  .v-list > div {
    margin: 10px;
  }
}
</style>

