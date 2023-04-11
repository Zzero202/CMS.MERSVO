<template>
    <div class="row justify-center">
  <div
    v-for="(emoji, index) in emojis"
    :key="index"
    class="col-1 text-center wholeEmoji q-py-md"
    @mouseover="emoji.reactionImgHover"
    @mouseleave="emoji.reactionImgOut"
  >
    <q-img :src="emoji.img" class="q-mb-xs" width="37px" />
    <p class="q-mb-xs bg-grey-3 value">{{ emoji.value }}</p>
  </div>
</div>
</template>

<script setup>
import { emojis } from './emojis'
</script>

<style lang="scss" scoped>
.wholeEmoji {
  transition: all 0.5s;
  cursor: pointer;
  .value {
    width: 50%;
    margin: auto;
  }
}
.wholeEmoji:hover {
  transform: scale(1.3);
  .reaction {
    color: #000 !important;
  }
  .value {
    color: rgb(73, 2, 135);
    font-weight: bold;
  }
}
</style>
