import { App, Editor, moment, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

// Settings 接口
interface URLEncodeSettings {
	defaultUrl: string;
}
// Settings 初始值
const DEFAULT_SETTINGS: URLEncodeSettings = {
	defaultUrl: 'default'
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
			  editor.replaceSelection(this.settings.defaultUrl + encodeURI(selection.replace(/\\/g,'/')).replace(/\//g,"%2f").replace('#',"%23"));
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
			.setName('默认url')
			.setDesc('默认url会自动拼接文件路径 如 默认url为 https://www.baidu.com 文件路径为 /1/2/3.jpg 最终路径为 https://www.baidu.com/1/2/3.jpg')
			.addText(text => text
				.setPlaceholder('请输入默认 url')
				.setValue(this.plugin.settings.defaultUrl)
				.onChange(async (value) => {
					console.log('URL: ' + value);
					this.plugin.settings.defaultUrl = value;
					await this.plugin.saveSettings();
				}));
	}
}
