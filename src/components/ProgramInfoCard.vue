  <template>
  <v-card flat flex>
    <v-card-title>
      <v-flex>
        <h6 class="card-title">Program info</h6>
          <div class="program-info" v-show="isPpa" >
            <ul>
              <li>No Upfront Costs</li>
              <li>20% Discounted Rate On Solar Energy Produced For The Next 20 Years</li>
              <li>Maintenance Included</li>
            </ul>
            <p class="caption">
              * All prices subject to change.
              <br>**SunStreet makes no representation regarding the availability or amount of any tax credit. Please consult your tax advisor.
            </p>
          </div>
      </v-flex>
    </v-card-title>
  </v-card>	
</template>  

<script>
export default {
  name: "ProgramInfoCard",
  props: [
  	'contract',
  ],
  computed: {
    isPpa() {
      return this.contract.program_type == 'PPA (20/20)';
    },
    isLease() {
      return contract.program_type == 'Lease';
    }
  }
}
</script>
<style lang="scss" scoped>
  ul {
    padding: 0 0 0 17px;
    margin-bottom: 15px;
  }
  li {
    margin: 6px 0;
  }
</style>