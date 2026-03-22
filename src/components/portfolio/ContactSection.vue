<template>
  <section id="contact" class="section-padding bg-primary text-white">
    <div class="container">
      <h2 class="text-h3 text-center q-mb-xl">Get In Touch</h2>
      <div class="row justify-center">
        <div class="col-12 col-md-6 text-center">
          <p class="text-subtitle1 q-mb-lg">
            I'm always interested in hearing about new opportunities, collaborations, or just having
            a chat about mobile development.
          </p>
          <div class="q-gutter-lg">
            <q-btn
              flat
              round
              size="lg"
              icon="fab fa-github"
              :href="props.personalInfo.github"
              target="_blank"
              class="text-white"
            />
            <q-btn
              flat
              round
              size="lg"
              icon="fab fa-linkedin"
              :href="props.personalInfo.linkedin"
              target="_blank"
              class="text-white"
            />
            <q-btn
              flat
              round
              size="lg"
              icon="fab fa-stack-overflow"
              :href="props.personalInfo.stackoverflow"
              target="_blank"
              class="text-white"
            />
          </div>
          <div class="q-mt-xl">
            <q-btn
              color="white"
              text-color="primary"
              label="Email Me"
              :href="`mailto:${props.personalInfo.email}`"
              rounded
              size="lg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PersonalInfo } from 'src/types/portfolio';

const props = defineProps<{
  personalInfo: PersonalInfo;
}>();
</script>

<style scoped lang="scss"></style>
