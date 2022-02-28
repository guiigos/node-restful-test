const cors = require('cors');
const config = require('../../src/config/middlewares/cors');

jest.mock('cors');

describe('Config :: Middlewares :: Cors', function () {
  it('should be config cors', function () {
    const use = jest.fn();

    config({ use });

    expect(cors).toHaveBeenCalled();
    expect(cors.mock.calls.length).toBe(1);

    expect(use).toHaveBeenCalled();
    expect(use.mock.calls.length).toBe(1);
  });
});
