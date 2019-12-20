"use strict";

// This example demonstrates how to check document password
class CheckDocumentPasswordProtection {
	static async Run() {
		
		let result = await securityApi.checkPassword(new merger_cloud.CheckPasswordRequest("WordProcessing/password-protected.docx"));

		console.log("Check password: " + result.isPasswordSet);
	}
}
module.exports = CheckDocumentPasswordProtection;