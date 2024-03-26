// 1.    Endpoint 1: Existing script for API testing
var jsonData = pm.response.text().trim();
var responseBody;
function extractInstanceId(inputString) {
 // Define the regular expression pattern to match the InstanceId
 const pattern = /InstanceId:\s*([a-fA-F0-9-]+)/;
 // Use RegExp.exec() to search for the pattern in the input string
 const match = pattern.exec(inputString);
 // Check if a match is found and return the InstanceId value
 if (match && match.length > 1) {
  return match[1]; // Return the value captured in the first group
 } else {
  return null; // Return null if no match is found
 }
}

function extractOutcomeCode(inputString) {
 // Define the regular expression pattern to match the outcomeCode
 const pattern = /outcomeCode:\s*(\d+)/;
 // Use RegExp.exec() to search for the pattern in the input string
 const match = pattern.exec(inputString);
 // Check if a match is found and return the outcomeCode value
 if (match && match.length > 1) {
  return match[1]; // Return the value captured in the first group
 } else {
  return null; // Return null if no match is found
 }
}

pm.test("Status code is 200", function () {
  pm.expect(pm.response.code).to.equal(200);
});

pm.test("Response contains expected InstanceId", function () {
  pm.expect(extractInstanceId(jsonData)).to.equal("925ce00a-94b7-47a4-8d01-d1d92e5b118f");
});

pm.test("Response contains expected outcomeCode", function () {
  pm.expect(extractOutcomeCode(jsonData)).to.equal("20001");
});

 
//The above script was written for the below response body
// {
//     "Message": "Hello, this is a notification message.",
//     "InstanceId": "8c9ca1c7-a0e1-40fe-88b9-0aec29a668ec",
//     "statusCode": "200",
//     "outcomeCode": "20001",
//     "outcomeMessage": "Flight Options Available",
//     "outcomeDetailedDescription": null
// }

// 2.    Endpoint 2 – Revalidation endpoint
// Response body
// {
//     "brand": "COLLETTE",
//     "instanceId": "1e414dfe-8035-464a-90f9-cc5df062f2a8",
//     "originalFlightOptionId": "aa3d61d2-ba65-481e-afcb-1a42152e0267",
//     "revalidatedFlightOptionId": "f57a85b3-a999-4594-aa2a-479ac48d2cf3",
//     "statusCode": "200",
//     "outcomeCode": "20201",
//     "outcomeMessage": "Flight Option Successfully Revalidated",
//     "outcomeDetailedDescription": null
// }

// Different “outcome codes”

// 20201   Means Flight Option Successfully Revalidated
// 20203   Means Revalidate shopping request could not be formed or submitted to content provider
// 20204    Means Flight Option failed Revalidation with provider
// Different “Status Codes”
// 404      No user found for this message
// 500      Error sending notification

// 3.    Endpoint 3 – Reservation endpoint
// Response body
// {
//     "brand": "COLLETTE",
//     "instanceId": "5f0262ce-711c-4747-be99-7c3137845b80",
//     "provider": "Sabre",
//     "pcc": "V6C0",
//     "pnrLocator": "FDOTXU",
//     "airSegsCreated": true,
//     "pnrShellCreated": false,
//     "outcomeCode": "40001",
//     "outcomeMessage": "PNR successfully booked",
//     "failedToSellAirSegments": [],
//     "warnings": null
// }

// Different “Outcome codes”
// 40001   Means PNR Successfully Booked
// 40002   Means Simulate booking enabled for request
// 40004   Means Unable to sell requested air segments
// 40005   Means Unable to store fare not currently supported
// 40006   Means Unable to add content to PNR not currently supported
// 40007   Means Unable to create PNR not currently supported
// Different “Status codes”
// 404     No user found for this message
// 500      Error sending notification








