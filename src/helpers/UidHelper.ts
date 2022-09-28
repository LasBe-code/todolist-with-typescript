export class UidHelper {
  private static id: number = 1;

  static getUid = (): number => {
    return this.id++;
  };
}
