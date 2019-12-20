"use strict";

// This example demonstrates how to split the document to several one-page documents (by start/end page numbers and even/odd filter)
class SplitToSinglePagesByRangeWithFilter {
	static async Run() {
		
		let options = new merger_cloud.SplitOptions();
		options.fileInfo = new merger_cloud.FileInfo();
		options.fileInfo.filePath = "WordProcessing/sample-10-pages.docx";  
		options.outputPath = "Output/split-by-start-end-numbers-with-filter";
		options.startPageNumber = 3;
		options.endPageNumber = 7;
		options.rangeMode = merger_cloud.SplitOptions.RangeModeEnum.OddPages;
		options.mode = merger_cloud.SplitOptions.ModeEnum.Pages;

		let result = await documentApi.split(new merger_cloud.SplitRequest(options));

		console.log("Documents count: " + result.documents.length);
	}
}
module.exports = SplitToSinglePagesByRangeWithFilter;