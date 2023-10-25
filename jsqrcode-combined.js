// var resultContainer = document.getElementById('qr-reader-results');
//
// var lastResult, countResults = 0;
// function onScanSuccess(decodedText, decodedResult) {
//     if (decodedText !== lastResult) {
//         ++countResults;
//         lastResult = decodedText;
//         // Handle on success condition with the decoded message.
//         console.log(`Scan result ${decodedText}`, decodedResult);
//     }
// }
// function onScanFailure(error) {
//    console.log(error)
// }
// var html5QrcodeScanner = new Html5QrcodeScanner(
//     "qr-reader", { fps: 10, qrbox: 250 }, false
// );
// html5QrcodeScanner.render(onScanSuccess,onScanFailure);


const html5QrCode = new Html5Qrcode("qr-reader");

// if you scanned , it will be write in clear text in your input field which in my case 'result'
const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    alert(decodedText)
    // document.getElementById('qr-reader-results').value = decodedText;
};
const config = { fps: 200, qrbox: 100 };

// prefer the back camera else the front one
html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);