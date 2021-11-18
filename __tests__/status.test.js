const server = require('../server.js');
const supertest = require('supertest');
const { beforeAll } = require('@jest/globals');
const requestWithSupertest = supertest(server);

beforeAll(done => {
    server.on("app_started", function () {
        done()
    })
})
describe('Current Status', () => {

    it('GET /status should return the current status', async () => {
        const res = await requestWithSupertest.get('/api/v1/status');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toEqual({
            success: true,
            open: true
        });
    });

});

describe('Set open', () => {

    it('PUT /status/open should set the status open to true', async () => {
        const res = await requestWithSupertest.put('/api/v1/status/open').send({ apiSecret: "123" });
        expect(res.status).toEqual(201);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toEqual({
            success: true,
            open: true
        });
    });

});


describe('Set open without API_SECRET', () => {

    it('PUT /status/open with wrong secret should return API Error', async () => {
        const res = await requestWithSupertest.put('/api/v1/status/open');
        expect(res.status).toEqual(401);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toEqual({
            success: false,
            error: "Invalid API SECRET"
        });
    });

});

describe('Set open with wrong API_SECRET', () => {

    it('PUT /status/open with wrong secret should return API Error', async () => {
        const res = await requestWithSupertest.put('/api/v1/status/open').send({ apiSecret: "1337" });
        expect(res.status).toEqual(401);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toEqual({
            success: false,
            error: "Invalid API SECRET"
        });
    });

});

describe('Set close', () => {

    it('PUT /status/close should set the status open to false', async () => {
        const res = await requestWithSupertest.put('/api/v1/status/close').send({ apiSecret: "123" });
        expect(res.status).toEqual(201);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toEqual({
            success: true,
            open: false
        });
    });

});

describe('Set close without API_SECRET', () => {

    it('PUT /status/close with wrong secret should return API Error', async () => {
        const res = await requestWithSupertest.put('/api/v1/status/open');
        expect(res.status).toEqual(401);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toEqual({
            success: false,
            error: "Invalid API SECRET"
        });
    });

});

describe('Set close with wrong API_SECRET', () => {

    it('PUT /status/close with wrong secret should return API Error', async () => {
        const res = await requestWithSupertest.put('/api/v1/status/open').send({ apiSecret: "1337" });
        expect(res.status).toEqual(401);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toEqual({
            success: false,
            error: "Invalid API SECRET"
        });
    });

});

describe('Should return 404', () => {
    it('GET should return 404', async () => {
        const res = await requestWithSupertest.get('/abc');
    });
});