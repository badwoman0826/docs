<!-- .vitepress/theme/Layout.vue -->
<template>
  <Layout
    ><template #home-hero-image>
      <img ref="imageSrcRef" class="image-src" src="/logo.jpg" />
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
const { Layout } = DefaultTheme;
import { nextTick, provide, ref, watch } from "vue";

const { isDark } = useData();
const imageSrcRef = ref<HTMLElement | null>(null);
const mouseEnter = () => {
  const previousSibling = imageSrcRef.value
    ?.previousElementSibling as HTMLElement;
  previousSibling.style.backgroundImage =
    "linear-gradient(-45deg, #bd34fe, #41d1ff)";
  previousSibling.style.transition = "all .3s";
  previousSibling.style.filter = "blur(40px)";
};
const mouseleave = () => {
  const previousSibling = imageSrcRef.value
    ?.previousElementSibling as HTMLElement;
  previousSibling.style.transition = "all .3s";
  previousSibling.style.backgroundImage =
    "linear-gradient(-45deg, #bd34fe, #41d1ff)";
  previousSibling.style.filter = "blur(0)";
};
watch(imageSrcRef, () => {
  if (!imageSrcRef.value) return;
  imageSrcRef.value.onmouseenter = mouseEnter;
  imageSrcRef.value.onmouseleave = mouseleave;
});
const enableTransitions = () =>
  "startViewTransition" in document &&
  window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

provide("toggle-appearance", async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value;
    return;
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )}px at ${x}px ${y}px)`,
  ];
  const doc = document as any;
  await doc.startViewTransition(async () => {
    isDark.value = !isDark.value;
    await nextTick();
  }).ready;

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: "ease-in",
      pseudoElement: `::view-transition-${isDark.value ? "old" : "new"}(root)`,
    }
  );
});
</script>
<style>
.image-src {
  border-radius: 50%;
}
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

.VPSwitchAppearance {
  width: 22px !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}
</style>
