<template>
  <div class="package-list">
    <base-loader :loading="loading"></base-loader>
    <div class="text-center">
      <v-pagination
        v-if="paginatedData.length"
        v-model="currentPage"
        :length="contentPerPage"
      ></v-pagination>
    </div>
    <v-list flat dense three-line>
      <v-list-item-group multiple>
        <div v-for="(item, i) in paginatedData" :key="i">
          <v-list-item @click="showPackageInfo(item)">
            <template>
              <v-list-item-content>
                <v-list-item-title
                  class="d-flex justify-space-between text-bold"
                >
                  <span>{{ item.package.name }}</span>
                  <span>v. {{ item.package.version }}</span>
                </v-list-item-title>
                <v-list-item-subtitle
                  >{{ item.package.description }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-list-item>
          <v-divider></v-divider>
        </div>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'PackagesList',
  props: {
    packages: {
      type: Array,
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      currentPage: 1,
      contentPerPage: 10,
    }
  },
  watch: {
    packages() {
      this.currentPage = 1
    },
  },
  computed: {
    paginatedData() {
      return this.packages.slice(
        this.currentPage * this.contentPerPage - this.contentPerPage,
        this.currentPage * this.contentPerPage
      )
    },
  },
  methods: {
    showPackageInfo(item) {
      this.$emit('showPackageInfo', item)
    },
  },
}
</script>

<style lang="scss">
.package-list {
  position: relative;
  min-height: 600px;
  height: 100%;
}
</style>
