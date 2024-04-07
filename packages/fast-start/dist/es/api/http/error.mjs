class r extends Error {
  constructor(t, s, c = null) {
    super(t), this.message = t, this.status = s, this.body = c, Object.setPrototypeOf(this, r.prototype), this.name = this.constructor.name, typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(t).stack, this.stack = new Error().stack;
  }
}
export {
  r as HttpError
};
//# sourceMappingURL=error.mjs.map
