import { test, expect } from "@playwright/test";

test("Prevent skipped workflow transition", () => {

    // Arrange
    const currentStatus =
        "ASSIGNED";

    const nextStatus =
        "COMPLETED";

    // Act
    const result =
        validateWorkflowTransition(
            currentStatus,
            nextStatus
        );

    // Assert
    expect(result.allowed)
        .toBe(false);

});

function validateWorkflowTransition(currentStatus: string, nextStatus: string) {
    // Define workflow order
    const workflow = [
        "ASSIGNED",
        "IN_PROGRESS",
        "COMPLETED",
    ];

    const currentIndex = workflow.indexOf(currentStatus);
    const nextIndex = workflow.indexOf(nextStatus);

    // If either status is unknown, disallow
    if (currentIndex === -1 || nextIndex === -1) {
        return { allowed: false };
    }

    // Allow only transitions to the immediate next status (no skipping backwards/forwards)
    return { allowed: nextIndex === currentIndex + 1 };
}
