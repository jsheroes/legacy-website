export default class StoreFactory {
  static getStore(name) {
    const inner = {};
    return {
      getItem() {
        return inner[name];
      },
      setItem(value) {
        inner[name] = value;
      },
    };
  }
}
