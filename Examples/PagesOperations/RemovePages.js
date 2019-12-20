"use strict";

// This example demonstrates how to remove document pages
class RemovePages {
	static async Run() {
		
		let options = new merger_cloud.RemoveOptions();
		options.fileInfo = new merger_cloud.FileInfo();
		options.fileInfo.filePath = "WordProcessing/four-pages.docx";  
		options.outputPath = "Output/remove-pages.docx";
		options.pages = [2, 4];

		let result = await pagesApi.remove(new merger_cloud.RemoveRequest(options));

		console.log("Output file path: " + result.path);
	}
}
module.exports = RemovePages;