function Consign() {
  return this;
}

Consign.prototype.include = jest.fn(function () {
  return this;
});

Consign.prototype.exclude = jest.fn(function () {
  return this;
});

Consign.prototype.then = jest.fn(function () {
  return this;
});

Consign.prototype.into = jest.fn(function () {
  return this;
});

module.exports = jest.fn(function () {
  return new Consign();
});

