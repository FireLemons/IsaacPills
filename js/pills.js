const pills = new Vue({
  el: '#main',
  data: {
    pillSlots: [
      {
        alt: 'Solid Blue Pill',
        src: 'Images/Pills/Blue.png'
      },
			{
        alt: 'Dark-Blue Top with Aqua Bottom',
        src: 'Images/Pills/BlueCyan.png'
      },
			{
        alt: 'Solid Orange Pill',
        src: 'Images/Pills/Orange.png'
      },
			{
        alt: 'Solid White Pill',
        src: 'Images/Pills/White.png'
      },
      {
			  alt: 'Spotted Red on Top with Red Bottom',
        src: 'Images/Pills/RedSpecled.png'
      },
      {
			  alt: 'Spotted Yellow on Top with White Bottom',
        src: 'Images/Pills/SpottedWhite.png'
      },
      {
			  alt: 'White Top with Blue Bottom',
        src: 'Images/Pills/WhiteBlue.png'
      },
		  {
        alt: 'Pink Top with Red Bottom',
        src: 'Images/Pills/WhiteRed.png'
      },
      {
			  alt: 'Yellow Top with Orange Bottom',
        src: 'Images/Pills/YellowOrange.png'
      }
    ]
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
function addElements(a, b) {
    a.forEach(function (a) {
        b.push(a);
    }),
        b.sort();
}
function removeElements(a, b) {
    a.forEach(function (a) {
        var c = b.indexOf(a);
        c >= 0 && b.splice(c, 1);
    });
}
function getPillIndex(a) {
    return a.index() + 3 * a.parent().index();
}
function setEffect(a, b) {
    a.text(b), (pills[getPillIndex(a.parent())] = pillEffects.indexOf(b));
}
function changeEffect(a, b) {
    var c = getPillIndex(a);
    b ? pills[c]++ : (pills[c] = pills[c] - 1 < 0 ? pillEffects.length - 1 : pills[c] - 1), (pills[c] %= pillEffects.length), a.children("p").text(pillEffects[pills[c]]);
}
function changeEffectScroll(a) {
    changeEffect($(this), a.deltaY < 0);
}
function stopScrolling(a) {
    return a.preventDefault(), a.stopPropagation(), !1;
}
function applyListeners(a) {
    a.append("<p class='noSelect'>" + pillEffects[1] + "</p>"),
        a.on("scroll touchmove mousewheel", stopScrolling),
        a.mousewheel(changeEffectScroll),
        a.on("mouseleave mouseup", function () {
            clearInterval(cycleLock.intervalLock), clearTimeout(cycleLock.timeoutLock);
        }),
        a.mousedown(function (a) {
            var b = $(this).width() / 2 < a.pageX - $(this).offset().left,
                c = $(this);
            changeEffect(c, b),
                (cycleLock.timeoutLock = setTimeout(function () {
                    cycleLock.intervalLock = setInterval(function () {
                        changeEffect(c, b);
                    }, 200);
                }, 300));
        });
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
