const restful = require('node-restful');
const BookModel = require('../../src/models/book.model');

jest.mock('node-restful', function () {
  return {
    model: jest.fn(function (name, schema) {
      return {
        name,
        schema,
      };
    }),
  };
});

describe('Models :: Book', function () {
  it('should be a valid model', function () {
    const { name, schema } = BookModel();

    expect(restful.model).toHaveBeenCalled();
    expect(restful.model.mock.calls.length).toBe(1);

    expect(name).toBe('Book');

    expect(schema).toHaveProperty('title');
    expect(schema.title).toMatchObject({
      type: String,
      required: true,
    });

    expect(schema).toHaveProperty('pages', Number);
    expect(schema).toHaveProperty('gender', String);
    expect(schema).toHaveProperty('summary', String);
    expect(schema).toHaveProperty('authors', [String]);
  });
});
