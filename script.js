$(document).ready(function() {
  var Logged = 0;
  const logger = function() {
    return "[" + Logged++ + "] ";
  };
  console.log(logger() + "Readied!");
  //// LEAVE ^^^^^^^^^^^^^^^^^^^^^^^^

  //// hotkeys
  // hide hiddenLater
  $(document).bind('keydown', 'ctrl+shift+s', function() {
    console.log(logger() + "ctrl+shift+s fired");
    $(".hiddenLater").each(function() {
			$( this ).hide( "fast" );
    });
  });

  //// Extra
  
  // time stuff
  /* const minute = 1000 * 60;
  const hour   = minute * 60;
  const day    = hour * 24;
  const year   = day * 365;
  
  const date  = new Date(); */
  
  // var asiment
  var HidElementCount = 0;
  const MakePositive = function(number) {
    return (number < 0) ? -number : number;
  }

  function Randint(to, from) {
    return Math.floor(Math.random() * (from - to + 1)) + to;
  }

  // for the randomize-er
  const randomCharChangeList = [
    "\u0300", "\u0301", "\u0302", "\u0303", "\u0304", "\u0305", "\u0306", "\u0307", "\u0308", "\u0309", "\u030A", "\u030B", "\u030C", "\u030D", "\u030E", "\u030F", "\u0310", "\u0311", "\u0312", "\u0313", "\u0314", "\u0315", "\u0316", "\u0317", "\u0318", "\u0319", "\u031A", "\u031B", "\u031C", "\u031D", "\u031E", "\u031F", "\u0320", "\u0321", "\u0322", "\u0323", "\u0324", "\u0325", "\u0326", "\u0327", "\u0328", "\u0329", "\u032A", "\u032B", "\u032C", "\u032D", "\u032E", "\u032F", "\u0330", "\u0331", "\u0332", "\u0333", "\u0334", "\u0335", "\u0336", "\u0337", "\u0338", "\u0339", "\u033A", "\u033B", "\u033C", "\u033D", "\u033E", "\u033F", "\u0340", "\u0341", "\u0342", "\u0343", "\u0344", "\u0345", "\u0346", "\u0347", "\u0348", "\u0349", "\u034A", "\u034B", "\u034C", "\u034D", "\u034E", "\u034F", "\u0350", "\u0351", "\u0352", "\u0353", "\u0354", "\u0355", "\u0356", "\u0357", "\u0358", "\u0359", "\u035A", "\u035B", "\u035C", "\u035D", "\u035E", "\u035F", "\u0360", "\u0361", "\u0362", "\u0363", "\u0364", "\u0365", "\u0366", "\u0367", "\u0368", "\u0369", "\u036A", "\u036B", "\u036C", "\u036D", "\u036E", "\u036F", "\u0483", "\u0484", "\u0485", "\u0486", "\u0487"
  ];
  const getRandomCharChange = function() {
    return randomCharChangeList[Randint(0, 116)];
  }

  /// other projects
  // forgot
  function Expand(obj) {
    if (!obj.savesize) obj.savesize = obj.size + 1;
    obj.size = Math.max(obj.savesize + 1, obj.value.length + 1);
  }

  $("[pair]").on("keyup", function() {
    $("#" + $(this).attr("pair")).attr("value", $(this).val());
  });

  $(".expand").on("keydown", function() {
    Expand(this);
  });

  // other https://jsfiddle.net/fooddude/54ozmt0x/161/
  function ChangeTagOfHighlight(tagIdString) {
    var range = window.getSelection().getRangeAt(0),
      bold = document.createElement(tagIdString);
    bold.appendChild(range.extractContents());
    range.insertNode(bold);
  }

  function clickAway(ElementIdJQ, IsPerWord = false) {
    $(ElementIdJQ).each(function(index, element) {
      var traget = $(this);
      const SpliterText = IsPerWord ? ' ' : '.'

      let textList = traget.text().split(SpliterText);

      traget.html("")
      for (let i = 0; i < textList.length - 1; i++) {
        traget.append("<span>" + textList[i] + (IsPerWord ? " " : '.') + "</span>")
      }
    });
  }

  function DisableLink(linkStringId, sendAlert = false) {
    var disableThingy = function(x) {
      $(x).click(function(event) {
        if (sendAlert) {
          alert("This link has been disabled");
        }
        event.preventDefault();
        // more
        $(this).hide("slow");
        HidElementCount++;
        $(this).attr("hidids", HidElementCount);
      })
    };
    if (typeof linkStringId == "object") {
      for (let i = 0; i < linkStringId.length; i++) {
        disableThingy(linkStringId[i]);
      }
    } else {
      disableThingy(linkStringId);
    }
    console.log(logger() + "'" + linkStringId + "' has been disabled.");
  }

  //// localStroage code
  

  //// dnd code

  $("accordion").each(function() {
    $(this).accordion();
  });

  class StatManager {
    constructor(stats) {
      this.stats = stats;
    }
  }

  class Player {
    constructor(name, age, statsMan, items, pets, ...others) {
      this.name = name;
      this.age = age;
      this.statsMan = statsMan;
      this.items = items;
      this.pets = pets;
      
      this.others = others;
    }
    
    setStats(OBJECT) {
    	this.statsMan = OBJECT;
      return 0;
    }
    
    setName(STRING) {
    	this.name = STRING;
      return 0;
    }
    
  }


  var templateStats = {
    "Intelligence": 5,
    "Dexterity": 5,
    "Max_Health": 10,
    "Curent_Health": 10,
    "Agility": 5,
    "Luck": 5,
  };
  
  var templateItems = {};
  var templatePets = {};

  var templatePlayer = new Player("template", 20, templateStats, templateItems, templatePets);
  
console.log(templatePlayer);
	
  var playerName,obj2,localStorageNameKey;
  
  /* localStorage.setItem("playerDave", "blanck"); */
  $( "#findPlayer" ).click(function(event) {
    event.preventDefault();
    playerName = $( "#namePlayer" ).val().toLowerCase();
    localStorageNameKey = "player" + playerName
    console.log(logger() + "player name: " + playerName);
/*     console.log(logger() + "dat " + JSON.stringify(dave, null, 4)); */
    
    /* console.log(logger() + "json "  + localStorage.getItem("playerDave").toString()); */
    $( "#playerDataJson" ).val((localStorage.getItem(localStorageNameKey)) );
  });
 	
  /// save
  var playerData;
  $( "#savePlayerData" ).click(function(event) {
  	event.preventDefault();
    
    // other
    playerData = JSON.parse($( "#playerDataJson" ).val());
    
    console.log(playerData);
    
    // save in localStorage
    localStorage.setItem(localStorageNameKey, (JSON.stringify(playerData, null, 4)))
    
    // tell the user
    $( ".did-save" ).html( "<span class='successful'>Successfuly saved! @" + new Date().getTime() + "</span>" );
  });
  /* localStorage.setItem(localStorageNameKey, (JSON.stringify(dave, null, 4))) */
  
  

	/* localStorage */
	
	  //// Code
	
	  $(".Randomize").each(function() {
	    var textList = $(this).text().split("");
	    var This = $(this);
	    This.attr("ogtext", This.text());
	    This.text("");
	
	    $(textList).each(function() {
	      This.append($("<span class=\"letterChanger\" letter=\"" + this + "\">" + this + "</span>"))
	    });
	  });

  $(".RandomizeV2" && "p").each(function() {
    var Text = $(this).text();
    var This = $(this);
    This.attr("ogtext", Text);
    /* This.attr("ogval", This.val()); */
    This.attr("oglength", This.val().length)


    /*  This.text(""); */

  });

  $(".letterChangerV2").hover(
    function() {
      console.log($(this));
    },
    function() {

    });


  $(".letterChanger").hover(
    function() {
      let g = function() {
        let h = "";
        for (let i = 0; i < parseInt($("#numbers").val()); i++) {
          h += getRandomCharChange();
        }
        return h;
      }
      /* console.log(logger() + g()) */
      ;
      $(this).text($(this).text() + g());
    },
    function() {
      /* $(this).text($(this).attr("letter")); */
    });

  // UI/* 
  $(".hamed").text("Hamburger");
  $(".Randomize").draggable();
  $("[can-drag='true']").each(function() {
    $(this).draggable()
  });

  $("#droppable").droppable({
    drop: function(event, ui) {
      $(this)
        .addClass("ui-state-highlight")
        .find("p")
        .html("Dropped!");
    }
  });

  $("#gameDropButtonUP").click(function() {
    console.log(logger() + "UP");
  });

  $("#gameDropButtonDOWN").click(function() {
    console.log(logger() + "DOWN");
  });

  $("#gameDropButtonLEFT").click(function() {
    console.log(logger() + "LEFT");
  });
  $("#gameDropButtonRIGHT").click(function() {
    console.log(logger() + "RIGHT");
  });

});
