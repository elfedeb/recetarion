<template>
  <div class="text-xs-center">
    <v-btn icon ripple @click="dialog = true">
      <v-icon color="grey lighten-1">edit</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" persistent max-width="360px">
      <div class="form-field">
        <div class="form-field__title-container">
          <h6 class="form-field__title">Edit {{ formattedFieldName }}</h6>
          <p v-if="desc" class="form-field__desc">{{ desc }}</p>
        </div>
        <div>
            <v-text-field
              v-model="newFieldValue"
              :type="type"
              :label="formattedFieldName"
              outline
              autofocus
              browser-autocomplete="off"
              class="form-field__input"
            ></v-text-field>
          <v-date-picker v-if="showDatePicker" v-model="newFieldValue" no-title class="form-field__input" />
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
        </v-card-actions>
      </div>
    </v-dialog>
  </div>
</template>  

<script>
export default {
  name: "FieldEditor",
  props: [
  	'type',
  	'field',
    'fieldValue',
    'desc'
  ],
  computed: {
    formattedFieldName() {
      let value = this.field.replace(/[-|_]+/, ' ');
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  data() {
    return {
      dialog: false,
      newFieldValue: null,
      showDatePicker: false
    };
  },
  mounted() {
    this.newFieldValue = this.fieldValue;
    if (this.type == 'date') this.showDatePicker = true;
  },
  methods: {
    save() {
      this.dialog = false;
      this.$emit('field-edited', { field: this.field, fieldValue: this.newFieldValue });
    }
  }
}
</script>