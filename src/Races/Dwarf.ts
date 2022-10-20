import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoint: number;
  public static countInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoint = 80;
    Dwarf.addInstances();
  }

  public static addInstances() {
    this.countInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoint; 
  }

  public static createdRacesInstances(): number {
    return this.countInstances;
  }
}
