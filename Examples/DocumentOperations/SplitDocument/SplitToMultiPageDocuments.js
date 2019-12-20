"use strict";

// This example demonstrates how to split the document to several multi-page documents by specified page ranges
class SplitToMultiPageDocuments {
	static async Run() {
		
		let options = new merger_cloud.SplitOptions();
		options.fileInfo = new merger_cloud.FileInfo();
		options.fileInfo.filePath = "WordProcessing/sample-10-pages.docx";  
		options.outputPath = "Output/split-to-multipage-document";
		options.pages = [3, 6, 8];
		options.mode = merger_cloud.SplitOptions.ModeEnum.Intervals;

		let result = await documentApi.split(new merger_cloud.SplitRequest(options));

		console.log("Documents count: " + result.documents.length);
	}
}
module.exports = SplitToMultiPageDocuments;