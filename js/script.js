$(document).ready(function () {
    'use strict';

    $("#checkIndate").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'yy-mm-dd',
        minDate: '0',
        maxDate: '+2Y',
        onSelect: function (dateStr) {
            var d1 = $(this).datepicker("getDate");
            d1.setDate(d1.getDate() + 1); // change to + 1 if necessary
            var d2 = $(this).datepicker("getDate");
            d2.setDate(d2.getDate() + 180); // change to + 180 if necessary
            $("#checkOutdate").datepicker("option", "minDate", d1);
            $("#checkOutdate").datepicker("option", "maxDate", d2);
            var start = $("#checkIndate").datepicker("getDate");
            var end = $("#checkOutdate").datepicker("getDate");
            var days = (end - start) / 1000 / 60 / 60 / 24;
            if (end != null)
                var dd = $(this).datepicker("getDate");
            $('#checkOutdate').datepicker('setDate', d1);
        }
    });
    $('#checkOutdate').datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'yy-mm-dd',
        minDate: $("#checkIndate").datepicker("getDate"),
        maxDate: '+2Y'
    });
});