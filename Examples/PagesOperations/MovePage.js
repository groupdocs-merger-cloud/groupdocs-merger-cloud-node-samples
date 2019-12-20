"use strict";

// This example demonstrates how to move document page to a new position
class MovePage {
	static async Run() {
		
		let options = new merger_cloud.MoveOptions();
		options.fileInfo = new merger_cloud.FileInfo();
		options.fileInfo.filePath = "WordProcessing/four-pages.docx";  
		options.outputPath = "Output/move-pages.docx";
		options.pageNumber = 1;
		options.newPageNumber = 2;

		let result = await pagesApi.move(new merger_cloud.MoveRequest(options));

		console.log("Output file path: " + result.path);
	}
}
module.exports = MovePage;