"use strict";
class GetDocumentInfo {
	static async Run() {
		let fileInfo = new merger_cloud.FileInfo();
		fileInfo.filePath = "WordProcessing/password-protected.docx";
		fileInfo.password = "password";
		fileInfo.storageName = myStorage;
		let request = new merger_cloud.GetInfoRequest(fileInfo);
		let response = await infoApi.getInfo(request);
		console.log("GetDocumentInfo: Page Count = " + response.pages.length);
	}
}
module.exports = GetDocumentInfo;
