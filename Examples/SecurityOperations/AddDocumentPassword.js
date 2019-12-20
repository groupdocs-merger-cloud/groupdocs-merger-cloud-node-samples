"use strict";

// This example demonstrates how to add password to document
class AddDocumentPassword {
	static async Run() {
		
		let options = new merger_cloud.Options();
		options.fileInfo = new merger_cloud.FileInfo();
		options.fileInfo.filePath = "WordProcessing/one-page.docx";  
		options.fileInfo.password = "Password";  
		options.outputPath = "Output/add-password.docx";

		let result = await securityApi.addPassword(new merger_cloud.AddPasswordRequest(options));

		console.log("Output file path: " + result.path);
	}
}
module.exports = AddDocumentPassword;