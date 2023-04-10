import { Duplex } from 'stream';

export class ResponseDelay extends Duplex {

  constructor (delay) {
    super();
    this._delay = delay;
  }

  _write (chunk, encoding, callback) {
    setTimeout(() => {
      this.push(chunk, encoding);
      callback();
    }, this._delay);
  }

  _read () {
  }

  _final () {
    this.push(null);
  }
}
