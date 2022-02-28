const BookModel = require('../../src/models/book.model');
const BookRoute = require('../../src/routes/book.route');

jest.mock('../../src/models/book.model.js');

describe('Routes :: Book', function () {
  it('should be instance expected', function () {
    BookRoute('server');

    const {
      methods,
      register,
      updateOptions,
    } = BookModel.mock.results[0].value;

    expect(methods).toHaveBeenCalled();
    expect(methods.mock.calls.length).toBe(1);
    expect(methods.mock.lastCall[0]).toIncludeAllMembers([
      'get',
      "post",
      'put',
      'delete',
    ]);

    expect(updateOptions).toHaveBeenCalled();
    expect(updateOptions.mock.calls.length).toBe(1);
    expect(updateOptions.mock.lastCall[0]).toContainAllKeys([
      'new',
      "runValidators",
    ]);
    expect(updateOptions.mock.lastCall[0].new).toBeTrue();
    expect(updateOptions.mock.lastCall[0].runValidators).toBeTrue();

    expect(register).toHaveBeenCalled();
    expect(register.mock.calls.length).toBe(1);
    expect(register.mock.lastCall[0]).toEqualCaseInsensitive('server');
    expect(register.mock.lastCall[1]).toEqualCaseInsensitive('/book');
  });
});
