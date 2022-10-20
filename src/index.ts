import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('Cloud Strife');
const player2 = new Character('Barret Wallace');
const player3 = new Character('Tifa Lockhart');

player1.levelUp();
player1.levelUp();
player1.levelUp();

const monster1 = new Monster();
const monster2 = new Dragon(); 

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

function runBattles(battles: Battle[]) {
  battles.forEach((battle) => battle.fight());
}

// console.log(player1);
// console.log(player2);
// console.log(player3);
// console.log(monster1);
// console.log(monster2);
// console.log(pvp);
// console.log(pve);
 
export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };
