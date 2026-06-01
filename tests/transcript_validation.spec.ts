import test, { expect } from "@playwright/test";

test("Detect duplicate transcript lines", () => {

    // Arrange
    const transcript = [
        "THE REPORTER: Absolutely.",
        "THE REPORTER: Absolutely."
    ];

    // Act
    const result =
        validateTranscript(transcript);

    // Assert
    expect(result.hasDuplicateLines)
        .toBe(true);

});

function validateTranscript(transcript: string[]) {
    return {
        hasDuplicateLines: new Set(transcript).size !== transcript.length
    };
}
