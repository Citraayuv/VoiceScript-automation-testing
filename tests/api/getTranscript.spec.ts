import { test, expect } from '@playwright/test';

test('Get Transcript', async ({ request }) => {

    const response = await request.get(
        'https://jsonplaceholder.typicode.com/posts/1' //dummy endpoint for testing
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(1);

});