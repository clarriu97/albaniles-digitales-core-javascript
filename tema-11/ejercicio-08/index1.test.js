const { getNumberOfPosts, getPostTittles } = require('./index');
const fetchMock = require('jest-fetch-mock');

beforeAll(() => {
    fetchMock.enableMocks(); // Enable fetch mocking
});

afterEach(() => {
    fetchMock.resetMocks();  // Reset fetch mocks after each test
});

test('getNumberOfPosts', () => {
    const mockResponse = [{}, {}, {}];
    fetchMock.mockResponse(JSON.stringify(mockResponse));

    return getNumberOfPosts().then(response => {
        expect(response).toEqual(3);
    });
});

test('getPostTittles', () => {
    const mockResponse = [{ title: 'title1' }, { title: 'title2' }, { title: 'title3' }];
    fetchMock.mockResponse(JSON.stringify(mockResponse));

    return getPostTittles().then(response => {
        expect(response).toEqual(['title1', 'title2', 'title3']);
    });
});
