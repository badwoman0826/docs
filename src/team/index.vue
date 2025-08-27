<script setup lang="ts">
import { VPTeamMembers } from "vitepress/theme";
import type { Props } from "./type";
const props = withDefaults(defineProps<Props>(), {
  size: "medium",
  members: () => [
    {
      avatar: "/docs/logo.jpg",
      name: "Flame",
      title: "Creator",
      links: [
        {
          icon: "github",
          link: "https://github.com/fslflame/Useful-knowledge-of-Flame",
        },
      ],
    },
    {
      avatar: "https://www.github.com/yyx990803.png",
      name: "Evan You",
      title: "Creator",
      links: [
        { icon: "github", link: "https://github.com/yyx990803" },
        { icon: "twitter", link: "https://twitter.com/youyuxi" },
      ],
    },
  ],
});
</script>

<template>
  <VPTeamMembers :members="props.members" />
</template>
