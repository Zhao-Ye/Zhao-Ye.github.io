import { App, Editor, moment, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

// Settings 接口
interface URLEncodeSettings {
	mySetting: string;
}
// Settings 初始值
const DEFAULT_SETTINGS: URLEncodeSettings = {
	mySetting: 'default'
}

export default class URLEncode extends Plugin {
	settings: URLEncodeSettings;

	async onload() {
		await this.loadSettings();

		// url编码命令
		this.addCommand({
			id: "convert-to-urlencode",
			name: "URL编码",
			editorCallback: (editor: Editor) => {
			  const selection = editor.getSelection();
			  editor.replaceSelection(encodeURI(selection.replace(/\\/g,'/')).replace(/\//g,"%2f").replace('#',"%23"));
			},
		  });


		// 添加设置页面
		this.addSettingTab(new SampleSettingTab(this.app, this));
	}

	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}

class SampleModal extends Modal {
	constructor(app: App) {
		super(app);
	}

	onOpen() {
		const {contentEl} = this;
		contentEl.setText('Woah!');
	}

	onClose() {
		const {contentEl} = this;
		contentEl.empty();
	}
}

class SampleSettingTab extends PluginSettingTab {
	plugin: URLEncode;

	constructor(app: App, plugin: URLEncode) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		containerEl.createEl('h2', {text: 'Url 转码设置'});

		new Setting(containerEl)
			.setName('设置')
			.setDesc('It\'s a secret')
			.addText(text => text
				.setPlaceholder('Enter your secret')
				.setValue(this.plugin.settings.mySetting)
				.onChange(async (value) => {
					console.log('Secret: ' + value);
					this.plugin.settings.mySetting = value;
					await this.plugin.saveSettings();
				}));
	}
}
