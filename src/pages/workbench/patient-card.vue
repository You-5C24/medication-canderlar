<template>
  <div
    class="p-24 bg-ffffff rounded-1 shadow w-192 cursor-pointer"
    @click="getPatientDetail"
  >
    <div class="flex items-center">
      <div
        class="w-36 h-36 border-3 rounded-full flex items-center justify-center font-semibold color-324280"
        :style="{ 'border-color': `#${props.info.randomColor}` }"
      >
        {{ props.info.firstName }}
      </div>
      <div
        class="ml-auto border-1 border-color-708ED7 border text-12 color-708ED7 rounded-1 px-4 py-6"
        @click.stop
      >
        看诊
      </div>
    </div>
    <div class="mt-16">
      <div class="flex items-center">
        <span class="text-18 font-semibold">{{ props.info.name }}</span>
        <span class="ml-auto flex-0-62 flex items-center">
          <span class="text-14 color-999999">性别:</span>
          <span class="text-14 ml-auto">{{ props.info.gender }}</span>
        </span>
      </div>
      <div class="flex items-center mt-4">
        <span class="text-14">ID{{ props.info.id }}</span>
        <span class="ml-auto flex-0-62 flex items-center">
          <span class="text-14 color-999999">年龄:</span>
          <span class="text-14 ml-auto">{{ props.info.age }}</span>
        </span>
      </div>
    </div>
    <div class="mt-24">
      <span class="text-14 color-999999">最近医嘱:</span>
      <div class="text-12 mt-8">
        {{ props.info.message }}
      </div>
    </div>
    <div class="mt-24 flex items-center">
      <ISymbol iconClass="icon-dianhua" />
      <span class="text-12">{{ props.info.tel }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { useRouter } from 'vue-router';
import { IPatientInfo } from './types/workbench';

export default {
  name: 'PatientCard'
};
</script>

<script setup lang="ts">
const props = defineProps({
  info: {
    type: Object as PropType<IPatientInfo>,
    default: () => ({})
  }
});

const router = useRouter();

const getPatientDetail = () => {
  router.push(`/patientRecords?id=${props.info.id}`);
};
</script>

<style lang="scss" scoped></style>
