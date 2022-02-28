const http = require('http');
const supertest = require("supertest");
const { random } = require('faker');
const { mongoose } = require('node-restful');
const server = require('../../src/server');

const requester = supertest(http.Server(server()));

jest.unmock('consign');
jest.mock('../../src/config/database/connection.js');

const book = {
  title: random.word(),
};

describe('Book', function () {
  beforeAll(function (done) {
    if(!mongoose.connection.db){
      mongoose.connection.on('connected', done);
    } else {
      done();
    }
  });

  beforeEach(async function () {
    await new mongoose.models.Book(book).save();
  });

  it('get', async function () {
    const { status, body } = await requester.get(`/book`);

    expect(status).toBe(200);
    expect(body).toBeArrayOfSize(1);
    body.forEach((element) => {
      expect(element).toContainEntries(Object.entries(book));
    });
  });

  it('get?title', async function () {
    const { status, body } = await requester.get(`/book`).query(book);

    expect(status).toBe(200);
    expect(body).toBeArrayOfSize(1);
    body.forEach((element) => {
      expect(element).toContainEntries(Object.entries(book));
    });
  });

  it('post', async function () {
    const mock = {
      title: random.word(),
    };

    const { status, body } = await requester.post(`/book`).send(mock);

    expect(status).toBe(201);
    expect(body).toBeObject();
    expect(body).toContainEntries(Object.entries(mock));
  });

  it('put/:id', async function () {
    const mock = {
      title: random.word(),
    };

    const { _id } = await mongoose.models.Book.findOne(book);
    const { status, body } = await requester.put(`/book/${_id}`).send(mock);

    expect(status).toBe(200);
    expect(body).toBeObject();
    expect(body).toContainEntries(Object.entries(mock));
  });

  it('delete/:id', async function () {
    const { _id } = await mongoose.models.Book.findOne(book);
    const { status } = await requester.delete(`/book/${_id}`);

    expect(status).toBe(204);
  });

  afterEach(async function () {
    await mongoose.models.Book.deleteMany({});
  });

  afterAll(async function () {
    await mongoose.connection.close();
  });
});
