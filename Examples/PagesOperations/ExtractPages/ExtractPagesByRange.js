"use strict";

// This example demonstrates how to extract document pages by specifying page numbers range
class ExtractPagesByRange {
	static async Run() {
		
		let options = new merger_cloud.ExtractOptions();
		options.fileInfo = new merger_cloud.FileInfo();
		options.fileInfo.filePath = "WordProcessing/sample-10-pages.docx";  
		options.outputPath = "Output/extract-pages-by-range.docx";
		options.startPageNumber = 1;
		options.endPageNumber = 10;
		options.rangeMode = merger_cloud.ExtractOptions.RangeModeEnum.EvenPages;

		let result = await pagesApi.extract(new merger_cloud.ExtractRequest(options));

		console.log("Output file path: " + result.path);
	}
}
module.exports = ExtractPagesByRange;