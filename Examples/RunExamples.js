"use strict";
global.merger_cloud = require("groupdocs-merger-cloud");
global.fs = require("fs");
global.serializer_1 = require("groupdocs-merger-cloud/lib/serializer");

//// ***********************************************************
////          GroupDocs.Merger Cloud API Examples
//// ***********************************************************

//TODO: Get your AppSID and AppKey at https://dashboard.groupdocs.cloud (free registration is required).

global.appSid = "XXXX-XXXX-XXXX-XXXX";
global.appKey = "XXXXXXXXXXXXXXXX";
global.myStorage = "First Storage";

// construct DocumentApi
global.documentApi = merger_cloud.DocumentApi.fromKeys(appSid, appKey);

// construct PagesApi
global.pagesApi = merger_cloud.PagesApi.fromKeys(appSid, appKey);

// construct SecurityApi
global.securityApi = merger_cloud.SecurityApi.fromKeys(appSid, appKey);

// construct InfoApi
global.infoApi = merger_cloud.InfoApi.fromKeys(appSid, appKey);

// construct FileApi
global.fileApi = merger_cloud.FileApi.fromKeys(appSid, appKey);

// construct StorageApi
global.storageApi = merger_cloud.StorageApi.fromKeys(appSid, appKey);

async function examples() {

    // Uploading sample test files to storage
    await require('./Utils').UploadTestFiles();

    // Get All Supported Formats
    await require('./GetSupportedFormats').Run();

    // Get Document Info
    await require('./GetDocumentInfo').Run();

    // Join Multiple Documents
    await require('./DocumentOperations/JoinMultipleDocuments').Run();

    // Join Some Pages From Multiple Documents
    await require('./DocumentOperations/JoinPagesFromVariousDocuments').Run();    
    
    // Preview Document
    await require('./DocumentOperations/PreviewDocument').Run();

    // Split To Multi Page Documents
    await require('./DocumentOperations/SplitDocument/SplitToMultiPageDocuments').Run();

    // Split To Single Pages
    await require('./DocumentOperations/SplitDocument/SplitToSinglePages').Run();

    // Split To Single Pages By Range
    await require('./DocumentOperations/SplitDocument/SplitToSinglePagesByRange').Run();

    // Split To Single Pages By Range With Filter
    await require('./DocumentOperations/SplitDocument/SplitToSinglePagesByRangeWithFilter').Run();
    
    // Change Page Orientation
    await require('./PagesOperations/ChangePageOrientation').Run();
    
    // Move Page
    await require('./PagesOperations/MovePage').Run();

    // Remove Pages
    await require('./PagesOperations/RemovePages').Run();

    // Rotate Pages
    await require('./PagesOperations/RotatePages').Run();

    // Swap Pages
    await require('./PagesOperations/SwapPages').Run();

    // Extract Pages By Numbers
    await require('./PagesOperations/ExtractPages/ExtractPagesByNumbers').Run();

    // Extract Pages By Range
    await require('./PagesOperations/ExtractPages/ExtractPagesByRange').Run();    

    // Add Document Password
    await require('./SecurityOperations/AddDocumentPassword').Run();

    // Check Document Password
    await require('./SecurityOperations/CheckDocumentPasswordProtection').Run();

    // Remove Document Password
    await require('./SecurityOperations/RemoveDocumentPassword').Run();

    // Update Document Password
    await require('./SecurityOperations/UpdateDocumentPassword').Run();
}

examples();
