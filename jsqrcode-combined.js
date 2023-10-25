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
    "qr-reader", { fps: 10, qrbox: 250 }, false
);

$(document).ready(function () {

    Html5Qrcode.getCameras().then(devices => {
        if (devices && devices.length) {
            var cameraId;
            var cameraLabel;
            if (devices.length === 1) {
                cameraId = devices[0].id;
            } else {
                cameraId = devices[1].id;
                //This is for cellphones with 4 cameras. Usually the first 2 detected are the front so in my case selecting the third in the list worked.
                if (cameraLabel.includes("front")) {
                    cameraId = devices[2].id;
                }
            }

            const html5QrCode = new Html5Qrcode("reader");
            html5QrCode.start(
                cameraId,
                {
                    fps: 10,
                    qrbox: 250
                },
                qrCodeMessage => {
                    //Things you want to do when you match a QR Code
                },
                errorMessage => {
                    // parse error, ignore it.
                })
                .catch(err => {
                    // Start failed, handle it.
                });

        }
    }).catch(err => {
    });
});
html5QrcodeScanner.render(onScanSuccess,onScanFailure);