<template>
  <!-- <div class="overflow-auto">
    <table class="w-100" cellspacing="0">
      <thead>
        <tr>
          <th class="fw6 bb b--black-20 tl pb3 pr2 bg-white"></th>
          <th class="fw6 bb b--black-20 tl pb3 pr2 bg-white">Unit</th>
          <th class="fw6 bb b--black-20 tl pb3 pr2 bg-white">Cost</th>
          <th class="fw6 bb b--black-20 tl pb3 pr2 bg-white">qtyIn</th>
          <th class="fw6 bb b--black-20 tl pb3 pr2 bg-white">qtyOut</th>
        </tr>
      </thead>
      <tbody class="lh-copy">
        <tr
          class="recipe-item"
          v-for="(items) in items"
          :key="items.id"
          @click="editField('Edit', items.id)"
        >
          <th class="pv2 pr2 tl bb b--black-20">
            <i class="material-icons">edit</i>
            {{ items.name }}
            <small class="small">{{ items.description }}</small>
          </th>
          <td class="pv2 pr2 bb b--black-20">{{ items.unit }}</td>
          <td class="pv2 pr2 bb b--black-20">{{ items.cost }}</td>
          <td class="pv2 pr2 bb b--black-20">{{ items.qtyIn }}</td>
          <td class="pv2 pr2 bb b--black-20">{{ items.qtyOut }}</td>
        </tr>
      </tbody>
    </table>
  </div>-->
  <ul class="list pl0 mt0">
    <li
      class="flex items-center lh-copy pa3 ph0-l bb b--black-10"
      v-for="(items) in items"
      :key="items.id"
    >
      <img class="w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg">
      <div class="pl3 flex-auto">
        <span class="pv2 pr2 tl b b--black-20">{{ items.name }}</span>
        <small class="small">{{ items.description }}</small>

        <span class="pv2 pr2 b--black-20">{{ items.unit }}</span>
        <span class="pv2 pr2 b--black-20">{{ items.cost }}</span>
        <span class="pv2 pr2 b--black-20">{{ items.qtyIn }}</span>
        <span class="pv2 pr2 b--black-20">{{ items.qtyOut }}</span>
      </div>
      <div>
        <a @click="editField('Edit', items.id)" class="f6 link blue hover-dark-gray">
          <i class="material-icons">edit</i>
        </a>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "RecipesModule",
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

<style scoped>
.small {
  display: block;
  font-size: 80%;
  color: rgba(0, 0, 0, 0.55);
  font-weight: 500;
}
</style>
