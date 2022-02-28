const morgan = require('morgan');;
const config = require('../../src/config/middlewares/morgan');

jest.mock('morgan');

describe('Config :: Middlewares :: Morgan', function () {
  it('should be config morgan', function () {
    const use = jest.fn();

    config({ use });

    expect(morgan).toHaveBeenCalled();
    expect(morgan.mock.calls.length).toBe(1);

    expect(use).toHaveBeenCalled();
    expect(use.mock.calls.length).toBe(1);
  });
});
