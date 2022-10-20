import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  public static countInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.addInstances();
  }

  public static addInstances() {
    this.countInstances += 1;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return this.countInstances;
  }
}
