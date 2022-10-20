import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player1: Fighter;
  private _enemys: SimpleFighter[];

  constructor(player1: Fighter, enemys: SimpleFighter[]) {
    super(player1);
    this._player1 = player1;
    this._enemys = [...enemys];
  }

  fight(): number {
    this._enemys.forEach((e) => {
      while (this._player1.lifePoints > 0 && e.lifePoints > 0) {
        this._player1.attack(e);
        e.attack(this._player1);
      }
    });
    return super.fight();
  }
}
