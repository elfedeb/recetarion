<template>
  <div>
    <v-card flat flex class="card" :class="[ { 'card__non-editable' : !editable } ]">
      <v-card-title>
        <v-flex>
          <h6 class="card-title">My info</h6>
          <ul>
            <li>
              <span class="card__list-key">Name</span><span class="card__list-value">{{ customer.name }} {{ customer.last_name }}</span>
              <span class="card__list-action"></span>
            </li>
            <li>
              <span class="card__list-key">Password</span><span class="card__list-value">*******</span>
              <span class="card__list-action">
                <v-btn icon ripple>
                  <v-icon color="grey lighten-1">edit</v-icon>
                </v-btn>
              </span>
            </li>
          	<li>
          		<span class="card__list-key">Email / Username</span><span class="card__list-value">{{ customer.email }}</span>
              <span class="card__list-action">
                <FieldEditor field="email" type="text" :fieldValue="fieldEditValue" @field-edited="fieldEdited" desc="Your email is also your username and you will be required to login again after changing it." />
              </span>
          	</li>
          	<li>
          		<span class="card__list-key">Phone</span><span class="card__list-value">{{ customer.phone }}</span>
              <span class="card__list-action">
                <FieldEditor field="phone" type="text" :fieldValue="fieldEditValue" @field-edited="fieldEdited" />
              </span>
          	</li>
            <li>
              <span class="card__list-key">Mobile Phone</span><span class="card__list-value">{{ customer.mobile_phone }}</span>
              <span class="card__list-action">
                <FieldEditor field="mobile_phone" type="text" :fieldValue="fieldEditValue" @field-edited="fieldEdited" />
              </span>
            </li>
          	<li>
          		<span class="card__list-key">Address</span><span class="card__list-value">TBD</span>
              <span class="card__list-action">
                <FieldEditor field="address" type="text" :fieldValue="fieldEditValue" @field-edited="fieldEdited" />
              </span>
          	</li>
          	<li>
          		<span class="card__list-key">Update by</span><span class="card__list-value">{{ customer.communication_method }}</span>
              <span class="card__list-action">
                <FieldEditor field="update_by" type="text" :fieldValue="fieldEditValue" @field-edited="fieldEdited"/>
              </span>
          	</li>
          </ul>
        </v-flex>
      </v-card-title>
    </v-card>
  </div>
</template>  

<script>
import FieldEditor from "@/components/formFields/FieldEditor.vue";

export default {
  name: "CustomerInfoCard",
  components: {
    FieldEditor
  },
  props: [
    'editable',
  	'customer',
  	'user'
  ],
  methods: {
    fieldEdited(e) {
      if (this.customer[e.field] !== e.fieldValue) {
        this.customer[e.field] = e.fieldValue;
        this.fieldEditValue = null;
        this.$emit('customer-updated');
      }
    }
  },
  data() {
    return {
      fieldEditValue: null,
    };
  }
}
</script>