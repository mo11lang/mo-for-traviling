// لإظهار تفاصيل الرحلة عند الضغط على الزر
const buttons = document.querySelectorAll('.btn-details');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        alert("هذه هي تفاصيل الرحلة! يمكنك الاستفسار من خلال صفحة الاتصال.");
    });
});
