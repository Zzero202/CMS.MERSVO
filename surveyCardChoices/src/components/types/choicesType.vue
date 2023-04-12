<template>
 <q-card
 :class="'text-' + (choices.settings.alignment || 'center')"
 :style="{
   'background-color': 'transparent',
   'box-shadow': 'none',
   color: choices.color,
   width: '100%',
   height: '100%',
   display: 'block',
   overflow: 'hidden',
   paddingTop: 0,
   paddingBottom: 0,
   'font-weight': choices.settings.isBold ? 'bold' : '',
   'font-style': choices.settings.isItalic ? 'italic' : '',
   'font-family': choices.settings.font,
   'font-size': choices.settings.size + 'px',
 }"
 >
     <div class="row">
     <div
         :class="choices.direction === 'horizontal' ? 'col' : 'col-12'"
         v-for="item in choices.options"
         :key="item"
     >
         <div class="field-wrapper">
          <q-select v-model="select" :options="item.label" :val="item.value" :label="item.label" :style="{ color: choices.color || '' }"  />
         <q-checkbox
            v-if="
                dropdownValue == 'Multiple Answers'
              "
             v-model="select"
             :val="item.value"
             :label="item.label"
             :style="{ color: choices.color || '' }"
         />
         <q-radio
            v-if="
              dropdownValue == 'One Answer'
            "
            v-model="select"
            :val="item.value"
            :label="item.label"
            :style="{ color: choices.color || '' }"
          />
         </div>
     </div>
     </div>
 </q-card>
</template>

<script setup>
import { watch, ref } from 'vue'
const props = defineProps({
  choices: {
    type: [Object]
  },
  dropdownValue: {
    type: [String]
  }
})
const select = ref([])
watch(
  () => props.choices.options,
  () => {
    const { options } = props.choices
    if (options.length > 1) {
      const maxSelectedLength = Math.floor(options.length / 2)
      select.value = options
        .filter((o, i) => i < maxSelectedLength)
        .map((option) => option.value)
    } else if (options.length === 1) {
      select.value = [options[0].value]
    } else {
      select.value = []
    }
  }
)
</script>
<style lang="scss" scoped>
.field-wrapper {
  position: relative;
  .q-checkbox__inner {
    color: currentColor;
  }
}
</style>
