import { Component } from '@angular/core';
var testData = require('../assets/testdata.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	currentStageId = 7005;
	data = {
		"campaignName": "Holiday 2018",
		"stages": testData,
	};

	onChangeStageId(id) {
		this.currentStageId = id;
	}

	decodeMarkdown(encodedText) {
		let boldDecode = /\*[^\*]*\*/g; // Targets substrings contained between *paired asterisks*
		let italicDecode = /_[^_]*_/g;  // Targets substrings contained between _paired underscores_
		return encodedText.replace(boldDecode, match => `<strong>${match.slice(1, -1)}</strong>`)
						  .replace(italicDecode, match => `<em>${match.slice(1, -1)}</em>`);

	}
}