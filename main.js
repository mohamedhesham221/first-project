$(document).ready(function(){
    $('#btn1').hover(
        function(){
            $('.i1').css('color','#93C943')
            $('#th1').css('background-color','#93C943')
            $('#sp1').css('color',' white')
            $('#div1').show()
            $(this).css('background-color','#93C943')
        },
        function(){
            $('.i1').css('color','#595C64')
            $('#th1').css('background-color','#F5F5F4')
            $('#sp1').css('color',' #9BCA45')
            $('#div1').hide()
            $(this).css('background-color','#595C64')
   
        }
    )

    $('#btn2').hover(
        function(){
            $('.i2').css('color','#93C943')
            $('#th2').css('background-color','#93C943')
            $('#sp2').css('color',' white')
            $('#div2').show()
            $(this).css('background-color','#93C943')
        },
        function(){
            $('.i2').css('color','#595C64')
            $('#th2').css('background-color','#F5F5F4')
            $('#sp2').css('color',' #9BCA45')
            $('#div2').hide()
            $(this).css('background-color','#595C64')

        }
    )

    $('#btn3').hover(
        function(){
            $('.i3').css('color','#93C943')
            $('#th3').css('background-color','#93C943')
            $('#sp3').css('color',' white')
            $('#div3').show()
            $(this).css('background-color','#93C943')
        },
        function(){
            $('.i3').css('color','#595C64')
            $('#th3').css('background-color','#F5F5F4')
            $('#sp3').css('color',' #9BCA45')
            $('#div3').hide()
            $(this).css('background-color','#595C64')

        }
    )
})