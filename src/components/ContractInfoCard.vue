<template>
  <v-card flat flex class="card" :class="[ { 'card__non-editable' : !editable } ]">
    <v-card-title>
      <v-flex>
        <h6 class="card-title">Home info</h6>
        <ul>
        	<li>
        		<span class="card__list-key">Account#</span><span class="card__list-value">{{ contract.account_number }}</span>
        	</li>
        	<li>
        		<span class="card__list-key">Activation date</span><span class="card__list-value">{{ contract.activation_date }}</span>
        	</li>
          <li>
            <span class="card__list-key">Community</span><span class="card__list-value">{{ contract.home.community.name }}</span>
          </li>
          <li>
            <span class="card__list-key">Location</span><span class="card__list-value">{{ contract.home.address }}</span>
          </li>
          <li>
            <span class="card__list-key">Panels</span><span class="card__list-value">{{ contract.home.pvsyst.number_of_panels }}</span>
          </li>
          <li>
            <span class="card__list-key">Price</span><span class="card__list-value"></span>
          </li>
          <li>
            <span class="card__list-key">Program type</span><span class="card__list-value">{{ contract.program_type }}</span>
          </li>
        </ul>
      </v-flex>
    </v-card-title>
  </v-card>	
</template>  

<script>
export default {
  name: "ContractInfoCard",
  props: [
  	'editable',
  	'contract',
  	'user'
  ],
  mounted() {
    console.log(this.editable);
  }
}
</script>