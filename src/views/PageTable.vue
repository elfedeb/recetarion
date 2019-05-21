<template>
  <div class="wrap">
    <article class="slab-stat-small" data-name="slab-stat-small">
      <div class="cf">
        <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
          <dd class="f6 fw4 ml0">Closed Issues</dd>
          <dd class="f3 fw6 ml0">1,024</dd>
        </dl>
        <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
          <dd class="f6 fw4 ml0">Open Issues</dd>
          <dd class="f3 fw6 ml0">993</dd>
        </dl>
        <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
          <dd class="f6 fw4 ml0">Next Release</dd>
          <dd class="f3 fw6 ml0">10-22</dd>
        </dl>
        <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
          <dd class="f6 fw4 ml0">Days Left</dd>
          <dd class="f3 fw6 ml0">4</dd>
        </dl>
        <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
          <dd class="f6 fw4 ml0">Favorite Cat</dd>
          <dd class="f3 fw6 ml0">All of Them</dd>
        </dl>
        <dl class="fl fn-l w-50 dib-l w-auto-l lh-title">
          <dd class="f6 fw4 ml0">App Downloads</dd>
          <dd class="f3 fw6 ml0">1,200</dd>
        </dl>
      </div>
    </article>

    <div class="gridder">
      <div class="mainer">
        <div>
          <h3>Menu</h3>
          <RecipesModule :items="rcdata.recipes"/>
        </div>
        <div>
          <h3>Ingredients</h3>
          <IngredientsModule :items="indata.ingredients"/>
        </div>
      </div>
      <div class="subser">
        <div>
          <h3>Workforce</h3>
          <WorkForceModule :items="wfdata.workforce"/>
        </div>
        <div>
          <h3>Equipment</h3>
          <EquipmentModule :items="eqdata.equipment"/>
        </div>
      </div>
    </div>
  </div>
</template>
  

<script>
import RecipesModule from "@/components/ui/RecipesModule.vue";
import IngredientsModule from "@/components/ui/IngredientsModule.vue";
import WorkForceModule from "@/components/ui/WorkForceModule.vue";
import EquipmentModule from "@/components/ui/EquipmentModule.vue";
import recipeData from "@/data/data-recipes.js";
import ingredientsData from "@/data/data-ingredients.js";
import workforceData from "@/data/data-workforce.js";
import equipmentData from "@/data/data-equipment.js";

export default {
  name: "Table",
  components: {
    EquipmentModule,
    IngredientsModule,
    WorkForceModule,
    RecipesModule
  },
  data() {
    return {
      rcdata: recipeData,
      indata: ingredientsData,
      wfdata: workforceData,
      eqdata: equipmentData
    };
  }
};
</script>

<style lang="scss" scoped>
.slab-stat-small {
  background: #fff;
  border-radius: 0.8rem;
  padding: 1rem 2rem;
  box-shadow: 0 7px 14px rgba(0, 0, 0, 0.18);
}

.gridder {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 3vw;
}
</style>
