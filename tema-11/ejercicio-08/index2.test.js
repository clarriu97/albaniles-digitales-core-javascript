/**
 * @jest-environment jsdom
 */
const { insertContentIntoTable } = require('./index');
const fetchMock = require('jest-fetch-mock');

beforeAll(() => {
    fetchMock.enableMocks(); // Enable fetch mocking
});

afterEach(() => {
    fetchMock.resetMocks();  // Reset fetch mocks after each test
});

test('insertContentIntoTable', () => {
    const mockResponse = [{ title: 'title1' }, { title: 'title2' }, { title: 'title3' }];
    fetchMock.mockResponse(JSON.stringify(mockResponse));

    document.body.innerHTML = `
        <table id="table">
            <tr>
                <th>Title</th>
                <th>Body</th>
            </tr>
        </table>
    `;

    return insertContentIntoTable().then(() => {
        console.log();
        expect(document.getElementById('table').rows.length).toEqual(4);
    });
});
