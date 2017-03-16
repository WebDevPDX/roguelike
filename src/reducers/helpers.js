const fieldWidth = 25;
const fieldHeight = 25;

function FieldCell(row, col) {
  this.obstacle = Math.random() < 0.2;
  this.playerHere = false;
  this.bossHere = false;
  this.monsterHere = false;
  this.itemHere = false;
  this.healthHere = false;
  this.fieldLocation = [row, col];
  this.fog = true;
  this.discovered = false;
}

const Player = function() {
  this.experience = 0;
  this.baseDmg = 0;
  this.weaponDmg = 10;
  this.level = 1;
  this.health = 100;
  this.weapon = 'Pocket Knife';
  this.damage = this.baseDmg + this.weaponDmg;
  this.position = [0, 0];
}

const Monster = function(row, col) {
  this.experience = 50;
  this.health = 50;
  this.damage = 10;
  this.postion = [row, col];
}

const Boss = function() {
  this.health = 150;
  this.damage = 10;
  this.position = [0, 0];
}

const Item = function(name, damage, row, col) {
  this.itemName = name;
  this.damage = damage;
  this.position = [row, col];
}

const HealthPot = function(row, col) {
  this.heal = 20;
  this.position = [row, col]
}

//generate data array containing all information for the game field
//call all generator functions
export function generateFieldArray() {
  const arr = [];
  for (var i = 0; i < fieldHeight; i++) {
    const row = [];
    for (var j = 0; j < fieldWidth; j++) {
      row.push(new FieldCell(i, j));
    }
    arr.push(row);
  }
  generatePlayerPosition(arr);
  generateBossPosition(arr);
  generateAllMonsters(arr);
  generateAllItems(arr);
  generateAllHealthPots(arr);
  return arr
}

//generate player object and assign position on the game field
function generatePlayerPosition(arr) {
  var col = Math.floor(Math.random() * fieldWidth);
  var row = Math.floor(Math.random() * fieldHeight);
  if (arr[row][col].obstacle) {
    generatePlayerPosition(arr);
  } else {
    var player = new Player();
    player.position[0] = row;
    player.position[1] = col;
    arr[row][col].playerHere = true;
  }
}

//generate boss object and assign position on the game field
function generateBossPosition(arr) {
  var col = Math.floor(Math.random() * fieldWidth);
  var row = Math.floor(Math.random() * fieldHeight);
  if (arr[row][col].obstacle || arr[row][col].playerHere) {
    generateBossPosition(arr);
  } else {
    var boss = new Boss();
    boss.position[0] = row;
    boss.position[1] = col;
    arr[row][col].bossHere = true;
  }
}

//generate monsters and assign positions on the game field
function generateMonster(arr, monsters) {
  var col = Math.floor(Math.random() * fieldWidth);
  var row = Math.floor(Math.random() * fieldHeight);
  if (arr[row][col].obstacle || arr[row][col].playerHere || arr[row][col].bossHere) {
    generateMonster(arr, monsters);
  } else {
    monsters.push(new Monster(row, col));
    arr[row][col].monsterHere = true;
  }
}

function generateAllMonsters(arr) {
  var monsters = [];
  for (var i = 0; i < 6; i++) {
    generateMonster(arr, monsters);
  }
}

//generate items and assign positions on the game field
function generateItem(arr, items, name, damage) {
  var col = Math.floor(Math.random() * fieldWidth);
  var row = Math.floor(Math.random() * fieldHeight);
  if (arr[row][col].obstacle || arr[row][col].playerHere || arr[row][col].bossHere || arr[row][col].monsterHere) {
    generateItem(arr, items, name, damage);
  } else {
    items.push(new Item(name, damage, row, col));
    arr[row][col].itemHere = true;
  }
}

function generateAllItems(arr) {
  var items = [];
  generateItem(arr, items, 'Dagger', 11);
  generateItem(arr, items, 'Short Sword', 12);
  generateItem(arr, items, 'Long Sword', 14);
  generateItem(arr, items, 'Axe', 16);
}

//generate health pots and assign positions on the game field
function generateHealthPot(arr, pots) {
  var col = Math.floor(Math.random() * fieldWidth);
  var row = Math.floor(Math.random() * fieldHeight);;
  if (arr[row][col].obstacle || arr[row][col].playerHere || arr[row][col].bossHere || arr[row][col].monsterHere || arr[row][col].itemHere) {
    generateHealthPot(arr, pots);
  } else {
    pots.push(new HealthPot(row, col));
    arr[row][col].healthHere = true;
  }
}

function generateAllHealthPots(arr) {
  var pots = []
  for (var i = 0; i < 4; i++) {
    generateHealthPot(arr, pots);
  }
}
