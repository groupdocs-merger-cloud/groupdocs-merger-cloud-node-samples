"use strict";

// This example demonstrates how to import attachment into pdf document
class ImportAttachment {
	static async Run() {

		let options = new merger_cloud.ImportOptions();
		options.fileInfo = new merger_cloud.FileInfo();
		options.fileInfo.filePath = "Pdf/one-page-password.pdf";
		options.fileInfo.password = "password";		
		options.attachments = ["Txt/document.txt"];
		options.outputPath = "Output/with-attachment.pdf";

		let result = await documentApi._import(new merger_cloud.ImportRequest(options));

		console.log("Output file path: " + result.path);
	}
}
module.exports = ImportAttachment;