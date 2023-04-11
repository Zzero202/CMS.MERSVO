<template>
  <div class="media" :class="{'media--has-bg': media && media.file}">
    <div class="media__content">
      <template v-if="media && media.file">
        <video v-if="media.mimeType === 'video'" class="fit" :muted="media.isMuted" autoplay :loop="media.hasToPlayback">
          <source :src="media.file">
        </video>
        <div v-if="media.mimeType === 'application'" class="q-video fit">
          <iframe :src="media.file" class="display-3 fill-height" width="100%" height="100%" name="frame" sandbox="allow-same-origin allow-scripts allow-scripts" />
        </div>
        <q-img v-if="media.mimeType === 'image'" width="100%" height="100%" :src="media.file" />
      </template>
      <template v-else>
        <div class="defaultMedia">
          <q-icon size="md" color="grey-8" name="add_photo_alternate" />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useCardStore } from 'stores/card'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const store = useCardStore()
const { model } = storeToRefs(store)

const media = computed(() => ({
  file: model.value?.mediaFile[0]?.srcURL,
  isMuted: model.value?.muteVideo,
  hasToPlayback: model.value?.playbackVideo,
  mimeType: (model.value?.mediaFile[0]?.mimetype || '').split('/')[0]
}))
</script>

<style lang="scss">
.media {
  position: relative;
  overflow: hidden;

  &--has-bg {
    background-color: #000;
  }

  &__content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
