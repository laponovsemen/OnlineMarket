export function selectByTestId(testId: string ) {
    return `[data-testId="${testId}"]`;
}

export function selectBySelected(selectedValue: string ) {
    return `[data-selected=${selectedValue}]`;
}
