export default class Endpoint {
  constructor(path, method, handler) {
    this.path = path;
    this.method = method;
    this.handler = handler;
  }
}
