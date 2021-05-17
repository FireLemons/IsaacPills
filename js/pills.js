const pillEffects = [
  { effect: '???(Curse of the Maze)', added: 'afterbirth' },
  { effect: 'Addicted', added: 'afterbirth' },
  { effect: 'Friends Till The End!', added: 'afterbirth' },
  { effect: 'Infested!', added: 'afterbirth' },
  { effect: 'Infested?', added: 'afterbirth' },
  { effect: 'One Makes You Small', added: 'afterbirth' },
  { effect: 'One Makes You Larger', added: 'afterbirth' },
  { effect: 'Percs', added: 'afterbirth' },
  { effect: 'Power Pill', added: 'afterbirth' },
  { effect: 'Re-Lax', added: 'afterbirth' },
  { effect: 'Retro Vision', added: 'afterbirth' },
  { effect: 'Feels like I\'m walking on sunshine!', added: 'afterbirthPlus' },
  { effect: 'Gulp!', added: 'afterbirthPlus' },
  { effect: 'Horf!', added: 'afterbirthPlus' },
  { effect: 'I\'m Drowsy...', added: 'afterbirthPlus' },
  { effect: 'I\'m Excited!!!', added: 'afterbirthPlus' },
  { effect: 'Something\'s wrong...', added: 'afterbirthPlus' },
  { effect: 'Vurp!', added: 'afterbirthPlus' },
  { effect: 'X-Lax', added: 'afterbirthPlus' },
  { effect: 'Experimental Pill', added: 'antibirth' },
  { effect: 'Shot Speed Down', added: 'antibirth' },
  { effect: 'Shot Speed Up', added: 'antibirth' },
  { effect: '48 Hour Energy', added: 'default' },
  { effect: 'Amnesia', added: 'default' },
  { effect: 'Bad Gas', added: 'default' },
  { effect: 'Bad Trip', added: 'default' },
  { effect: 'Balls of Steel', added: 'default' },
  { effect: 'Bombs Are Key', added: 'default' },
  { effect: 'Explosive Diarrhea', added: 'default' },
  { effect: 'Full Health', added: 'default' },
  { effect: 'Health Down', added: 'default' },
  { effect: 'Health Up', added: 'default' },
  { effect: 'Hematemesis', added: 'default' },
  { effect: 'I Can See Forever', added: 'default' },
  { effect: 'I Found Pills', added: 'default' },
  { effect: 'Lemon Party', added: 'default' },
  { effect: 'Luck Down', added: 'default' },
  { effect: 'Luck Up', added: 'default' },
  { effect: 'Paralysis', added: 'default' },
  { effect: 'Pheromones', added: 'default' },
  { effect: 'Puberty', added: 'default' },
  { effect: 'Pretty Fly', added: 'default' },
  { effect: 'Range Down', added: 'default' },
  { effect: 'Range Up', added: 'default' },
  { effect: 'R U a Wizard?', added: 'default' },
  { effect: 'Speed Down', added: 'default' },
  { effect: 'Speed Up', added: 'default' },
  { effect: 'Tears Down', added: 'default' },
  { effect: 'Tears Up', added: 'default' },
  { effect: 'Telepills', added: 'default' }
]

const rebirthEffects = pillEffects.filter((effect) => {
  return effect.added === 'default'
}).map((effect) => {
  return effect.effect
})

const antibirthEffects = pillEffects.filter((effect) => {
  const added = effect.added

  return added === 'default' || added === 'antibirth'
}).map((effect) => {
  return effect.effect
})

const afterbirthEffects = pillEffects.filter((effect) => {
  const added = effect.added

  return added === 'default' || added === 'afterbirth'
}).map((effect) => {
  return effect.effect
})

const afterbirthPlusEffects = pillEffects.filter((effect) => {
  const added = effect.added

  return added === 'default' || added === 'afterbirth' || added === 'afterbirthPlus'
}).map((effect) => {
  return effect.effect
})

const repentanceEffects = pillEffects.map((effect) => {
  return effect.effect
})

const pills = new Vue({
  el: '#main',
  data: {
    pillEffects: [],
    pillSlots: [],
    pillSlotsDefault: [
      {
        alt: 'Solid Blue Pill',
        src: 'Images/Pills/Blue.png',
        effect: ''
      },
      {
        alt: 'Dark-Blue Top with Aqua Bottom',
        src: 'Images/Pills/BlueCyan.png',
        effect: ''
      },
      {
        alt: 'Solid Orange Pill',
        src: 'Images/Pills/Orange.png',
        effect: ''
      },
      {
        alt: 'Solid White Pill',
        src: 'Images/Pills/White.png',
        effect: ''
      },
      {
        alt: 'Spotted Red on Top with Red Bottom',
        src: 'Images/Pills/RedSpecled.png',
        effect: ''
      },
      {
        alt: 'Spotted Yellow on Top with White Bottom',
        src: 'Images/Pills/SpottedWhite.png',
        effect: ''
      },
      {
        alt: 'White Top with Blue Bottom',
        src: 'Images/Pills/WhiteBlue.png',
        effect: ''
      },
      {
        alt: 'Pink Top with Red Bottom',
        src: 'Images/Pills/WhiteRed.png',
        effect: ''
      },
      {
        alt: 'Yellow Top with Orange Bottom',
        src: 'Images/Pills/YellowOrange.png',
        effect: ''
      }
    ],
    pillSlotsExtended: [
      {
        alt: 'White Top with Black Bottom',
        src: 'Images/Pills/AfterBirth/Black_White.png',
        effect: ''
      },
      {
        alt: 'Black Top with Yellow Bottom',
        src: 'Images/Pills/AfterBirth/Black_Yellow.png',
        effect: ''
      },
      {
        alt: 'White Top with Cyan Bottom',
        src: 'Images/Pills/AfterBirth/White_Cyan.png',
        effect: ''
      },
      {
        alt: 'White Top with Yellow Bottom',
        src: 'Images/Pills/AfterBirth/White_Yellow.png',
        effect: ''
      }
    ],
    version: 'Afterbirth+'
  },
  watch: {
    version () {
      this.save()
    }
  },
  methods: {
    clear () {
      this.pillSlots.forEach((pillSlot) => {
        pillSlot.effect = ''
      })
    },
    PHD () {
      this.pillSlots.forEach((pillSlot) => {
        switch (pillSlot.effect) {
          case 'Amnesia':
            pillSlot.effect = 'I Can See Forever'
            break
          case 'Bad Trip':
            pillSlot.effect = 'Balls of Steel'
            break
          case 'Health Down':
            pillSlot.effect = 'Health Up'
            break
          case 'Luck Down':
            pillSlot.effect = 'Luck Up'
            break
          case 'Range Down':
            pillSlot.effect = 'Range Up'
            break
          case 'Shot Speed Down':
            pillSlot.effect = 'Shot Speed Up'
            break
          case 'Speed Down':
            pillSlot.effect = 'Speed Up'
            break
          case 'Tears Down':
            pillSlot.effect = 'Tears Up'
            break
        }

        if (this.version === 'Afterbirth+') {
          switch (pillSlot.effect) {
            case '???(Curse of the Maze)':
              pillSlot.effect = 'Telepills'
              break
            case 'Addicted':
              pillSlot.effect = 'Percs!'
              break
            case 'I\'m Excited!!!':
              pillSlot.effect = 'I\'m Drowsy...'
              break
            case 'Paralysis':
              pillSlot.effect = 'Pheromones'
              break
            case 'Retro Vision':
              pillSlot.effect = 'I Can See Forever'
              break
            case 'R U A Wizard?':
              pillSlot.effect = 'Power Pill!'
              break
            case 'X-Lax':
              pillSlot.effect = 'Something\'s wrong...'
              break
          }
        } else if (this.version === 'Repentance') {
          switch (pillSlot.effect) {
            case '???(Curse of the Maze)':
              pillSlot.effect = 'Telepills'
              break
            case 'Addicted':
              pillSlot.effect = 'Percs!'
              break
            case 'Bad Trip':
              pillSlot.effect = 'Balls of Steel'
              break
            case 'Horf!':
              pillSlot.effect = 'Gulp!'
              break
            case 'I\'m Excited!!!':
              pillSlot.effect = 'I\'m Drowsy...'
              break
            case 'Paralysis':
              pillSlot.effect = 'Pheromones'
              break
            case 'Retro Vision':
              pillSlot.effect = 'I Can See Forever'
              break
            case 'X-Lax':
              pillSlot.effect = 'Something\'s wrong...'
              break
          }
        }
      })
    },
    save () {
      localStorage.setItem('pills', JSON.stringify(
        {
          version: this.version
        }
      ))
    },
    setVersionAfterbirth () {
      this.version = 'Afterbirth'
      this.pillSlots = this.pillSlotsDefault.concat(this.pillSlotsExtended)
      this.pillEffects = afterbirthEffects
    },
    setVersionAfterbirthPlus () {
      this.version = 'Afterbirth+'
      this.pillSlots = this.pillSlotsDefault.concat(this.pillSlotsExtended)
      this.pillEffects = afterbirthPlusEffects
    },
    setVersionAntibirth () {
      this.version = 'Antibirth'
      this.pillSlots = this.pillSlotsDefault
      this.pillEffects = antibirthEffects
    },
    setVersionRebirth () {
      this.version = 'Rebirth'
      this.pillSlots = this.pillSlotsDefault
      this.pillEffects = rebirthEffects
    },
    setVersionRepentance () {
      this.version = 'Repentance'
      this.pillSlots = this.pillSlotsDefault.concat(this.pillSlotsExtended)
      this.pillEffects = repentanceEffects
    },
    setVersion (version) {
      switch (version) {
        case 'Rebirth':
          this.setVersionRebirth()
          break
        case 'Antibirth':
          this.setVersionAntibirth()
          break
        case 'Afterbirth':
          this.setVersionAfterbirth()
          break
        case 'Afterbirth+':
          this.setVersionAfterbirthPlus()
          break
        case 'Repentance':
          this.setVersionRepentance()
          break
        default:
          throw new RangeError(`Unknown game version: "${this.version}"`)
      }
    },
    switchVersion () {
      switch (this.version) {
        case 'Rebirth':
          this.setVersionAntibirth()
          break
        case 'Antibirth':
          this.setVersionAfterbirth()
          break
        case 'Afterbirth':
          this.setVersionAfterbirthPlus()
          break
        case 'Afterbirth+':
          this.setVersionRepentance()
          break
        case 'Repentance':
          this.setVersionRebirth()
          break
        default:
          throw new RangeError(`Unknown game version: "${this.version}"`)
      }
    }
  },
  created () {
    const saveData = JSON.parse(localStorage.getItem('pills'))

    if (saveData) {
      this.setVersion(saveData.version)
    } else {
      this.setVersionRepentance()
    }
  }
})
