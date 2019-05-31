<template>
  <div class="wrap">
    <h2 v-if="loading > 0">Loading...</h2>
    <article v-else class="slab-stat-small">
      <div class="cf">
        <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l" v-for="ing in ingredients" :key="ing.id">
          <dd class="f3 fw6 ml0">Name: {{ing.name}}</dd>
          <dd class="f6 fw4 ml0">Details: {{ing.description}}</dd>
        </dl>
      </div>
    </article>
  </div>
</template>


<script>
import gql from "graphql-tag";

const recipesQr = gql`
  query ingredients($id: ID!) {
    ingredients(where: { id: $id }) {
      id
      name
      description
    }
  }
`;

export default {
  name: "IngredientPage",
  data: () => ({
    loading: 0
  }),
  apollo: {
    $loadingKey: "loading",
    ingredients: {
      query: recipesQr,
      variables() {
        return {
          id: this.$route.params.slug
        };
      }
    }
  }
};
</script>

