import test, { expect } from "@playwright/test";

test("Validate timestamp order", () => {

    // Arrange
    const words = [
        { word: "I", start: 4560 },
        { word: "am", start: 4560 }
    ];

    // Act
    const result =
        validateTimestamps(words);

    // Assert
    expect(result.isValid)
        .toBe(false);

});

function validateTimestamps(words: { word: string; start: number; }[]): { isValid: boolean } {
    const isValid = words.every((word, index) => index === 0 || word.start >= words[index - 1].start);
    return { isValid };
}
