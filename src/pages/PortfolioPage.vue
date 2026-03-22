<template>
  <q-layout view="hHh Lpr fFf" class="portfolio-layout">
    <PageHeader
      :name="personalInfo.name"
      v-model:drawer="drawer"
      @scroll-to="scrollTo"
      @toggle-drawer="toggleDrawer"
    />

    <q-page-container>
      <q-page>
        <!-- Hero Section -->
        <HeroSection :personalInfo="personalInfo" @scroll-to="scrollTo" />

        <!-- Experience Section -->
        <ExperienceSection :experiences="experiences" />

        <!-- Skills Section -->
        <SkillSection :skills="skills" />

        <!-- Projects Section -->
        <ProjectSection :projects="projects" />

        <!-- Contact Section -->
        <ContactSection :personalInfo="personalInfo" />

        <!-- Footer -->
        <PageFooter :name="personalInfo.name" />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { experiences, projects, skills } from 'src/data/portfolioData';
import HeroSection from 'src/components/portfolio/HeroSection.vue';
import ExperienceSection from 'src/components/portfolio/ExperienceSection.vue';
import SkillSection from 'src/components/portfolio/SkillSection.vue';
import ProjectSection from 'src/components/portfolio/ProjectSection.vue';
import ContactSection from 'src/components/portfolio/ContactSection.vue';
import PageFooter from 'src/components/portfolio/PageFooter.vue';
import PageHeader from 'src/components/portfolio/PageHeader.vue';
import { nextTick, ref } from 'vue';

const personalInfo = {
  name: 'Rakesh Verma',
  title: 'Senior Mobile Architect | 10+ Years Experience',
  bio: 'Expert in native Android & iOS development, with deep expertise in cross-platform solutions including Flutter , React Native , Kotlin Multiplatform and Quasar',
  email: 'rakesh.parveen5@gmail.com',
  github: 'https://github.com/rakeshparveen5',
  linkedin: 'https://www.linkedin.com/in/rakesh-verma-3a1841109',
  stackoverflow: 'https://stackoverflow.com/users/5449220/rakesh-verma',
};

const drawer = ref(false);

const scrollTo = async (sectionId: string) => {
  drawer.value = false;

  await nextTick();

  setTimeout(() => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 200);
};

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};
</script>

<style scoped lang="scss">
.portfolio-layout {
  font-family: 'Poppins', 'Roboto', sans-serif;
}
</style>
