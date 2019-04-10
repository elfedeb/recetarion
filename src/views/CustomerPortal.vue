<template>
  <div class="customer-portal">
    <TheLayout>

  <template v-slot:header>
    <TheHeader />
  </template>

  <template v-slot:main>
    <MainAside />
    <MainSection />
  </template>

  <template v-slot:footer>
    <TheFooter />
  </template>

</TheLayout>
  </div>
</template>

<script>
// @ is an alias to /src
import TheLayout from '@/components/layout/TheLayout.vue'
import TheHeader from '@/components/layout/TheHeader.vue'
import MainAside from '@/components/layout/MainAside.vue'
import MainSection from '@/components/layout/MainSection.vue'
import TheFooter from '@/components/layout/TheFooter.vue'

export default {
  name: 'customer-portal',
  components: {
    TheLayout,
    TheHeader,
    MainAside,
    MainSection,
    TheFooter
  }
}
</script>
