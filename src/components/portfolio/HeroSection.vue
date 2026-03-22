<template>
  <section id="hero" class="hero-section">
    <div class="hero-overlay">
      <div class="container">
        <div class="row items-center justify-center" style="min-height: 90vh">
          <div class="col-12 col-md-8 text-center">
            <q-avatar size="150px" class="q-mb-lg">
              <img src="https://avatars.githubusercontent.com/rakeshparveen5" alt="Profile" />
            </q-avatar>
            <h1 class="text-white text-h2 q-mb-md">
              {{ props.personalInfo.name }}
            </h1>
            <div class="text-h5 text-white q-mb-md">
              {{ props.personalInfo.title }}
            </div>
            <div class="text-subtitle1 text-white q-mb-lg">
              {{ props.personalInfo.bio }}
            </div>
            <div class="q-gutter-md">
              <q-btn
                color="white"
                text-color="primary"
                label="View My Work"
                @click="emit('scroll-to', 'projects')"
                class="q-px-lg"
                rounded
              />
              <q-btn
                outline
                color="white"
                label="Contact Me"
                @click="emit('scroll-to', 'contact')"
                class="q-px-lg"
                rounded
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { PersonalInfo } from 'src/types/portfolio';

const props = defineProps<{
  personalInfo: PersonalInfo;
}>();

const emit = defineEmits<{
  (e: 'scroll-to', sectionId: string): void;
}>();
</script>

<style scoped lang="scss">
.hero-section {
  position: relative;
  background: linear-gradient(135deg, $primary 0%, #0f4d8b 100%);
  min-height: 90vh;

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
}
</style>
