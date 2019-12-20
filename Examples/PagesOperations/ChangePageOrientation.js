"use strict";

// This example demonstrates how to change document page orientation
class ChangePageOrientation {
	static async Run() {
		
		let options = new merger_cloud.OrientationOptions();
		options.fileInfo = new merger_cloud.FileInfo();
		options.fileInfo.filePath = "WordProcessing/four-pages.docx";  
		options.outputPath = "Output/change-page-orientation.docx";
		options.pages = [2, 4];
		options.mode = merger_cloud.OrientationOptions.ModeEnum.Landscape;

		let result = await pagesApi.orientation(new merger_cloud.OrientationRequest(options));

		console.log("Output file path: " + result.path);
	}
}
module.exports = ChangePageOrientation;