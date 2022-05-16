"use strict";
global.merger_cloud = require("groupdocs-merger-cloud");
global.fs = require("fs");
global.serializer_1 = require("groupdocs-merger-cloud/lib/serializer");

//// ***********************************************************
////          GroupDocs.Merger Cloud API Examples
//// ***********************************************************

//TODO: Get your ClientId and ClientSecret at https://dashboard.groupdocs.cloud (free registration is required).

global.clientId = "XXXX-XXXX-XXXX-XXXX";
global.clientSecret = "XXXXXXXXXXXXXXXX";
global.myStorage = "First Storage";

const config = new merger_cloud.Configuration(clientId, clientSecret);
config.apiBaseUrl = "https://api.groupdocs.cloud";

// construct DocumentApi
global.documentApi = merger_cloud.DocumentApi.fromConfig(config);

// construct PagesApi
global.pagesApi = merger_cloud.PagesApi.fromConfig(config);

// construct SecurityApi
global.securityApi = merger_cloud.SecurityApi.fromConfig(config);

// construct InfoApi
global.infoApi = merger_cloud.InfoApi.fromConfig(config);

// construct FileApi
global.fileApi = merger_cloud.FileApi.fromConfig(config);

// construct StorageApi
global.storageApi = merger_cloud.StorageApi.fromConfig(config);

// construct LicenseApi
global.licenseApi = merger_cloud.LicenseApi.fromConfig(config);

async function examples() {

    // Uploading sample test files to storage
    await require('./Utils').UploadTestFiles();

    // Get All Supported Formats
    await require('./GetSupportedFormats').Run();

    // Get Document Info
    await require('./GetDocumentInfo').Run();

    // Join Multiple Documents
    await require('./DocumentOperations/JoinMultipleDocuments').Run();

    // Join word documents in continous mode
    await require('./DocumentOperations/JoinWordDocumentsContinous').Run();    

    // Join Some Pages From Multiple Documents
    await require('./DocumentOperations/JoinPagesFromVariousDocuments').Run();    

    // Join multiple documents of various formats into one document.
    await require('./DocumentOperations/JoinDocumentsCrossFormat').Run();        

    // Import attachment into pdf document.
    await require('./DocumentOperations/ImportAttachment').Run();     
    
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

try {
    examples();    
} catch (error) {
    console.log(error);
}

