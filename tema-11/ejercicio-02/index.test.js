const { fetchGoogle } = require('./index.js');

describe('fetchGoogle', () => {
    afterEach(() => {
        jest.restoreAllMocks(); // Restore all mocks after each test
    });

    it('fetches Google content successfully', async () => {
        const mockResponse = '<html>Google Page Content</html>';
        jest.spyOn(global, 'fetch').mockResolvedValue({
            text: jest.fn().mockResolvedValue(mockResponse),
        });

        const result = await fetchGoogle();
        expect(result).toBe(mockResponse);
    });

    it('handles fetch error', async () => {
        const mockError = new Error('Fetch Error');
        jest.spyOn(global, 'fetch').mockRejectedValue(mockError);

        try {
            await fetchGoogle();
        } catch (error) {
            expect(error.message).toBe('Failed to fetch Google: Fetch Error');
        }
    });
});