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
        <choices-type :choices="choices" :dropdownValue="dropdown.value"
            v-if="
            dropdown.value == 'Multiple Answers' ||
            dropdown.value == 'One Answer'
          "/>
      </div>
      <div class="q-mt-md" :style="{ textAlign: button && button.style && button.style.textAlign }">
        <q-btn
          class="full-width"
          :style="{...button.style, textAlign: 'center' }"
          :label="button.text"
          @click="() => handleClickAction(button.actions || [])"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { useCardStore } from 'stores/card'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useActions } from 'src/composables/useActions'
import choicesType from './types/choicesType.vue'
const store = useCardStore()
const { model } = storeToRefs(store)
const { handleClickAction } = useActions()
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
// const teal = ref(title.value.text)
// const org = ref(label.value.text)
// const vall = computed(() => {
//   return model.choices
// })
const dropdown = computed(() => ({
  value: model.value?.dropdownSelect
}))
const button = computed(() => ({
  text: model.value?.btnLabel?.text,
  style: getTextSettings(model?.value.btnSettings || {}, model.value?.btnColor, model.value?.btnBg),
  actions: model?.value.btnActions
}))
const choices = computed(() => ({
  settings: model.value?.choiceFontSettings,
  color: model.value?.choiceColor,
  options: model.value?.choiceOptions,
  direction: model.value?.choiceDirection
}))
</script>

<style lang="scss" scoped>
.survey-card {
  h4 {
    &::first-letter {
      text-transform: capitalize;
    }
  }
}
</style>
