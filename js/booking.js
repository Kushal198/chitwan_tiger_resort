
$("#searchBtn").click(function () {
    if ($("#searchBtn").hasClass("disabled")) {
        event.preventDefault();
    }
    $(this).addClass("disabled");
    $("#bookingLoading").show();
    $('#loadingSpinner').delay(1000).queue(function (next) {
        $(this).hide();
        $("#bookingForm").fadeToggle(1500);
        next();
    });

    $("#adultSelect1").on('change', function(){
        $('#extraBedSelect1').html('');
        if($('#adultSelect1').val() >= 3){
            $('#extraBedSelect1').append('<option value="yes">Yes</option>');
    }else{
       
        $('#extraBedSelect1').append('<option value="no">No</option>');
        $('#extraBedSelect1').append('<option value="yes">Yes</option>');
    }
  });


    $('#adultSelect1').on('change', function() {
        $('#childrenSelect1').html('');
        if($('#adultSelect1').val() == 1){
            $('#childrenSelect1').append('<option value="0">No of Children</option>');
            $('#childrenSelect1').append('<option value="0">0</option>');
            $('#childrenSelect1').append('<option value="1">1</option>');
            $('#childrenSelect1').append('<option value="2">2</option>');
        }else if($('#adultSelect1').val() == 2){
            $('#childrenSelect1').append('<option value="0">No of Children</option>');
            $('#childrenSelect1').append('<option value="0">0</option>');
            $('#childrenSelect1').append('<option value="1">1</option>');
        }else{
            $('#childrenSelect1').append('<option value="0">No of Children</option>');
            $('#childrenSelect1').append('<option value="0">0</option>');
        }
    })
});


var counter = 0;
    function moreFields() {
        counter++;
        var newFields = document.getElementById('readroot').cloneNode(true);
        newFields.id = '' + counter;
        newFields.style.display = 'block';
        var newField = newFields.getElementsByTagName("select");
        for (var i=0;i<newField.length;i++) {
            var theName = newField[i].name
            var theId = newField[i].id
            if (theName)
                newField[i].name = theName + counter;
            if (theId)
                newField[i].id = theId + counter;
        }
        var insertHere = document.getElementById('writeroot');
        insertHere.parentNode.insertBefore(newFields,insertHere);
        $('#adultSelect2').on('change', function() {
            $('#childrenSelect2').html('');
            if($('#adultSelect2').val() == 1){
                $('#childrenSelect2').append('<option value="0">No of Children</option>');
                $('#childrenSelect2').append('<option value="0">0</option>');
                $('#childrenSelect2').append('<option value="1">1</option>');
                $('#childrenSelect2').append('<option value="2">2</option>');
            }else if($('#adultSelect2').val() == 2){
                $('#childrenSelect2').append('<option value="0">No of Children</option>');
                $('#childrenSelect2').append('<option value="0">0</option>');
                $('#childrenSelect2').append('<option value="1">1</option>');
            }else{
                $('#childrenSelect2').append('<option value="0">No of Children</option>');
                $('#childrenSelect2').append('<option value="0">0</option>');
            }
        })
        $('#adultSelect3').on('change', function() {
            $('#childrenSelect3').html('');
            if($('#adultSelect3').val() == 1){
                $('#childrenSelect3').append('<option value="0">No of Children</option>');
                $('#childrenSelect3').append('<option value="0">0</option>');
                $('#childrenSelect3').append('<option value="1">1</option>');
                $('#childrenSelect3').append('<option value="2">2</option>');
            }else if($('#adultSelect3').val() == 2){
                $('#childrenSelect3').append('<option value="0">No of Children</option>');
                $('#childrenSelect3').append('<option value="0">0</option>');
                $('#childrenSelect3').append('<option value="1">1</option>');
            }else{
                $('#childrenSelect3').append('<option value="0">No of Children</option>');
                $('#childrenSelect3').append('<option value="0">0</option>');
            }
        })
        $('#adultSelect4').on('change', function() {
            $('#childrenSelect4').html('');
            if($('#adultSelect4').val() == 1){
                $('#childrenSelect4').append('<option value="0">No of Children</option>');
                $('#childrenSelect4').append('<option value="0">0</option>');
                $('#childrenSelect4').append('<option value="1">1</option>');
                $('#childrenSelect4').append('<option value="2">2</option>');
            }else if($('#adultSelect4').val() == 2){
                $('#childrenSelect4').append('<option value="0">No of Children</option>');
                $('#childrenSelect4').append('<option value="0">0</option>');
                $('#childrenSelect4').append('<option value="1">1</option>');
            }else{
                $('#childrenSelect4').append('<option value="0">No of Children</option>');
                $('#childrenSelect4').append('<option value="0">0</option>');
            }
        })
        $('#adultSelect5').on('change', function() {
            $('#childrenSelect5').html('');
            if($('#adultSelect5').val() == 1){
                $('#childrenSelect5').append('<option value="0">No of Children</option>');
                $('#childrenSelect5').append('<option value="0">0</option>');
                $('#childrenSelect5').append('<option value="1">1</option>');
                $('#childrenSelect5').append('<option value="2">2</option>');
            }else if($('#adultSelect5').val() == 2){
                $('#childrenSelect5').append('<option value="0">No of Children</option>');
                $('#childrenSelect5').append('<option value="0">0</option>');
                $('#childrenSelect5').append('<option value="1">1</option>');
            }else{
                $('#childrenSelect5').append('<option value="0">No of Children</option>');
                $('#childrenSelect5').append('<option value="0">0</option>');
            }
        })
        $('#adultSelect6').on('change', function() {
            $('#childrenSelect6').html('');
            if($('#adultSelect6').val() == 1){
                $('#childrenSelect6').append('<option value="0">No of Children</option>');
                $('#childrenSelect6').append('<option value="0">0</option>');
                $('#childrenSelect6').append('<option value="1">1</option>');
                $('#childrenSelect6').append('<option value="2">2</option>');
            }else if($('#adultSelect6').val() == 2){
                $('#childrenSelect6').append('<option value="0">No of Children</option>');
                $('#childrenSelect6').append('<option value="0">0</option>');
                $('#childrenSelect6').append('<option value="1">1</option>');
            }else{
                $('#childrenSelect6').append('<option value="0">No of Children</option>');
                $('#childrenSelect6').append('<option value="0">0</option>');
            }
        })
        $('#adultSelect7').on('change', function() {
            $('#childrenSelect7').html('');
            if($('#adultSelect7').val() == 1){
                $('#childrenSelect7').append('<option value="0">No of Children</option>');
                $('#childrenSelect7').append('<option value="0">0</option>');
                $('#childrenSelect7').append('<option value="1">1</option>');
                $('#childrenSelect7').append('<option value="2">2</option>');
            }else if($('#adultSelect7').val() == 2){
                $('#childrenSelect7').append('<option value="0">No of Children</option>');
                $('#childrenSelect7').append('<option value="0">0</option>');
                $('#childrenSelect7').append('<option value="1">1</option>');
            }else{
                $('#childrenSelect7').append('<option value="0">No of Children</option>');
                $('#childrenSelect7').append('<option value="0">0</option>');
            }
        })
        $('#adultSelect8').on('change', function() {
            $('#childrenSelect8').html('');
            if($('#adultSelect8').val() == 1){
                $('#childrenSelect8').append('<option value="0">No of Children</option>');
                $('#childrenSelect8').append('<option value="0">0</option>');
                $('#childrenSelect8').append('<option value="1">1</option>');
                $('#childrenSelect8').append('<option value="2">2</option>');
            }else if($('#adultSelect8').val() == 2){
                $('#childrenSelect8').append('<option value="0">No of Children</option>');
                $('#childrenSelect8').append('<option value="0">0</option>');
                $('#childrenSelect8').append('<option value="1">1</option>');
            }else{
                $('#childrenSelect8').append('<option value="0">No of Children</option>');
                $('#childrenSelect8').append('<option value="0">0</option>');
            }
        });
        $("#adultSelect2").on('change', function(){
            $('#extraBedSelect2').html('');
            if($('#adultSelect2').val() >= 3){
                $('#extraBedSelect2').append('<option value="yes">Yes</option>');
        }else{
           
            $('#extraBedSelect2').append('<option value="no">No</option>');
            $('#extraBedSelect2').append('<option value="yes">Yes</option>');
        }
      });
      $("#adultSelect3").on('change', function(){
        $('#extraBedSelect3').html('');
        if($('#adultSelect3').val() >= 3){
            $('#extraBedSelect3').append('<option value="yes">Yes</option>');
    }else{

        $('#extraBedSelect3').append('<option value="no">No</option>');
        $('#extraBedSelect3').append('<option value="yes">Yes</option>');
    }
  });
  $("#adultSelect4").on('change', function(){
    $('#extraBedSelect4').html('');
    if($('#adultSelect4').val() >= 3){
        $('#extraBedSelect4').append('<option value="yes">Yes</option>');
}else{
   
    $('#extraBedSelect4').append('<option value="no">No</option>');
    $('#extraBedSelect4').append('<option value="yes">Yes</option>');
}
});
$("#adultSelect5").on('change', function(){
    $('#extraBedSelect5').html('');
    if($('#adultSelect5').val() >= 3){
        $('#extraBedSelect5').append('<option value="yes">Yes</option>');
}else{
  
    $('#extraBedSelect5').append('<option value="no">No</option>');
    $('#extraBedSelect5').append('<option value="yes">Yes</option>');
}
});
$("#adultSelect6").on('change', function(){
    $('#extraBedSelect6').html('');
    if($('#adultSelect6').val() >= 3){
        $('#extraBedSelect6').append('<option value="yes">Yes</option>');
}else{
    $('#extraBedSelect6').append('<option value="no">No</option>');
    $('#extraBedSelect6').append('<option value="yes">Yes</option>');
}
});
}


window.onload = moreFields;
    
