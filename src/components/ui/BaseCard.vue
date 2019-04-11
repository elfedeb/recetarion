<template functional>
  <div :class="'card ' + props.cardSize">
    <div class="card-content">
      <slot name="cardContent"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseCard",
  props: {
    cardSize: {
      required: true,
      type: String,
      default: ''
    }
  }
};
</script>