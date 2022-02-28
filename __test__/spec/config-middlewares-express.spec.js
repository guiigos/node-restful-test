const express = require('express');
const config = require('../../src/config/middlewares/express');

jest.mock('express');

describe('Config :: Middlewares :: Express', function () {
  it('should be config express', function () {
    const use = jest.fn();

    config({ use });

    expect(express.json).toHaveBeenCalled();
    expect(express.json.mock.calls.length).toBe(1);

    expect(express.urlencoded).toHaveBeenCalled();
    expect(express.urlencoded.mock.calls.length).toBe(1);

    expect(use).toHaveBeenCalled();
    expect(use.mock.calls.length).toBe(2);
  });
});
