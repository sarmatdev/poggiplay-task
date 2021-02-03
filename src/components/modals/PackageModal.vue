<template>
  <v-dialog
    max-width="600"
    v-model="openModal"
    persistent
    transition="dialog-bottom-transition"
  >
    <template>
      <v-card>
        <v-toolbar color="primary" class="mb-4" dark>
          <h1>
            {{ item.name }}
          </h1>
          <v-spacer></v-spacer>
          <h1>v {{ item.version }}</h1>
        </v-toolbar>
        <v-card-text>
          <p class="font-weight-regular text-subtitle-1">
            <span class="font-weight-bold">Description:</span>
            {{ item.description }}
          </p>
          <p class="font-weight-bold">Links:</p>
          <div>
            <v-btn
              text
              color="blue"
              v-for="(url, name) in item.links"
              :key="url"
              :href="url"
              target="_blank"
              >{{ name }}</v-btn
            >
          </div>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text @click="closeModal">Close</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  props: {
    openModal: {
      type: Boolean,
      default: true,
    },
    item: {
      type: Object,
    },
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
    linkName(links, i) {
      return Object.keys(links)[i]
    },
  },
  // computed: {
  //   linkName(link) {
  //     return link
  //   }
  // }
}
</script>

<style></style>
