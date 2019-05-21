<template>
  <div class="ingredients-module">
    <ul>
      <li v-for="(items) in items" :key="items.id">
        <a class="ingredients f6 lh-title mv2" @click="editField('Edit', items.id)">
          <span class="dib b">
            {{ items.name }} — &nbsp;
            <small class="small">{{ items.description }}</small>
          </span>
          <span class="pv2 pr2 b--black-20">{{ items.unit }}</span>
          <span class="pv2 pr2 b--black-20">{{ items.cost }}</span>
          <span class="pv2 pr2 b--black-20">{{ items.qtyIn }}</span>
          <span class="pv2 pr2 b--black-20">{{ items.qtyOut }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "IngredientsModule",
  props: {
    items: {
      required: true,
      type: Array
    }
  },
  methods: {
    editField: function(message, id) {
      alert(message + " and " + id);
    }
  }
};
</script>

<style lang="scss">
.ingredients {
  cursor: pointer;
  &:hover {
    background: rgba($color: #000000, $alpha: 0.06);
  }
}
</style>

