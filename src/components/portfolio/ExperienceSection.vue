<template>
  <section id="experience" class="section-padding">
    <div class="container">
      <h2 class="text-h3 text-center q-mb-xl">Professional Experience</h2>
      <q-timeline color="primary">
        <q-timeline-entry
          v-for="(exp, index) in experiences"
          :key="index"
          :title="exp.title"
          :subtitle="`${exp.company} | ${exp.period} | ${exp.location}`"
          :icon="'work'"
          color="primary"
        >
          <q-card class="timeline-card">
            <q-card-section>
              <ul class="achievements-list">
                <li v-for="(achievement, idx) in exp.achievements" :key="idx">
                  {{ achievement }}
                </li>
              </ul>
              <div class="tech-stack">
                <q-chip
                  v-for="tech in exp.technologies"
                  :key="tech"
                  dense
                  outline
                  color="primary"
                  class="q-mr-sm q-mt-sm"
                >
                  {{ tech }}
                </q-chip>
              </div>
            </q-card-section>
          </q-card>
        </q-timeline-entry>
      </q-timeline>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Experience } from 'src/types/portfolio';

const props = defineProps<{
  experiences: Experience[];
}>();
</script>

<style scoped lang="scss">
.timeline-card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateX(8px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
}

.achievements-list {
  list-style: none;
  padding-left: 0;

  li {
    margin-bottom: 12px;
    padding-left: 24px;
    position: relative;

    &::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: $primary;
    }
  }
}

:deep(.q-timeline__subtitle) {
  font-size: 0.9rem;
  color: $primary;
}
</style>
