const restful = require('node-restful');
const config = require('../../src/config/database/connection');

jest.mock('node-restful');

describe('Config :: Database :: Connection', function () {
  it('should be open connection', function () {
    config();

    expect(restful.mongoose.connect).toHaveBeenCalled();
    expect(restful.mongoose.connect.mock.calls.length).toBe(1);
  });
});
