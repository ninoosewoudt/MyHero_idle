let game = {};
let player = {
  label : "name here",
  health : 1
};

game.baseInterval = 1000;

player.skills = {
  health : {
    label : "Health",
    currentVal : 10,
    xpNeeded : 100,
    currentXp : 0
  },
  attack : {
    label : "Attack",
    currentVal : 1,
    xpNeeded : 100,
    currentXp : 0
  },
  strength : {
    label : "strength",
    currentVal : 1,
    xpNeeded : 100,
    currentXp : 0
  },
  defense : {
    label : "Defense",
    currentVal : 1,
    xpNeeded : 100,
    currentXp : 0
  },
  range : {
    label : "Range",
    currentVal : 1,
    xpNeeded : 100,
    currentXp : 0
  },
  magic : {
    label : "Magic",
    currentVal : 1,
    xpNeeded : 100,
    currentXp : 0
  },
  woodcutting : {
    label : "Woodcutting",
    currentVal : 1,
    xpNeeded : 100,
    currentXp : 0
  },
  fishing : {
    label : "Fishing",
    currentVal : 1,
    xpNeeded : 100,
    currentXp : 0
  }
};
game.resources = {
  iron : {
    label : "Stone",
    currentVal : 0
  },
  wood : {
    label : "Wood",
    currentVal : 0
  },
  fish : {
    label : "Fish",
    currentVal : 0
  },
};
game.currency = {
  goldenCoins : {
    label : "Golden Coins",
    currentVal : 0
  },
  silverCoins : {
    label : "Silver Coins",
    currentVal : 0
  }
};
game.buildings = {};
game.zones = {
  forest : {
    1 : {
      label : "Bunny",
      health : 5,
      defenseVal : 1,
      attackVal : 1,
      xpReward : 10,
      level : 1
    },
    2 : {
      label : "gnome",
      health : 10,
      defenseVal : 2,
      attackVal : 2,
      xpReward : 15,
      level : 2
    },
    3 : {
      label : "goblin",
      health : 20,
      defenseVal : 2,
      attackVal : 4,
      xpReward : 30,
      level : 3

    }
  },
  beach : {

  },
  mountains : {
  }
};

$(document).ready(function(){

  $('.attack').click(function(){
    var zone = $(this).attr('zone');
    var num = Math.floor((Math.random() * 3) + 1);
    var enemy = game.zones[zone][num];
    attack(enemy.label,enemy.health,enemy.defenseVal,enemy.attackVal,enemy.xpReward,enemy.level);


  });

window.setInterval(function(){
  update();
},game.baseInterval);

});

function update(){
  //console.log("update trigger");
}

function attack (label,health,defenseVal,attackVal,xpReward,level){
  player.health = player.skills.health.currentVal;
  while (health > 0 && player.health > 0) {
    console.log(label);
    health -= player.skills.attack.currentVal;
    console.log(health);
    player.health -= attackVal;
  }
  if (health == 0) {
    console.log("win");
    player.skills.health.currentVal++;
    return ;
  }else {
    console.log("lose");
    return ;
  }


}
