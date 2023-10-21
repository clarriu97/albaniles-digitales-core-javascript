const { fetchPost } = require('./index');
const fetchMock = require('jest-fetch-mock');

beforeAll(() => {
    fetchMock.enableMocks(); // Enable fetch mocking
});

afterEach(() => {
    fetchMock.resetMocks();  // Reset fetch mocks after each test
});

test('fetchPost returns the expected response', () => {
    const mockResponse = {
        status: 200,
        body: { data: 'test data' },
    };

    fetchMock.mockResponse(JSON.stringify(mockResponse));

    return fetchPost(1).then(response => {
        expect(response).toEqual(mockResponse);
    });
});

test('fetchPost throws an error if input is not an integer', () => {
    expect(() => fetchPost('not an integer')).toThrowError('Invalid post number');
});
