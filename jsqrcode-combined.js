var resultContainer = document.getElementById('qr-reader-results');

var lastResult, countResults = 0;
function onScanSuccess(decodedText, decodedResult) {
    if (decodedText !== lastResult) {
        ++countResults;
        lastResult = decodedText;
        // Handle on success condition with the decoded message.
        console.log(`Scan result ${decodedText}`, decodedResult);
    }
}
function onScanFailure(error) {
   console.log(error)
}
var html5QrcodeScanner = new Html5QrcodeScanner(
    "qr-reader", { fps: 10, qrbox: 250 }
);
Html5Qrcode.getCameras().then(devices => {
    /**
     * devices would be an array of objects of type:
     * { id: "id", label: "label" }
     */
    if (devices && devices.length) {
        var cameraId = devices[0].id;
        // .. use this to start scanning or just log devices to see
        // which cameras are deteceted.
    }
}).catch(err => {
    // handle err
});
html5QrcodeScanner.render(onScanSuccess,onScanFailure);