<template>
  <q-header elevated class="bg-primary text-white glossy">
    <q-toolbar>
      <q-toolbar-title class="text-h6">
        {{ props.name }}
      </q-toolbar-title>
      <q-space />
      <div class="gt-sm">
        <q-btn flat label="Experience" @click="emit('scroll-to', 'experience')" />
        <q-btn flat label="Skills" @click="emit('scroll-to', 'skills')" />
        <q-btn flat label="Projects" @click="emit('scroll-to', 'projects')" />
        <q-btn flat label="Contact" @click="emit('scroll-to', 'contact')" />
      </div>
      <q-btn flat round icon="menu" class="lt-md" @click="emit('toggle-drawer')" />
    </q-toolbar>
  </q-header>

  <q-drawer v-model="drawerModel" side="right" overlay bordered class="bg-grey-1">
    <q-list>
      <q-item clickable v-close-popup @click="emit('scroll-to', 'hero')">
        <q-item-section>Home</q-item-section>
      </q-item>
      <q-item clickable v-close-popup @click="emit('scroll-to', 'experience')">
        <q-item-section>Experience</q-item-section>
      </q-item>
      <q-item clickable v-close-popup @click="emit('scroll-to', 'skills')">
        <q-item-section>Skills</q-item-section>
      </q-item>
      <q-item clickable v-close-popup @click="emit('scroll-to', 'projects')">
        <q-item-section>Projects</q-item-section>
      </q-item>
      <q-item clickable v-close-popup @click="emit('scroll-to', 'contact')">
        <q-item-section>Contact</q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{ name: string; drawer: boolean }>();

const emit = defineEmits<{
  (e: 'update:drawer', value: boolean): void;
  (e: 'scroll-to', sectionId: string): void;
  (e: 'toggle-drawer'): void;
}>();

const drawerModel = computed({
  get: () => props.drawer,
  set: (val) => emit('update:drawer', val),
});
</script>

<style scoped lang="scss"></style>
