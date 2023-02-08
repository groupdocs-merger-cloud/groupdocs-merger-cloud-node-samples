"use strict";

// This example demonstrates how to join images.
class JoinImages {
	static async Run() {
		
		let item1 = new merger_cloud.JoinItem();
		item1.fileInfo = new merger_cloud.FileInfo();
		item1.fileInfo.filePath = "Img/task1.jpg";

		let item2 = new merger_cloud.JoinItem();
		item2.fileInfo = new merger_cloud.FileInfo();
		item2.fileInfo.filePath = "Img/task2.jpg";    
		item2.imageJoinMode = merger_cloud.JoinItem.ImageJoinModeEnum.Vertical;

		let options = new merger_cloud.JoinOptions();
		options.joinItems = [item1, item2];
		options.outputPath = "Output/joined.jpg";

		let result = await documentApi.join(new merger_cloud.JoinRequest(options));

		console.log("Output file path: " + result.path);
	}
}
module.exports = JoinImages;