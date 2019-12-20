"use strict";

// This example demonstrates how to split the document to several multi-page documents by specified page ranges
class SplitToSinglePages {
	static async Run() {
		
		let options = new merger_cloud.SplitOptions();
		options.fileInfo = new merger_cloud.FileInfo();
		options.fileInfo.filePath = "WordProcessing/sample-10-pages.docx";  
		options.outputPath = "Output/split-document";
		options.pages = [1, 3];
		options.mode = merger_cloud.SplitOptions.ModeEnum.Pages;

		let result = await documentApi.split(new merger_cloud.SplitRequest(options));

		console.log("Documents count: " + result.documents.length);
	}
}
module.exports = SplitToSinglePages;