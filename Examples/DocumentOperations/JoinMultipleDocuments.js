"use strict";

// This example demonstrates how to join multiple documents into one document
class JoinMultipleDocuments {
	static async Run() {
		
		let item1 = new merger_cloud.JoinItem();
		item1.fileInfo = new merger_cloud.FileInfo();
		item1.fileInfo.filePath = "WordProcessing/four-pages.docx";

		let item2 = new merger_cloud.JoinItem();
		item2.fileInfo = new merger_cloud.FileInfo();
		item2.fileInfo.filePath = "WordProcessing/one-page.docx";    

		let options = new merger_cloud.JoinOptions();
		options.joinItems = [item1, item2];
		options.outputPath = "Output/joined.docx";

		let result = await documentApi.join(new merger_cloud.JoinRequest(options));

		console.log("Output file path: " + result.path);
	}
}
module.exports = JoinMultipleDocuments;