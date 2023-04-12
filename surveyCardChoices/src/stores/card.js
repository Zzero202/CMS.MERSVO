import { defineStore } from 'pinia'

export const useCardStore = defineStore('card', {
  state: () => ({
    inputs: [
      {
        name: 'sidebarBackground',
        value: '#efefef'
      },
      {
        name: 'titleText',
        value: {
          text: 'Title'
        }
      },
      {
        name: 'titleSettings',
        value: {
          isBold: false,
          isItalic: false,
          alignment: 'left',
          font: 'Arial',
          size: 24
        }
      },
      {
        name: 'titleColor',
        value: '#000000'
      },
      {
        name: 'labelText',
        value: {
          text: 'label'
        }
      },
      {
        name: 'labelSettings',
        value: {
          isBold: false,
          isItalic: false,
          alignment: 'left',
          font: 'Arial',
          size: 24
        }
      },
      {
        name: 'labelColor',
        value: '#000000'
      },
      {
        name: 'dropdownSelect',
        value: 'Dropdown'
      },
      {
        name: 'choiceDirection',
        value: 'vertical'
      },
      {
        name: 'choiceColor',
        value: ''
      },
      {
        name: 'choiceFontSettings',
        value: {
          size: 16,
          font: 'Arial',
          alignment: 'left',
          isItalic: false,
          isBold: true
        }
      },
      {
        name: 'choiceOptions',
        value: [
          {
            label: 'First Option',
            value: 'first-value'
          }
        ]
      },
      {
        name: 'btnSettings',
        value: {
          isBold: true,
          isItalic: false,
          alignment: 'left',
          font: 'Arial',
          size: 16
        }
      },
      {
        name: 'btnLabel',
        value: {
          text: 'Label'
        }
      },
      {
        name: 'btnColor',
        value: '#000000'
      },
      {
        name: 'btnBg',
        value: '#ffffff'
      },
      {
        name: 'btnActions',
        value: []
      }
    ],
    attachments: {}
  }),

  getters: {
    model: (state) => {
      const inputs = state.inputs || []
      return inputs.reduce((acc, input) => {
        if (
          input.name !== 'btnActions' &&
          input.name !== 'choiceOptions' &&
          Array.isArray(input.value)
        ) {
          acc[input.name] = state.attachments[input.name] || []
        } else {
          acc[input.name] = input.value
        }
        return acc
      }, {})
    }
  },

  actions: {
    updateModel (model) {
      this.inputs = model.inputs
      this.attachments = model.attachments
    }
  }
})
