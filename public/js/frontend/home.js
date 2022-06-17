$(document).ready(function () {
    $.ajax({
        type: 'post',
        url:'/home/contact/create_captcha',        
        data: {},
        success: function (res) {
            $('#captcha_code').html(res);
        }
    });

    $('.refresh_captcha').click(function(){
        $.ajax({
            type: 'post',
            url:'/home/contact/create_captcha',        
            data: {},
            success: function (res) {
                $('#captcha_code').html(res);
            }
        });
    });

    $.ajax({
        type: 'post',
        url:'/home/contact/create_captcha1',        
        data: {},
        success: function (res) {
            $('.captcha').html(res);
        }
    });

    $.ajax({
        type: 'post',
        url:'/home/contact/create_captcha2',        
        data: {},
        success: function (res) {
            $('.captcha1').html(res);
        }
    });

    $('#Contact').validate({
        rules: { 
            fullname: {
               required: true,
               maxlength:60,        
            },
            email: {
               required: true, 
               email: true,
               maxlength:100,   
            },
            captcha: {
               required: true, 
               remote: {
                    url: '/home/contact/checkcaptcha',
                    type: "post",
                    dataType: 'json',
                    data: {
                        captcha: function () {
                            return $('#Contact :input[name="captcha"]').val();
                        }
                    }
                },
            }
        },
        messages: {
            fullname: {
               required: "Không được để trống!",
               maxlength:"Số ký tự không vượt quá 60!" 
            },
            email: {
               required: "Không được để trống!",
               email: "email không đúng",
               maxlength:"Số ký tự không vượt quá 100!" 
            },
            captcha: {
               required: "Không được để trống!",
               remote: "Mã captcha không đúng!" 
            },
        },
        submitHandler: function (form) {
            $.ajax({
                type: 'post',
                url:  '/home/contact/ajax_sendcontact',
                data: $(form).serialize(),
                beforeSend: function () {
                    $('.box_img_load_ajax').removeClass('hidden');
                },
                success: function (res) {
                    alert("Cảm ơn bạn đã gửi liên hệ cho chúng tôi! Chúng tôi sẽ sớm phải hồi lại.");
                    window.location= '/lien-he';
                }
            });
            return false;
        }
    });
      $('.formCheckout').validate({
        rules: { 
            fullname: {
               required: true,
               maxlength:60,        
            },
            email: {
               required: true, 
               email: true,
               maxlength:100,   
            },
            phone: {
               required: true, 
               number: true,
               maxlength:100,   
            },
            address: {
               required: true, 
               maxlength:200,   
            }
        },
        messages: {
            fullname: {
               required: "Không được để trống!",
               maxlength:"Số ký tự không vượt quá 60!" 
            },
            email: {
               required: "Không được để trống!",
               email: "email không đúng",
               maxlength:"Số ký tự không vượt quá 100!" 
            }, 
            phone: {
               required: "Không được để trống!",
               number: "Số điện thoại không đúng",
               maxlength:"Số ký tự không vượt quá 100!"
            },
            address: {
               required: "Không được để trống!",
               maxlength:"Số ký tự không vượt quá 100!"
            }
           
        },
        submitHandler: function (form) {
            $.ajax({
                type: 'post',
                url:  '/home/cart/ajax_checkout',
                data: $(form).serialize(),
                beforeSend: function () {
                    $('.box_img_load_ajax').removeClass('hidden');
                },
                success: function (res) {
                    alert("Đặt hàng thành công chúng tôi sẽ sớm liên hệ lại cho bạn.");
                    window.location= '/';
                }
            });
            return false;
        }
    });
    $('.listcart').on('click','.btnDelete',function(){
        var rowid = $(this).attr('RowID');
        if (confirm('Bạn có muốn xóa sản phẩm này trong giỏ hàng?')) {       
            $.ajax({
                type:'post',
                url:'/home/cart/delete_a_product_cart',
                data:{rowid:rowid},
                beforeSend: function () {
                    $('.box_img_load_ajax').removeClass('hidden');
                },
                success: function (res) {
                    $('.box_img_load_ajax').addClass('hidden'); 
                    window.location = window.location.href;
                }
            })
        }
        else{
            return false;
        }
    });
    $('.listcart').on('click','.UpdateCart',function(){
        $.ajax({
            type:'post',
            url:'/home/cart/UpdateCart',
            data:$('#FormCart').serialize(),
            beforeSend: function () {
                $('.box_img_load_ajax').removeClass('hidden');
            },
            success: function (res) {
                $('.box_img_load_ajax').addClass('hidden'); 
                alert('Cập nhật giỏ hàng thành công!');
                window.location=window.location.href;
            }
        })
    });
  
    $('#search_home').validate({
        submitHandler: function (form) {
            $.ajax({
                type: 'post',
                url:  '/home/product/ajax_searchhome',
                data: $(form).serialize(),
                beforeSend: function () {
                    $('.box_img_load_ajax').removeClass('hidden');
                },
                success: function (res) {
                    window.location= '/ket-qua-tim-kiem';
                }
            });
            return false;
        }
    });
})
