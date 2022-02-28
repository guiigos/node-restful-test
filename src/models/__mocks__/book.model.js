module.exports = jest.fn(function () {
  return {
    methods: jest.fn(),
    register: jest.fn(),
    updateOptions: jest.fn(),
  };
});
