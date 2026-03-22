<template>
  <section id="skills" class="section-padding bg-grey-2">
    <div class="container">
      <h2 class="text-h3 text-center q-mb-xl">Technical Skills</h2>

      <div class="row q-col-gutter-lg">
        <div v-for="(category, catName) in groupedSkills" :key="catName" class="col-12 col-md-6">
          <q-card flat bordered class="skill-category-card">
            <q-card-section class="bg-primary text-white">
              <h3 class="text-h6 q-mb-none">{{ formatCategoryName(catName) }}</h3>
            </q-card-section>
            <q-card-section>
              <div class="row q-col-gutter-sm">
                <div v-for="skill in category" :key="skill.name" class="col-12 col-sm-6">
                  <div class="skill-item">
                    <div class="skill-info">
                      <span class="skill-name">{{ skill.name }}</span>
                      <span class="skill-years" v-if="skill.years">{{ skill.years }}+ yrs</span>
                    </div>
                    <q-linear-progress
                      :value="skill.years ? skill.years / 10 : 0.8"
                      color="primary"
                      class="q-mt-sm"
                    />
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Skill } from 'src/types/portfolio';
import { ref, computed } from 'vue';

const props = defineProps<{
  skills: Skill[];
}>();

const skills = ref(props.skills);

const groupedSkills = computed(() => {
  return skills.value.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category]!.push(skill);
      return acc;
    },
    {} as Record<string, Skill[]>,
  );
});

const formatCategoryName = (category: string): string => {
  const names: Record<string, string> = {
    native: '📱 Native Mobile',
    'cross-platform': '🔄 Cross-Platform',
    language: '💻 Languages',
    tools: '🛠️ Architecture & Tools',
    backend: '☁️ Backend & DevOps',
  };
  return names[category] || category;
};
</script>

<style scoped lang="scss">
.skill-category-card {
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
}

.skill-item {
  margin-bottom: 16px;

  .skill-info {
    display: flex;
    justify-content: space-between;
    font-size: 14px;

    .skill-years {
      color: #667eea;
      font-weight: 500;
    }
  }
}

:deep(.q-linear-progress) {
  height: 4px;
  border-radius: 2px;
}
</style>
