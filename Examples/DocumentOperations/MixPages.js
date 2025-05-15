"use strict";

// This example demonstrates how to mix specific pages from several source documents
class MixPages {
    static async Run() {

        let file1 = new merger_cloud.FileInfo();
        file1.filePath = "WordProcessing/sample-10-pages.docx";

        let file2 = new merger_cloud.FileInfo();
        file2.filePath = "WordProcessing/four-pages.docx";

        let files = [file1, file2];

        let filesPages = [
            new merger_cloud.MixPagesItem({ fileIndex: 0, pages: [1, 2] }),
            new merger_cloud.MixPagesItem({ fileIndex: 1, pages: [1, 2] }),
            new merger_cloud.MixPagesItem({ fileIndex: 0, pages: [3, 4] })
        ];

        let options = new merger_cloud.MixPagesOptions();
        options.files = files;
        options.filesPages = filesPages;
        options.outputPath = "Output/mixed-pages.docx";

        let request = new merger_cloud.MixRequest(options);
        let result = await documentApi.mix(request);

        console.log("Output file path: " + result.path);
    }
}
module.exports = MixPages;