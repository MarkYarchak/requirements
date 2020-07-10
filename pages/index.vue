<template>
  <v-layout
    justify-center
    wrap
    class="grid-width-block"
  >
    <div
      v-for="(requirementsBlock, reqIndex) in requirementsList"
      :key="reqIndex"
      class="pa-3 card-center-height"
    >
      <v-card
        max-width="400"
        width="100%"
      >
        <v-card-title class="headline">
          {{ requirementsBlock.title }}
        </v-card-title>
        <div style="padding: 0 16px">
          <v-list dense>
            <ul>
              <li
                v-for="(req, reqI) in requirementsBlock.list"
                :key="reqI"
                style="min-height: 36px"
              >
                {{ req }}
              </li>
            </ul>
          </v-list>
        </div>
        <v-divider />
        <v-card-actions>
          <div style="flex-grow: 1;"></div>
          <v-btn
            color="blue"
            nuxt
            text
            block
            @click="agreeWithRequirementsDialog = true"
          >
            <v-icon left>mdi-open-in-new</v-icon>
            Learn more
          </v-btn>
          <div style="flex-grow: 1;"></div>
        </v-card-actions>
      </v-card>
    </div>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      agreeWithRequirementsDialog: false,
      requirementsList: [
        {
          title: 'WEB development',
          list: [
            'NodeJS',
            'TypeScript',
            'Express',
            'Passport',
            'Vue',
            'Angular',
            'NuxtJS',
            'SocketIO',
            'NestJS',
            'Apollo',
            'RxJS',
            'Mongoose',
            'Lodash',
            'React',
            'CSS preprocessors',
          ],
        },
        {
          title: 'Browser and dev-tools',
          list: [
            'Network',
            'Console',
            'Inspector (and debugger)',
            'Service Workers',
            'Local storage',
            'Session storage',
            'Cookies',
            'IndexedDB',
            'Load page performance (process)',
          ],
        },
        {
          title: 'Auth',
          list: [
            'Authorization / Authentication',
            'Validation',
            'Token',
            'OAuth2',
            'Authorization header',
            'JsonWebToken',
            'Access and refresh tokens',
            'Passport (JS etc.)',
            'Bcrypt',
          ],
        },
        {
          title: 'Server security',
          list: [
            'Production mode (no dev configurations)',
            'TLS',
            'Cors',
            'Helmet + Disabled X-Powered-By header',
            'CSRF',
            'Rate limit',
            'Virtual isolated environments / Containers',
          ],
        },
        {
          title: 'Technologies and databases',
          list: [
            'MongoDB',
            'MySQL',
            'GraphQL',
            'Shell/bash',
            'File systems',
            'Git',
            'Docker',
            'Kubernetes',
            'Unit/e2e testing',
          ],
        },
        {
          title: 'Protocols requirements',
          list: [
            'tcp/ip',
            'http(s)',
            'http/2',
            'ws(s)',
            'smtp',
            'WebRTC',
            'hls',
            'ftp',
          ],
        },
        {
          title: 'Principles and rules',
          list: [
            'SOLID',
            'Material Design',
            'Asynchronous programming',
            'Object-oriented programming',
            'Functional programming',
            'Lint',
          ],
        },
        {
          title: 'Mobile development',
          list: [
            'Kotlin',
            'NativeScript',
            'Dart',
            'Flutter',
          ],
        },
        {
          title: 'Desktop and plugins',
          list: [
            'Electron',
            'C# .NET',
            'Python',
            'C/C++',
          ],
        },
      ],
    };
  },
}
</script>

<style scoped>
  .card-center-height {
    height: calc(100% - 118px);
  }
  .full-width-block {
    display: flex;
    width: 100%;
    max-width: 440px;
  }

  .grid-width-block {
    display: grid;
    max-width: 100%;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(320px, 440px));
    grid-template-rows: repeat(auto-fill, minmax(min-content, min-content));
  }
</style>
