<script setup lang="ts">
import Loading from '@/components/Loading.vue'
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <template v-if="Component">
      <transition name="fade" mode="in-out">
        <keep-alive>
          <suspense>
            <component :is="Component" :key="route.path" />
            <template #fallback>
              <Loading />
            </template>
          </suspense>
        </keep-alive>
      </transition>
    </template>
  </router-view>
</template>

<style scoped>
.logo {
  height: 144px;
  padding: 25px;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
