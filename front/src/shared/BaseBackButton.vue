<script setup>
import {useRouter} from "vue-router";
import {BackButton} from "vue-tg";

const router = useRouter()

function handleBackButton() {
  router.back()
}
</script>

<template>
  <BackButton @click="handleBackButton"/>
</template>
