const vscode = require('vscode');
const { displayQuickpickDatasets } = require("./displayQuickpickDatasets");
const { displayQuickpickExample } = require("./displayQuickpickExample");

let output;
exports.output = output;

function activate(context) {
	console.log('Congratulations, your extension "helloworld-minimal-sample" is now active!');
	output = vscode.window.createOutputChannel("Hello World Minimal Sample");
	// output.show();

	const disposables = [
		vscode.commands.registerCommand('extension.quickpickDatasets', () => {
			displayQuickpickDatasets(output)
		}),
		vscode.commands.registerCommand('extension.quickpickExample', () => {
			displayQuickpickExample(output)
		}),
	];

	context.subscriptions.push(disposables);
}

function deactivate() { }

module.exports = {
	activate,
	deactivate
}
