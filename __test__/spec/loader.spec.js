const dotenv = require('dotenv');
const consign = require('consign');
const loader = require('../../src/loader');

describe('Loader', function () {
  it('should be configure service with consign', function () {
    loader();

    expect(dotenv.config).toHaveBeenCalled();
    expect(dotenv.config.mock.calls.length).toBe(1);

    expect(consign).toHaveBeenCalled();
    expect(consign.mock.calls.length).toBe(1);
    expect(consign.mock.lastCall[0]).toMatchObject({
      cwd: 'src',
      verbose: false,
    });

    const {
      include,
      exclude,
      then,
      into,
    } = consign.mock.results[0].value;

    expect(include).toHaveBeenCalled();
    expect(include.mock.calls.length).toBe(1);
    expect(include.mock.lastCall[0]).toBe('config');

    expect(then).toHaveBeenCalled();
    expect(then.mock.calls.length).toBe(1);
    expect(then.mock.lastCall[0]).toBe('routes');

    expect(exclude).toHaveBeenCalled();
    expect(exclude.mock.calls.length).toBe(1);
    expect(exclude.mock.lastCall[0]).toBe('config/database/__mocks__');

    expect(into).toHaveBeenCalled();
    expect(into.mock.calls.length).toBe(1);
  });
});
