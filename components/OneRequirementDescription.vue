<template>
  <div v-html="descriptionContent"></div>
</template>

<script>
import MarkdownIt from 'markdown-it';

export default {
  name: 'OneRequirementDescription',
  props: {
    description: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      md: new MarkdownIt({
        breaks: true,
        linkify: true,
        typographer: true,
      }),
      agreeWithRequirementsDialog: false,
    };
  },
  computed: {
    descriptionContent() {
      return this.md.render(this.description || 'No description');
    },
  },
};
</script>

<style lang="" scoped>

</style>
