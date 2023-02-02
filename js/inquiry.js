
        $("#enquiry-form").submit(function () {
            var enquiryName = $('#enquiryName').val();
            var phoneNumber = $('#phoneNumber').val();
            var message = $('#message').val();
            var event = $('#events').val();
            var url = 'https://wa.me/919737701159?text=Name : ' + enquiryName + '\nMobile no.: ' + phoneNumber + '\nEvent : ' + event + '\n' + message + '';
            window.location.href = url;
        });