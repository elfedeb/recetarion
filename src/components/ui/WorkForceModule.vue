<template>
  <div class="workforce-module">
    <ul>
      <li v-for="(items) in items" :key="items.id">
        <!-- <a class="workforce f6 lh-title mv2" @click="editField('Edit', items.id)"> -->
          <router-link :to="`/ingredient/${items.id}`" class="workforce f6 lh-title mv2">
          <span class="dib b">{{ items.name }} — &nbsp;</span>
          <!-- <dd class="ml0 gray">{{ items.description }}</dd> -->
          <span class="dib ml0 gray">${{ items.description }}</span>
          </router-link>
        <!-- </a> -->
      </li>
    </ul>
    <!-- <li v-for="igr in ingredients" :key="igr.id">
          <router-link :to="`/ingredient/${igr.id}`" class="link">
            <div class="placeholder"></div>
            <h3>{{igr.name}}</h3>
            <p>{{igr.description}}</p>
          </router-link>
        </li> -->
  </div>
</template>



<script>
export default {
  name: "WorkforceModule",
  props: {
    items: {
      required: true,
      type: Array
    }
  }
};
</script>

<style lang="scss">
.workforce {
  cursor: pointer;
  &:hover {
    background: rgba($color: #000000, $alpha: 0.06);
  }
}
</style>

