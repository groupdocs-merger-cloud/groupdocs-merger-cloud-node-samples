"use strict";

// This example demonstrates how to join word document continously, without adding new page between documents.
class JoinWordDocumentsContinous {
	static async Run() {
		
		let item1 = new merger_cloud.JoinItem();
		item1.fileInfo = new merger_cloud.FileInfo();
		item1.fileInfo.filePath = "WordProcessing/four-pages.docx";

		let item2 = new merger_cloud.JoinItem();
		item2.fileInfo = new merger_cloud.FileInfo();
		item2.fileInfo.filePath = "WordProcessing/one-page.docx";    
		item2.wordJoinMode = merger_cloud.JoinItem.WordJoinModeEnum.Continuous;

		let options = new merger_cloud.JoinOptions();
		options.joinItems = [item1, item2];
		options.outputPath = "Output/joined_continous.docx";

		let result = await documentApi.join(new merger_cloud.JoinRequest(options));

		console.log("Output file path: " + result.path);
	}
}
module.exports = JoinWordDocumentsContinous;