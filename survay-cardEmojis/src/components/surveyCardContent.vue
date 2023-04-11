<template>
  <div :style="{'background-color': layout.background}" class="full-height">
    <div  class="flex column justify-between q-pa-lg" style="height: 100%">
      <div>
        <h4
          v-if="title && title.text"
          class="q-ma-none text-capitalize"
          :style="title.style">
          {{ title.text }}
        </h4>
        <h4
          v-if="label && label.text"
          class="q-mt-md q-mb-none text-capitalize"
          :style="label.style">
          {{ label.text }}
        </h4>
    </div>
      <div class="types q-mt-xl">
        <rating-type v-if="dropdown.value == 'Rating' " />
        <emojis-type v-if="dropdown.value == 'Emojis' " />
      </div>
    </div>
  </div>
</template>
<script setup>
import { useCardStore } from 'stores/card'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import RatingType from './types/ratingType.vue'
import EmojisType from './types/emojisType/emojisType.vue'

const store = useCardStore()
const { model } = storeToRefs(store)

const getTextSettings = (fontSettings, color, backgroundColor) => ({
  color,
  backgroundColor,
  fontSize: fontSettings.size ? `${fontSettings.size}px` : '',
  textAlign: fontSettings.alignment || 'inherit',
  fontWeight: fontSettings.isBold ? '700' : '',
  fontStyle: fontSettings.isItalic ? 'italic' : 'normal'
})

const layout = computed(() => ({
  background: model.value?.sidebarBackground || '#eee'
}))

const title = computed(() => ({
  text: model.value?.titleText?.text,
  style: getTextSettings(model?.value.titleSettings || {}, model.value?.titleColor)
}))

const label = computed(() => ({
  text: model.value?.labelText?.text,
  style: getTextSettings(model?.value.labelSettings || {}, model.value?.labelColor)
}))

const dropdown = computed(() => ({
  value: model.value?.dropdownSelect
}))
</script>
