"use strict";

// This example demonstrates how to extract document pages by specifying their numbers
class ExtractPagesByNumbers {
	static async Run() {
		
		let options = new merger_cloud.ExtractOptions();
		options.fileInfo = new merger_cloud.FileInfo();
		options.fileInfo.filePath = "WordProcessing/sample-10-pages.docx";  
		options.outputPath = "Output/extract-pages-by-numbers.docx";
		options.pages = [2, 4, 7];

		let result = await pagesApi.extract(new merger_cloud.ExtractRequest(options));

		console.log("Output file path: " + result.path);
	}
}
module.exports = ExtractPagesByNumbers;