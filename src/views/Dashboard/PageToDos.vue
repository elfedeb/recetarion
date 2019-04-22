<template>
  <v-container fluid grid-list-lg>
    <v-layout column wrap>
      <div class="flex xs12 todo-pending">
        <v-card flat flex xs12>
          <v-card-title primary-title>
            <v-flex xs12>
              <h6 class="card-title">To-do</h6>
              <div>
                <v-list>
                  <v-list-tile v-for="item in todosItems" :key="item.title" @click="todoStatus">
                    <v-list-tile-action>
                      <v-icon>info</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                      <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </div>
            </v-flex>
          </v-card-title>
        </v-card>
      </div>
      <div class="flex xs12 todo-completed">
        <v-card flat flex xs12>
          <v-card-title primary-title>
            <v-flex xs12>
              <h6 class="card-title">Completed tasks</h6>
              <div>
                <v-list>
                  <v-list-tile v-for="item in doneItems" :key="item.title" @click="todoStatus">
                    <v-list-tile-action>
                      <v-icon>check_circle</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                      <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </div>
            </v-flex>
          </v-card-title>
        </v-card>
      </div>
    </v-layout>
  </v-container>
</template>
  

<script>
export default {
  name: "PageToDos",
  data() {
    return {
      todosItems: [
        { title: "Learn about your solar system and the SunStreet program" },
        { title: "Step 02" },
        { title: "Step 03" },
        { title: "Step 04" }
      ],
      doneItems: [
        { title: "Done Step 01" },
        { title: "Done Step 02" },
        { title: "Done Step 03" },
        { title: "Done Step 04" }
      ]
    };
  },
  methods: {
    todoStatus() {
      console.log("🧾 ✅Todo list clicked");
    }
  }
};
</script>

<style lang="scss" scoped>
main.v-content .v-list {
  margin: 0 -24px -8px -16px;
  padding: 0 8px;

  /deep/ > div {
    margin: 0 16px 0 -4px;
    .v-list__tile__action {
      width: 20px;
      margin: 0 -16px 0 0;
    }
    .v-list__tile {
      padding: 0 16px 0 8px;
    }
    .v-list__tile.v-list__tile--link.theme--light {
      padding: 0 0 0 8px;
    }
  }
}
</style>
