export class Maybe {
  constructor(value) {
    this._value = value;
  }

  static of(value) {
    return new Maybe(value)
  }

  isNothing() {
    return this._value === null || this._value === undefined
  }

  map(fn) {
    if (this.isNothing()) return Maybe.of(null)
    return Maybe.of(fn(this._value))
  }

  getOrElse(value) {
    return this.isNothing() ? value : this._value
  }
}
