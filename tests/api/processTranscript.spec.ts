import { test, expect } from '@playwright/test';

test('Create Transcript', async ({ request }) => {

    const response = await request.post(
        'https://jsonplaceholder.typicode.com/posts', //dummy endpoint for testing
        {
            data: {
                title: 'Transcript',
                body: 'Sample transcript',
                userId: 1
            }
        }
    );

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body.id).toBeDefined();

});