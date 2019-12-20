"use strict";

// This example demonstrates how to swap document pages
class SwapPages {
	static async Run() {
		
		let options = new merger_cloud.SwapOptions();
		options.fileInfo = new merger_cloud.FileInfo();
		options.fileInfo.filePath = "WordProcessing/four-pages.docx";  
		options.outputPath = "Output/swap-pages.docx";
		options.firstPageNumber = 2;
		options.secondPageNumber = 4;

		let result = await pagesApi.swap(new merger_cloud.SwapRequest(options));

		console.log("Output file path: " + result.path);
	}
}
module.exports = SwapPages;