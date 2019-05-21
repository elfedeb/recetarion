<template>
  <div class="equipment-module">
    <ul>
      <li v-for="(items) in items" :key="items.id">
        <a class="equipment f6 lh-title mv2" @click="editField('Edit', items.id)">
          <span class="dib b">{{ items.name }} — &nbsp;</span>
          <!-- <dd class="ml0 gray">{{ items.description }}</dd> -->
          <span class="dib ml0 gray">${{ items.rate }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "EquipmentModule",
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
.equipment {
  cursor: pointer;
  &:hover {
    background: rgba($color: #000000, $alpha: 0.06);
  }
}
</style>

