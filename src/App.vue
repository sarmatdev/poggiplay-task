<template>
  <v-app>
    <Header />
    <v-main>
      <v-container>
        <base-search-bar
          solo
          v-model="query"
          @keyup.enter="findPackage"
          @click:append="findPackage"
          clearable
          placeholder="Search NPM (press /)"
          append-icon="mdi-magnify"
        />
        <PackagesList
          :loading="loading"
          :packages="packages"
          @showPackageInfo="showPackageModal"
        />
      </v-container>
    </v-main>
    <PackageModal
      :item="selectedPackage"
      :openModal="openPackageModal"
      @closeModal="closePackageModal"
    />
    <Footer />
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import PackagesList from './components/common/PackagesList'
import PackageModal from './components/modals/PackageModal'
export default {
  name: 'App',
  components: {
    PackagesList,
    PackageModal,
    Header,
    Footer,
  },
  data: () => ({
    query: '',
    selectedPackage: {},
    openPackageModal: false,
    loading: false,
  }),
  methods: {
    ...mapActions(['searchPackages']),
    findPackage() {
      if (!this.query) {
        return
      }
      this.loading = true
      this.searchPackages(this.query).finally(() => {
        this.loading = false
      })
    },
    showPackageModal(item) {
      this.openPackageModal = true
      this.selectedPackage = item.package
    },
    closePackageModal() {
      this.openPackageModal = false
    },
  },
  computed: {
    ...mapGetters(['packages']),
    // packages() {
    //   return this.$store.getters.packages
    // },
  },
}
</script>
