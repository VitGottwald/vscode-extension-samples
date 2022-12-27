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
    quickpick.ignoreFocusOut = true;

    const getActive = () => quickpick.activeItems.map(item => item.label).join(', ');
    const getSelected = () => quickpick.selectedItems.map(item => item.label).join(', ')
    const getValue = () => quickpick.value;

    quickpick.onDidAccept(() => {
        output.appendLine('onDidAccept:')
        output.appendLine(
            `  activeItems: ${getActive()}`
        );
        output.appendLine(
            `  selectedItems ${getSelected()}`
        );
    });
    quickpick.onDidChangeActive(() => {
        output.appendLine('onDidAccept:')
        output.appendLine(
            `  activeItems: ${getActive()}`
        );
    });
    quickpick.onDidChangeSelection(() => {
        output.appendLine('onDidChangeSelection')
        output.appendLine(
            `  selectedItems: ${getSelected()}`
        );
    });
    quickpick.onDidChangeValue(() => {
        output.appendLine('onDidChangeValue')
        output.appendLine(
            `  value: ${getValue()}`
        );
        const items = items.filter(item => !item.sythetic)
        items.push({ label: `+Add dataset: ${value}`, synthetic: true })
        // quickpick.items = items;
        quickpick.items = [{ label: 'karel' }]
    });

    quickpick.show();
};
exports.displayQuickpickDatasets = displayQuickpickDatasets;
