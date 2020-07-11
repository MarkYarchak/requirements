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
            <v-expansion-panel-header>{{ req.title }}</v-expansion-panel-header>
            <v-expansion-panel-content>{{ descriptionRenderer(req.description) }}</v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </div>
  </v-layout>
</template>

<script>
import MarkdownIt from 'markdown-it';

export default {
  data() {
    return {
      md: new MarkdownIt(),
      agreeWithRequirementsDialog: false,
      requirementsList: [
        {
          title: 'WEB development',
          list: [
            {
              title: 'NodeJS',
              description: '',
            },
            {
              title: 'TypeScript',
              description: '',
            },
            {
              title: 'Express',
              description: '',
            },
            {
              title: 'Passport',
              description: '',
            },
            {
              title: 'Vue',
              description: '',
            },
            {
              title: 'Angular',
              description: '',
            },
            {
              title: 'NuxtJS',
              description: '',
            },
            {
              title: 'SocketIO',
              description: '',
            },
            {
              title: 'NestJS',
              description: '',
            },
            {
              title: 'Apollo',
              description: '',
            },
            {
              title: 'RxJS',
              description: '',
            },
            {
              title: 'Mongoose',
              description: '',
            },
            {
              title: 'Lodash',
              description: '',
            },
            {
              title: 'React',
              description: '',
            },
            {
              title: 'CSS preprocessors',
              description: '',
            },
          ],
        },
        {
          title: 'Browser and dev-tools',
          list: [
            {
              title: 'Network',
              description: '',
            },
            {
              title: 'Console',
              description: '',
            },
            {
              title: 'Inspector (and debugger)',
              description: '',
            },
            {
              title: 'Service Workers',
              description: '',
            },
            {
              title: 'Local storage',
              description: '',
            },
            {
              title: 'Session storage',
              description: '',
            },
            {
              title: 'Cookies',
              description: '',
            },
            {
              title: 'IndexedDB',
              description: '',
            },
            {
              title: 'Load page performance (process)',
              description: '',
            },
          ],
        },
        {
          title: 'Auth',
          list: [
            {
              title: 'Authorization / Authentication',
              description: '',
            },
            {
              title: 'Validation',
              description: '',
            },
            {
              title: 'Token',
              description: '',
            },
            {
              title: 'OAuth2',
              description: '',
            },
            {
              title: 'Authorization header',
              description: '',
            },
            {
              title: 'JsonWebToken',
              description: '',
            },
            {
              title: 'Access and refresh tokens',
              description: '',
            },
            {
              title: 'Passport (JS etc.)',
              description: '',
            },
            {
              title: 'Bcrypt',
              description: '',
            },
          ],
        },
        {
          title: 'Server security',
          list: [
            {
              title: 'Production mode (no dev configurations)',
              description: '',
            },
            {
              title: 'TLS',
              description: '',
            },
            {
              title: 'Cors',
              description: '',
            },
            {
              title: 'Helmet + Disabled X-Powered-By header',
              description: '',
            },
            {
              title: 'CSRF',
              description: '',
            },
            {
              title: 'Rate limit',
              description: '',
            },
            {
              title: 'Virtual isolated environments / Containers',
              description: '',
            },
          ],
        },
        {
          title: 'Technologies and databases',
          list: [
            {
              title: 'MongoDB',
              description: '',
            },
            {
              title: 'MySQL',
              description: '',
            },
            {
              title: 'GraphQL',
              description: '',
            },
            {
              title: 'Shell/bash',
              description: '',
            },
            {
              title: 'File systems',
              description: '',
            },
            {
              title: 'Git',
              description: '',
            },
            {
              title: 'Docker',
              description: '',
            },
            {
              title: 'Kubernetes',
              description: '',
            },
            {
              title: 'Unit/e2e testing',
              description: '',
            },
          ],
        },
        {
          title: 'Protocols requirements',
          list: [
            {
              title: 'tcp/ip',
              description: '',
            },
            {
              title: 'http(s)',
              description: '',
            },
            {
              title: 'http/2',
              description: '',
            },
            {
              title: 'ws(s)',
              description: '',
            },
            {
              title: 'smtp',
              description: '',
            },
            {
              title: 'WebRTC',
              description: '',
            },
            {
              title: 'hls',
              description: '',
            },
            {
              title: 'ftp',
              description: '',
            },
          ],
        },
        {
          title: 'Principles and rules',
          list: [
            {
              title: 'SOLID',
              description: '',
            },
            {
              title: 'Material Design',
              description: '',
            },
            {
              title: 'Asynchronous programming',
              description: '',
            },
            {
              title: 'Object-oriented programming',
              description: '',
            },
            {
              title: 'Functional programming',
              description: '',
            },
            {
              title: 'Lint',
              description: '',
            },
          ],
        },
        {
          title: 'Mobile development',
          list: [
            {
              title: 'Kotlin',
              description: '',
            },
            {
              title: 'NativeScript',
              description: '',
            },
            {
              title: 'Dart',
              description: '',
            },
            {
              title: 'Flutter',
              description: '',
            },
          ],
        },
        {
          title: 'Desktop and plugins',
          list: [
            {
              title: 'Electron',
              description: '',
            },
            {
              title: 'C# .NET',
              description: '',
            },
            {
              title: 'Python',
              description: '',
            },
            {
              title: 'C/C++',
              description: '',
            },
          ],
        },
      ],
    };
  },
  computed: {
    cardTitleColor() {
      return this.$vuetify.theme.dark ? 'blue darken-2' : 'grey lighten-3';
    },
  },
  methods: {
    descriptionRenderer(description) {
      return this.md.render(description, { renderInline: true });
    },
  },
};
</script>

<style scoped>
  .grid-width-block {
    display: grid;
    grid-auto-flow: row dense;
    grid-template-columns: repeat(auto-fill, minmax(320px, 440px));
    grid-template-rows: repeat(auto-fill, minmax(min-content, min-content));
  }
</style>
