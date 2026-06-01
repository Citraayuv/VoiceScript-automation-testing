import test, { expect } from "@playwright/test";

test("Validate entity consistency", () => {

    // Arrange
    const metadataEntity =
        "Cannon Farms";

    const transcriptEntity =
        "Cancun Farms";

    // Act
    const result =
        compareEntities(
            metadataEntity,
            transcriptEntity
        );

    // Assert
    expect(result.isMatch)
        .toBe(false);

});

function compareEntities(metadataEntity: string, transcriptEntity: string) {
    return {
        isMatch: metadataEntity === transcriptEntity,
    };
}
