import test, { expect } from "@playwright/test";

test("Preserve legal terminology", () => {

    // Arrange
    const originalText =
        "Asked and answered";

    const processedText =
        "Aston answered";

    // Act
    const result =
        compareText(
            originalText,
            processedText
        );

    // Assert
    expect(result.isEquivalent)
        .toBe(false);

});

function compareText(originalText: string, processedText: string): { isEquivalent: boolean } {
    // Simple comparison: consider texts equivalent only when identical
    return {
        isEquivalent: originalText === processedText,
    };
}
