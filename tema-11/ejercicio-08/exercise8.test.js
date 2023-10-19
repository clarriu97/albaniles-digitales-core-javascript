const { fetchPosts } = require('./index');

global.fetch = jest.fn();

const mockResponse = [
  { id: 1, title: 'Post 1', body: 'Body of Post 1' },
  { id: 2, title: 'Post 2', body: 'Body of Post 2' },
];

fetch.mockReturnValue(
  Promise.resolve({
    json: () => Promise.resolve(mockResponse),
  })
);

describe('fetchPosts', () => {
  it('fetches posts and populates the table', async () => {
    const table = document.createElement('table');
    table.id = 'table';

    document.body.appendChild(table);

    await fetchPosts();

    expect(table.rows.length).toBe(mockResponse.length);

    document.body.removeChild(table);
  });
});
