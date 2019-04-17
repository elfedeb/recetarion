<template functional>
  <v-card>
    <v-card-text>
      <h4>{{ props.header }}</h4>
      <div class="embed-video-container">
        <iframe
          :src="props.url"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <p>{{ props.info }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "VideoPlayer",
  props: {
    header: {
      required: true,
      type: String
    },
    info: {
      required: true,
      type: String
    },
    url: {
      required: true,
      type: String
    }
  }
};
</script>