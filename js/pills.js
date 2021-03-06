const pills = new Vue({
  el: '#main',
  data: {
    pillEffects: [],
    pillEffectsAfterbirth: [
      '???(Curse of the Maze)',
      'Addicted',
      'Friends Till The End!',
      'Infested!',
      'Infested?',
      'One Makes You Small',
      'One Makes You Larger',
      'Percs',
      'Power Pill',
      'Re-Lax',
      'Retro Vision'
    ],
    pillEffectsAfterbirthPlus: [
      'Feels like I\'m walking on sunshine!',
      'Gulp!',
      'Horf!',
      'I\'m Drowsy...',
      'I\'m Excited!!!',
      'Something\'s wrong...',
      'Vurp!',
      'X-Lax'
    ],
    pillEffectsAntibirth: [
      'Experimental Pill',
      'Shot Speed Down',
      'Shot Speed Up'
    ],
    pillEffectsDefault: [
      '48 Hour Energy',
      'Amnesia',
      'Bad Gas',
      'Bad Trip',
      'Balls of Steel',
      'Bombs Are Key',
      'Explosive Diarrhea',
      'Full Health',
      'Health Down',
      'Health Up',
      'Hematemesis',
      'I Can See Forever',
      'I Found Pills',
      'Lemon Party',
      'Luck Down',
      'Luck Up',
      'Paralysis',
      'Pheromones',
      'Puberty',
      'Pretty Fly',
      'Range Down',
      'Range Up',
      'R U a Wizard?',
      'Speed Down',
      'Speed Up',
      'Tears Down',
      'Tears Up',
      'Telepills'
    ],
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
      this.pillEffects = this.pillEffectsDefault.concat(this.pillEffectsAfterbirth)
    },
    setVersionAfterbirthPlus () {
      this.version = 'Afterbirth+'
      this.pillSlots = this.pillSlotsDefault.concat(this.pillSlotsExtended)
      this.pillEffects = this.pillEffectsDefault.concat(this.pillEffectsAfterbirth, this.pillEffectsAfterbirthPlus)
    },
    setVersionAntibirth () {
      this.version = 'Antibirth'
      this.pillSlots = this.pillSlotsDefault
      this.pillEffects = this.pillEffectsDefault.concat(this.pillEffectsAntibirth)
    },
    setVersionRebirth () {
      this.version = 'Rebirth'
      this.pillSlots = this.pillSlotsDefault
      this.pillEffects = this.pillEffectsDefault
    },
    switchVersion () {
      switch (this.version) {
        case 'Afterbirth+':
          this.setVersionAfterbirth()
          break
        case 'Afterbirth':
          this.setVersionRebirth()
          break
        case 'Rebirth':
          this.setVersionAntibirth()
          break
        case 'Antibirth':
          this.setVersionAfterbirthPlus()
          break
        default:
          throw new RangeError(`Unknown game version: "${this.version}"`)
      }
    }
  },
  created () {
    const saveData = JSON.parse(localStorage.getItem('pills'))

    if (saveData) {
      this.version = saveData.version

      switch (this.version) {
        case 'Afterbirth+':
          this.setVersionAfterbirthPlus()
          break
        case 'Afterbirth':
          this.setVersionAfterbirth()
          break
        case 'Rebirth':
          this.setVersionRebirth()
          break
        case 'Antibirth':
          this.setVersionAntibirth()
          break
        default:
          throw new RangeError(`Unknown game version: "${this.version}"`)
      }
    } else {
      this.setVersionAfterbirthPlus()
    }
  }
})
