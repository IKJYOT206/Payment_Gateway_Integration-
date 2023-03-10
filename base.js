var options = {
    "key": "rzp_test_RvEe4cc2IStIRH",
    "amount": "1000",
    "currency": "INR",
    "name": "Sparks Foundation",
    "handler": function (response) {
        console.log(response);
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#253E52"
    }
};
var rzp1 = new Razorpay(options);
rzp1.on('payment.failed', function (response) {
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.source);
    alert(response.error.step);
    alert(response.error.reason);
    alert(response.error.metadata.order_id);
    alert(response.error.metadata.payment_id);
});
document.getElementById('mybtn').onclick = function (e) {
    rzp1.open();
    e.preventDefault();
}
