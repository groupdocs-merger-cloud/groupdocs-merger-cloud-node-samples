"use strict";

class Utils {
	
	static async UploadTestFile(filePath)
	{
		let resourcesFolder = './Resources/';
		let existResponse = await storageApi.objectExists(new merger_cloud.ObjectExistsRequest(filePath, myStorage));
			
		if (existResponse.exists === false) {
			var file = fs.readFileSync(resourcesFolder + filePath);
			var uploadRequest = new merger_cloud.UploadFileRequest(filePath, file);
			await fileApi.uploadFile(uploadRequest);
			console.log("Uploaded: " + filePath);
		}			
	}

	static async UploadTestFiles()
	{
		await this.UploadTestFile("WordProcessing/one-page.docx");
		await this.UploadTestFile("WordProcessing/four-pages.docx");
		await this.UploadTestFile("WordProcessing/password-protected.docx");
		await this.UploadTestFile("WordProcessing/sample-10-pages.docx");
		await this.UploadTestFile("Pdf/ten-pages.pdf");
		await this.UploadTestFile("Pdf/one-page-password.pdf");
	}	
}

module.exports = Utils;
