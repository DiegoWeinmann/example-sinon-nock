import chai, { expect } from 'chai';
import { getUser } from '../users.controller';
import nock from 'nock';
import mockHttp from 'node-mocks-http';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

let req = mockHttp.createRequest();
let res = mockHttp.createResponse();
let next: sinon.SinonSpy;

let sandbox = sinon.createSandbox();

describe('users.controller', () => {
  beforeEach(() => {
    req = mockHttp.createRequest();
    res = mockHttp.createResponse();
    next = sandbox.spy();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('response with user data', async () => {
    nock('https://jsonplaceholder.typicode.com')
      .get('/users/1')
      .reply(200, { test: 'test' });

    await getUser(req, res, next);

    expect(res._isEndCalled()).to.be.true;
    expect(res._getJSONData()).to.eql({
      success: true,
      data: {
        test: 'test',
      },
    });
  });

  it('handles an axios error', async () => {
    const errorResponse = {
      success: false,
      error: 'user not found',
    };
    nock('https://jsonplaceholder.typicode.com')
      .get('/users/1')
      .replyWithError(errorResponse);
    await getUser(req, res, next);

    expect(next).to.have.been.calledOnce;
    expect(next).to.have.been.calledWith(errorResponse);
  });
});
