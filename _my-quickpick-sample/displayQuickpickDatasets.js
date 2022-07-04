const vscode = require('vscode');

const displayQuickpickDatasets = (output) => {
    const items = [
        { label: "Label 1" },
        {
            label: "Label 2",
            description: "Description 2"
        },
        {
            label: "Label 3",
            description: "Description 3",
            detail: "The detail for item no. 3"
        },
        { label: "Label 4", picked: true },
        { label: "Label 5", alwaysShow: true, descritpion: 'Always visible' },
    ];
    const quickpick = vscode.window.createQuickPick();
    quickpick.items = items;
    quickpick.placeholder = "A placeholder here";
    quickpick.ignoreFocusOut = false;
    // quickpick.canSelectMany = true;
    quickpick.matchOnDescription = true;
    quickpick.matchOnDetail = true;

    quickpick.onDidAccept(() => {
        output.appendLine(
            `Accepted ${quickpick.activeItems.map(item => item.label).join(', ')}`
        );
        output.appendLine(
            `Selected ${quickpick.selectedItems.map(item => item.label).join(', ')}`
        );
    });
    quickpick.onDidChangeActive(() => {
        output.appendLine(
            `Change Active: ${quickpick.activeItems.map(item => item.label).join(', ')}`
        );
    });
    quickpick.onDidChangeSelection(() => {
        output.appendLine(
            `Change Selection: ${quickpick.selectedItems.map(item => item.label).join(', ')}`
        );
    });
    quickpick.onDidChangeValue(() => {
        output.appendLine(
            `Current Value ${quickpick.value}`
        );
    });

    quickpick.show();
};
exports.displayQuickpickDatasets = displayQuickpickDatasets;
