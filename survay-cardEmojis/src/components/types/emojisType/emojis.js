export const emojis = [
  {
    img: 'icons/angry.png',
    value: 1,
    reactionImgHover: () => {
      emojis[0].img = 'icons/angry.png'
    },
    reactionImgOut: () => {
      emojis[0].img = 'icons/angry.png'
    }
  },
  {
    img: 'icons/sad.png',
    value: 2,
    reactionImgHover: () => {
      emojis[1].img = 'icons/sad.png'
    },
    reactionImgOut: () => {
      emojis[1].img = 'icons/sad.png'
    }
  },
  {
    img: 'icons/neutral.png',
    value: 3,
    reactionImgHover: () => {
      emojis[2].img = 'icons/neutral.png'
    },
    reactionImgOut: () => {
      emojis[2].img = 'icons/neutral.png'
    }
  },
  {
    img: 'icons/happy.png',
    value: 4,
    reactionImgHover: () => {
      emojis[3].img = 'icons/happy.png'
    },
    reactionImgOut: () => {
      emojis[3].img = 'icons/happy.png'
    }
  },
  {
    img: 'icons/excited.png',
    value: 5,
    reactionImgHover: () => {
      emojis[4].img = 'icons/excited.png'
    },
    reactionImgOut: () => {
      emojis[4].img = 'icons/excited.png'
    }
  }
]
