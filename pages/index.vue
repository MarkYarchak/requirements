<template>
  <v-layout
    justify-center
    wrap
    class="grid-width-block"
  >
    <div
      v-for="(requirementsBlock, reqIndex) in requirementsList"
      :key="reqIndex"
      class="pa-3"
    >
      <v-card
        width="100%"
        :color="cardTitleColor"
      >
        <v-card-title
          class="headline"
          :class="{ 'white--text': $vuetify.theme.dark }"
        >
          {{ requirementsBlock.title }}
        </v-card-title>
        <v-expansion-panels accordion>
          <v-expansion-panel
            v-for="(req, reqI) in requirementsBlock.list"
            :key="reqI"
          >
            <v-expansion-panel-header>
              <strong>{{ req.title }}</strong>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <OneRequirementDescription :description="req.description" />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </div>
  </v-layout>
</template>

<script>
import OneRequirementDescription from '../components/OneRequirementDescription';
import requirementsList from '../assets/requirementsList';

export default {
  components: { OneRequirementDescription },
  mixins: [requirementsList],
  computed: {
    cardTitleColor() {
      return this.$vuetify.theme.dark ? 'blue darken-2' : 'grey lighten-3';
    },
  },
};
</script>

<style scoped>
  .grid-width-block {
    display: grid;
    grid-auto-flow: row dense;
    grid-template-columns: repeat(auto-fill, minmax(320px, 440px));
    grid-template-rows: repeat( auto-fill, min-content);
    /*grid-template-rows: auto auto auto auto auto auto; !*min-content*!*/
  }
</style>
