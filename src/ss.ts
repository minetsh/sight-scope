interface SSMap {
  [key: string]: string;
}

class SS {
  private map: SSMap = {};

  public key(n: number): number {
    return Object.keys(this.map).keys[n];
  }

  public setItem(key: string, value: string) {
    this.key[key] = value;
  }

  public getItem(key: string): string {
    return this.key[key];
  }

  public removeItem(key: string) {
    this.key[key] = null;
  }

  public clear() {
    this.map = {};
  }
}

const ss = typeof sessionStorage !== 'undefined' ? sessionStorage : new SS();

export default ss;
