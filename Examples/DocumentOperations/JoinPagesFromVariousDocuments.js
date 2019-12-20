"use strict";

// This example demonstrates how to join specific pages from several source documents
class JoinPagesFromVariousDocuments {
	static async Run() {
		
		let item1 = new merger_cloud.JoinItem();
		item1.fileInfo = new merger_cloud.FileInfo();
		item1.fileInfo.filePath = "WordProcessing/sample-10-pages.docx";
		item1.pages = [3, 6, 8];

		let item2 = new merger_cloud.JoinItem();
		item2.fileInfo = new merger_cloud.FileInfo();
		item2.fileInfo.filePath = "WordProcessing/four-pages.docx";
		item2.startPageNumber = 1
		item2.endPageNumber = 4
		item2.rangeMode = merger_cloud.JoinItem.RangeModeEnum.OddPages;
		        
		let options = new merger_cloud.JoinOptions();
		options.joinItems = [item1, item2];
		options.outputPath = "Output/joined-pages.docx";

		let result = await documentApi.join(new merger_cloud.JoinRequest(options));

		console.log("Output file path: " + result.path);
	}
}
module.exports = JoinPagesFromVariousDocuments;