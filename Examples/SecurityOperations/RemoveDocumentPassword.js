"use strict";

// This example demonstrates how to remove document password
class RemoveDocumentPassword {
	static async Run() {
		
		let options = new merger_cloud.Options();
		options.fileInfo = new merger_cloud.FileInfo();
		options.fileInfo.filePath = "WordProcessing/password-protected.docx";  
		options.fileInfo.password = "password";  
		options.outputPath = "Output/remove-password.docx";

		let result = await securityApi.removePassword(new merger_cloud.RemovePasswordRequest(options));

		console.log("Output file path: " + result.path);
	}
}
module.exports = RemoveDocumentPassword;