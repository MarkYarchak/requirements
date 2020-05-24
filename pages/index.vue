<template>
  <v-layout
    justify-center
    wrap
  >
    <div class="pa-3 full-width-block card-center-height">
      <v-card
        max-width="400"
        width="100%"
      >
        <v-card-title class="headline">
          WEB development
        </v-card-title>
        <v-card-text>
          <v-list dense>
            <v-list-item
              v-for="(req, reqI) in webRequirementsList"
              :key="reqI"
              dense
            >
              {{ req }}
            </v-list-item>
          </v-list>
        </v-card-text>
        <hr class="mb-2">
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            @click="agreeWithRequirementsDialog = true"
          >
            Agree
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </div>

    <div class="pa-3 full-width-block card-center-height">
      <v-card
        max-width="400"
        width="100%"
      >
        <v-card-title class="headline">
          Browser and dev-tools
        </v-card-title>
        <v-card-text>
          <v-list dense>
            <v-list-item
              v-for="(req, reqI) in browserRequirements"
              :key="reqI"
              dense
            >
              {{ req }}
            </v-list-item>
          </v-list>
        </v-card-text>
        <hr class="mb-2">
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            @click="agreeWithRequirementsDialog = true"
          >
            Agree
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </div>

    <div class="pa-3 full-width-block card-center-height">
      <v-card
        max-width="400"
        width="100%"
      >
        <v-card-title class="headline">
          Technologies and databases
        </v-card-title>
        <v-card-text>
          <v-list dense>
            <v-list-item
              v-for="(req, reqI) in technologiesRequirementsList"
              :key="reqI"
              dense
            >
              {{ req }}
            </v-list-item>
          </v-list>
        </v-card-text>
        <hr class="mb-2">
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            @click="agreeWithRequirementsDialog = true"
          >
            Agree
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </div>

    <div class="pa-3 full-width-block card-center-height">
      <v-card
        max-width="400"
        width="100%"
      >
        <v-card-title class="headline">
          Protocols requirements
        </v-card-title>
        <v-card-text>
          <v-list dense>
            <v-list-item
              v-for="(req, reqI) in networkAndProtocolsList"
              :key="reqI"
              dense
            >
              {{ req }}
            </v-list-item>
          </v-list>
        </v-card-text>
        <hr class="mb-2">
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            @click="agreeWithRequirementsDialog = true"
          >
            Agree
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </div>

    <div class="pa-3 full-width-block card-center-height">
      <v-card
        max-width="400"
        width="100%"
      >
        <v-card-title class="headline">
          Mobile development
        </v-card-title>
        <v-card-text>
          <v-list dense>
            <v-list-item
              v-for="(req, reqI) in mobileRequirementsList"
              :key="reqI"
              dense
            >
              {{ req }}
            </v-list-item>
          </v-list>
        </v-card-text>
        <hr class="mb-2">
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            @click="agreeWithRequirementsDialog = true"
          >
            Agree
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </div>

    <div class="pa-3 full-width-block card-center-height">
      <v-card
        max-width="400"
        width="100%"
      >
        <v-card-title class="headline">
          Desktop and plugins
        </v-card-title>
        <v-card-text>
          <v-list dense>
            <v-list-item
              v-for="(req, reqI) in desktopRequirementsList"
              :key="reqI"
              dense
            >
              {{ req }}
            </v-list-item>
          </v-list>
        </v-card-text>
        <hr class="mb-2">
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            @click="agreeWithRequirementsDialog = true"
          >
            Agree
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </div>

    <v-dialog
      v-model="agreeWithRequirementsDialog"
      width="300"
    >
      <v-card>
        <v-card-title>Thanks</v-card-title>
        <v-card-text>Thank you for requirements agreement</v-card-text>
        <v-card-actions>
          <v-btn
            text
            block
            @click="agreeWithRequirementsDialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      agreeWithRequirementsDialog: false,
      webRequirementsList: [
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
        'CSS preprocessors'
      ],
      mobileRequirementsList: [
        'Kotlin',
        'NativeScript',
        'Dart',
        'Flutter',
      ],
      desktopRequirementsList: [
        'Electron',
        'C# .NET',
        'Python',
        'C++',
      ],
      technologiesRequirementsList: [
        'MongoDB',
        'MySQL',
        'GraphQL',
        'SOLID',
        'Material Design',
        'Asynchronous programming',
        'Object-oriented programming',
        'Functional programming',
        'Lint',
        'Git',
      ],
      networkAndProtocolsList: [
        'tcp/ip',
        'http(s)',
        'http/2',
        'ws(s)',
        'smtp',
        'WebRTC',
        'hls',
        'ftp',
      ],
      browserRequirements: [
        'Network',
        'Console',
        'Inspector (and debugger)',
        'Service Workers',
        'Local storage',
        'Session storage',
        'Cookies',
        'IndexedDB',
        'Load page performance (process)'
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
</style>
