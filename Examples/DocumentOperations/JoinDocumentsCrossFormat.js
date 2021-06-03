"use strict";

// This example demonstrates how to join multiple documents of various formats into one document.
class JoinDocumentsCrossFormat {
	static async Run() {
		
		let item1 = new merger_cloud.JoinItem();
		item1.fileInfo = new merger_cloud.FileInfo();
		item1.fileInfo.filePath = "Pdf/one-page-password.pdf";
		item1.fileInfo.password = "password";

		let item2 = new merger_cloud.JoinItem();
		item2.fileInfo = new merger_cloud.FileInfo();
		item2.fileInfo.filePath = "WordProcessing/one-page.docx";    

		let options = new merger_cloud.JoinOptions();
		options.joinItems = [item1, item2];
		options.outputPath = "Output/joined.pdf";

		let result = await documentApi.join(new merger_cloud.JoinRequest(options));

		console.log("Output file path: " + result.path);
	}
}
module.exports = JoinDocumentsCrossFormat;