const pills = new Vue({
  el: '#main',
  data: {
    pillSlotExtendedPillsIndex: 10,
    pillSlots: [
      {
        alt: 'Solid Blue Pill',
        src: 'Images/Pills/Blue.png',
        effect: '???'
      },
			{
        alt: 'Dark-Blue Top with Aqua Bottom',
        src: 'Images/Pills/BlueCyan.png',
        effect: '???'
      },
			{
        alt: 'Solid Orange Pill',
        src: 'Images/Pills/Orange.png',
        effect: '???'
      },
			{
        alt: 'Solid White Pill',
        src: 'Images/Pills/White.png',
        effect: '???'
      },
      {
			  alt: 'Spotted Red on Top with Red Bottom',
        src: 'Images/Pills/RedSpecled.png',
        effect: '???'
      },
      {
			  alt: 'Spotted Yellow on Top with White Bottom',
        src: 'Images/Pills/SpottedWhite.png',
        effect: '???'
      },
      {
			  alt: 'White Top with Blue Bottom',
        src: 'Images/Pills/WhiteBlue.png',
        effect: '???'
      },
		  {
        alt: 'Pink Top with Red Bottom',
        src: 'Images/Pills/WhiteRed.png',
        effect: '???'
      },
      {
			  alt: 'Yellow Top with Orange Bottom',
        src: 'Images/Pills/YellowOrange.png',
        effect: '???'
      },
      //Extended Pill Slots
      { 
        alt: 'White Top with Black Bottom',
        src: 'Images/Pills/AfterBirth/Black_White.png',
        effect: '???'
      },
      { 
        alt: 'Black Top with Yellow Bottom',
        src: 'Images/Pills/AfterBirth/Black_Yellow.png',
        effect: '???'
      },
      { 
        alt: 'White Top with Cyan Bottom',
        src: 'Images/Pills/AfterBirth/White_Cyan.png',
        effect: '???'
      },
      {
        alt: 'White Top with Yellow Bottom',
        src: 'Images/Pills/AfterBirth/White_Yellow.png',
        effect: '???' 
      }
    ],
    pillSlotsExtended: [
      { 
        alt: 'White Top with Black Bottom',
        src: 'Images/Pills/AfterBirth/Black_White.png',
        effect: '???'
      },
      { 
        alt: 'Black Top with Yellow Bottom',
        src: 'Images/Pills/AfterBirth/Black_Yellow.png',
        effect: '???'
      },
      { 
        alt: 'White Top with Cyan Bottom',
        src: 'Images/Pills/AfterBirth/White_Cyan.png',
        effect: '???'
      },
      {
        alt: 'White Top with Yellow Bottom',
        src: 'Images/Pills/AfterBirth/White_Yellow.png',
        effect: '???' 
      }
    ],
    version: 'Afterbirth+'
  },
  watch: {
    version: function() {
      this.save()
    }
  },
  methods: {
    save: function(){
      localStorage.setItem('pills', JSON.stringify(
        {
          version: this.version
        }
      ))
    },
    switchVersion: function() {
      switch(this.version){
        case 'Afterbirth+':
          this.version = 'Afterbirth'
          break
        case 'Afterbirth':
          this.version = 'Rebirth'
          this.pillSlots.splice(this.pillSlotExtendedPillsIndex - 1, 4)
          break
        case 'Rebirth':
          this.version = 'Antibirth'
          break
        case 'Antibirth':
          this.version = 'Afterbirth+'
          this.pillSlotsExtended.forEach(
            (pillSlot) => {
              this.pillSlots.push(pillSlot)
            }
          )
          break
        default:
          throw new RangeError(`Unknown game version: "${this.version}"`)
      }
    }
  },
  created: function(){
    let saveData = JSON.parse(localStorage.getItem('pills'))

    if(saveData){
      this.version = saveData.version
    }
  }
})

/*function switchVersion(a) {
    switch (a) {
        case 0:
            return (
                removeElements(antiPills, pillEffects),
                addElements(afterPills, pillEffects),
                addElements(afterPlusPills, pillEffects),
                afterPillsUI.forEach(function (a, b) {
                    b % 3 == 0 && $("#pillInfo tbody").append("<tr class = 'afterBirth'></tr>"),
                        $($("#pillInfo tbody tr.afterBirth").get(Math.floor(b / 3))).append("<td title='Try scrolling or holding down the button.'><img alt='" + a.alt + "' class='noSelect' src=" + a.url + "></td>");
                }),
                void applyListeners($("#pillInfo tr.afterBirth td"))
            );
        case 1:
            return void removeElements(afterPlusPills, pillEffects);
        case 2:
            return removeElements(afterPills, pillEffects), void $(".afterBirth").remove();
        case 3:
            return void addElements(antiPills, pillEffects);
    }
}
var versions = ["Antibirth", "AfterBirth+", "AfterBirth", "Rebirth"],
    pillEffects = [
        "???",
        "48 Hour Energy",
        "Amnesia",
        "Bad Gas",
        "Bad Trip",
        "Balls of Steel",
        "Bombs Are Key",
        "Explosive Diarrhea",
        "Full Health",
        "Health Down",
        "Health Up",
        "Hematemesis",
        "I Can See Forever",
        "I Found Pills",
        "Lemon Party",
        "Luck Down",
        "Luck Up",
        "Paralysis",
        "Pheromones",
        "Puberty",
        "Pretty Fly",
        "Range Down",
        "Range Up",
        "R U a Wizard?",
        "Speed Down",
        "Speed Up",
        "Tears Down",
        "Tears Up",
        "Telepills",
    ],
    antiPills = ["Experimental Pill", "Shot Speed Down", "Shot Speed Up"],
    afterPills = ["???(Curse of the Maze)", "Addicted", "Friends Till The End!", "Infested!", "Infested?", "One Makes You Small", "One Makes You Larger", "Percs", "Power Pill", "Re-Lax", "Retro Vision"],
    afterPlusPills = ["Feels like I'm walking on sunshine!", "Gulp!", "Horf!", "I'm Drowsy...", "I'm Excited!!!", "Something's wrong...", "Vurp!", "X-Lax"],
    afterPillsUI = [
        { url: "Images/Pills/AfterBirth/Black_White.png", alt: "White Top with Black Bottom" },
        { url: "Images/Pills/AfterBirth/Black_Yellow.png", alt: "Black Top with Yellow Bottom" },
        { url: "Images/Pills/AfterBirth/White_Cyan.png", alt: "White Top with Cyan Bottom" },
        { url: "Images/Pills/AfterBirth/White_Yellow.png", alt: "White Top with Yellow Bottom" },
    ],
    pills = new Array(13).fill(1),
    cycleLock = { timeoutLock: null, intervalLock: null };
$(function () {
    var a = 0;
    $("div#topControls img").height($("div#topControls").height()),
        switchVersion(3),
        applyListeners($("#pillInfo td")),
        fixHeight(),
        $("img#reset").click(function () {
            for (i = 0; i < pills.length; i++) pills[i] = 1;
            $("#pillInfo p").text("???");
        }),
        $("img#phd").click(function () {
            $("#pillInfo p").each(function () {
                switch ($(this).text()) {
                    case "Amnesia":
                        return void setEffect($(this), "I Can See Forever");
                    case "Bad Trip":
                        return void setEffect($(this), "Balls of Steel");
                    case "Health Down":
                        return void setEffect($(this), "Health Up");
                    case "Luck Down":
                        return void setEffect($(this), "Luck Up");
                    case "Range Down":
                        return void setEffect($(this), "Range Up");
                    case "Shot Speed Down":
                        return void setEffect($(this), "Shot Speed Up");
                    case "Speed Down":
                        return void setEffect($(this), "Speed Up");
                    case "Tears Down":
                        return void setEffect($(this), "Tears Up");
                }
            });
        }),
        $("#version_header").click(function () {
            switchVersion(a), a++, (a %= versions.length), $("#version_header").text(versions[a]), fixHeight();
        });
});*/
