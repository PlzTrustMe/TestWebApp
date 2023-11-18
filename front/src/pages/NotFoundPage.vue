<script setup>
import {useRouter} from "vue-router";
import { BackButton} from "vue-tg";

const router = useRouter()

function handleBackButton() {
  router.back()
}
</script>

<template>
  <div class="text-2xl font-bold flex items-center justify-center h-screen">Not Found</div>

  <BackButton @click="handleBackButton" />
</template>