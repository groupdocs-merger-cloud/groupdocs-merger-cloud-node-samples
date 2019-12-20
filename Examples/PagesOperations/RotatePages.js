"use strict";

// This example demonstrates how to rotate document pages
class RotatePages {
	static async Run() {
		
		let options = new merger_cloud.RotateOptions();
		options.fileInfo = new merger_cloud.FileInfo();
		options.fileInfo.filePath = "Pdf/ten-pages.pdf";  
		options.outputPath = "Output/rotate-pages.pdf";
		options.pages = [2, 4];
		options.mode = merger_cloud.RotateOptions.ModeEnum.Rotate90;

		let result = await pagesApi.rotate(new merger_cloud.RotateRequest(options));

		console.log("Output file path: " + result.path);
	}
}
module.exports = RotatePages;