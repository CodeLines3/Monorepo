<!--  -->
<script lang="ts" setup>
import { Feature, Head, Info, Jobs, Projects, Edu } from "@/static/info";
import useRadar from "@/composables/useRadar";
import DoubuleTree from "@/components/DoubuleTree.vue";
import { ref } from "vue";
import me from "@/assets/me.jpg";
import { Button, Affix } from "ant-design-vue";
import useSaver from "@/composables/useSaver";

const head = !import.meta.env.DEV ? "http://localhost/me.jpg" : me;
const etcOption: object = useRadar(Feature);
const refPage: any = ref(null);

</script>

<template>
  <main ref="refPage" class="main">
    <Affix :offset-top="360" :target="() => refPage" class="affix">
      <Button type="primary" @click="useSaver(refPage)"> PDF </Button>
    </Affix>
    <!-- 联系本人 -->
    <div class="contact">
      <div v-for="(f, i) in Info" :key="i">
        <label>{{ f.label }}：</label>
        <span> {{ f.value }}</span>
      </div>
      <div class="row-span-2">
        <img :src="head" alt="小程序" />
      </div>
    </div>
    <div v-for="h in Head" :key="h.key">
      <div class="gradient">
        <span>{{ h.label }}</span>
      </div>
      <template v-if="h.key === 'edu'">
        <div class="edu">
          <template v-for="(e, i) in Edu">
            <a
              v-if="e.url"
              :href="e.url"
              target="_blank"
              rel="noopener noreferrer"
              >{{ e.value }}</a
            >
            <span v-else :key="i">{{ e.value }}</span>
          </template>
        </div>
      </template>
      <template v-else-if="h.key === 'worker'">
        <div class="wlb" v-for="w in Jobs" :key="w.id">
          <span class="bold">{{ w.time }}</span>
          <span class="bold">{{ w.firm }}</span>
          <span class="bold">{{ w.post }}</span>
          <ul class="wlb-d">
            <li v-for="(d, index) of w.description" :key="index">{{ d }}</li>
          </ul>
          <!-- <span>{{ w.depart }}</span> -->
        </div>
      </template>
      <template v-else-if="h.key === 'project'">
        <div class="wlb" v-for="w in Projects" :key="w.id">
          <span class="bold">{{ w.time }}</span>
          <span class="bold">{{ w.name }}</span>
          <!-- <p class="wlb-p bold">业务内容：</p> -->
          <ul class="wlb-d">
            <li v-for="(d, index) of w.desc" :key="index">{{ d }}</li>
          </ul>
          <p class="wlb-p bold">业绩：</p>
          <ul class="wlb-d">
            <li v-for="(r, index) of w.result" :key="index">{{ r }}</li>
          </ul>
        </div>
      </template>
      <template v-else-if="h.key === 'SAPS'">
        <DoubuleTree id="tree" />
      </template>
      <template v-else>
        <v-chart id="chart" class="mb-0" :option="etcOption" autoresize />
      </template>
    </div>
  </main>
</template>
<style scoped>
main {
  @apply relative min-h-[297mm] min-w-[210mm] w-[210mm] p-[1.5cm_1cm] shadow-[0_0_4px_#111] 
  text-[20px] m-auto;
  & > div:not(:last-of-type) {
    @apply mb-4;
  }
}
.affix {
  @apply absolute right-0;
}
:deep(.ant-affix) {
  @apply translate-x-full;
}

.gradient {
  @apply relative leading-[32px] mb-4 font-bold tracking-[16px] overflow-hidden;
  border-bottom: 2px solid #0ee;
  span,
  &::before {
    @apply inline-block text-center w-32;
  }
  &::before {
    content: "";
    @apply absolute top-0 w-36 h-full -left-4 bg-gradient-to-r to-[#0cc] via-transparent from-[#0cc] skew-x-12 z-[-1];
  }
}

.contact {
  @apply grid grid-cols-[auto_auto_100px] grid-flow-col;
  img {
    @apply w-[100px] h-[100px];
  }
}
.edu {
  @apply grid grid-cols-4;
}
.wlb {
  @apply grid grid-flow-row grid-cols-[1.5fr_2fr_1.5fr];
  &-p,
  &-d {
    @apply col-span-3;
  }
  &-bold {
    @apply text-[24px];
  }
}
.bold {
  @apply font-bold;
}

li {
  list-style: decimal;
  line-height: 32px;
}
#chart {
  @apply h-[400px];
}

#tree {
  @apply h-[460px];
}
</style>
