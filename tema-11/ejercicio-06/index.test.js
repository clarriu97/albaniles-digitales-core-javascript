const { fetchPost } = require('./index');
const fetchMock = require('jest-fetch-mock');

beforeAll(() => {
    fetchMock.enableMocks(); // Enable fetch mocking
});

afterEach(() => {
    fetchMock.resetMocks(); // Reset fetch mocks after each test
});

test('fetchPost returns the expected response', () => {
    const mockResponse = {
        status: 200,
        body: { data: 'test data' },
    };

    fetchMock.mockResponse(JSON.stringify(mockResponse));

    return fetchPost().then(response => {
        expect(response).toEqual(mockResponse);
    });
});