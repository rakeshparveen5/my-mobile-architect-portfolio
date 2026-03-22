<template>
  <section id="projects" class="section-padding">
    <div class="container">
      <h2 class="text-h3 text-center q-mb-xl">Featured Projects</h2>
      <div class="row q-col-gutter-lg">
        <div v-for="project in props.projects" :key="project.name" class="col-12 col-md-6">
          <q-card class="project-card" flat bordered>
            <q-card-section>
              <div class="row items-center">
                <div class="col">
                  <h3 class="text-h6 q-mb-none">{{ project.name }}</h3>
                  <div class="text-caption text-grey">{{ project.period }}</div>
                </div>
                <div class="col-auto">
                  <q-btn
                    v-if="project.pdpUrl"
                    flat
                    round
                    icon="fa fa-link"
                    :href="project.pdpUrl"
                    target="_blank"
                    color="dark"
                  />
                  <q-btn
                    v-if="project.playstoreUrl"
                    flat
                    round
                    icon="fab fa-google-play"
                    :href="project.playstoreUrl"
                    target="_blank"
                    color="dark"
                  />
                  <q-btn
                    v-if="project.appStoreUrl"
                    flat
                    round
                    icon="fab fa-app-store-ios"
                    :href="project.appStoreUrl"
                    target="_blank"
                    color="dark"
                  />
                  <q-btn
                    v-if="project.webUrl"
                    flat
                    round
                    icon="fas fa-globe"
                    :href="project.webUrl"
                    target="_blank"
                    color="dark"
                  />
                </div>
              </div>
            </q-card-section>
            <q-card-section>
              <p class="project-description">{{ project.description }}</p>
              <ul class="highlights-list">
                <li v-for="highlight in project.highlights" :key="highlight">
                  {{ highlight }}
                </li>
              </ul>
              <div class="tech-stack q-mt-md">
                <q-chip
                  v-for="tech in project.technologies"
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
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Project } from 'src/types/portfolio';

const props = defineProps<{
  projects: Project[];
}>();
</script>

<style scoped lang="scss">
.highlights-list {
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
      color: #667eea;
    }
  }
}

.project-card {
  transition: all 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  }
}

.project-description {
  color: #666;
  line-height: 1.6;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
}
</style>
