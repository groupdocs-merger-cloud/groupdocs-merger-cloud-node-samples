"use strict";

// This example demonstrates how to update document password
class UpdateDocumentPassword {
	static async Run() {
		
		let options = new merger_cloud.UpdatePasswordOptions();
		options.fileInfo = new merger_cloud.FileInfo();
		options.fileInfo.filePath = "WordProcessing/password-protected.docx";  
		options.fileInfo.password = "password";  
		options.outputPath = "Output/update-password.docx";
		options.newPassword = "NewPassword";

		let result = await securityApi.updatePassword(new merger_cloud.UpdatePasswordRequest(options));

		console.log("Output file path: " + result.path);
	}
}
module.exports = UpdateDocumentPassword;