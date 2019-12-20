"use strict";

// This example demonstrates how to generate document pages preview
class PreviewDocument {
	static async Run() {
		
		let options = new merger_cloud.PreviewOptions();
		options.fileInfo = new merger_cloud.FileInfo();
		options.fileInfo.filePath = "WordProcessing/four-pages.docx";  
		options.outputPath = "Output/preview-page";
		options.pages = [1, 3];
		options.format = merger_cloud.PreviewOptions.FormatEnum.Png;

		let result = await documentApi.preview(new merger_cloud.PreviewRequest(options));

		console.log("Documents count: " + result.documents.length);
	}
}
module.exports = PreviewDocument;