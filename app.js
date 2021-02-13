$(document).ready(function() {
    
    $('input[name=\'measure_units\']').on('change', function() {
        // console.log($('.measure tbody'));

        $('#tileCalc input').val('')


        $('.measure').hide();
        $('#measure-' + this.value).show();
    });

    $('input[name=\'measure_units\']:checked').trigger('change');
    
    $('#add_inch_row').on("click", function() {
        addTabRow('#tab_inches')
    })

    $('#add_feet_inch').on("click", function() {
        addTabRow('#tab_feet_inches')
    })

    $("#add_row").on("click", function() {
        // Dynamic Rows Code
        
        // Get max row id and set new id
        var newid = 0;
        $.each($("#tab_logic tr"), function() {
            if (parseInt($(this).data("id")) > newid) {
                newid = parseInt($(this).data("id"));
            }
        });
        newid++;
        
        var tr = $("<tr></tr>", {
            id: "addr"+newid,
            "data-id": newid
        });
        
        // loop through each td and create new elements with name of newid
        $.each($("#tab_logic tbody tr:nth(0) td"), function() {
            var td;
            var cur_td = $(this);
            
            var children = cur_td.children();
            
            // add new td and element if it has a nane
            if ($(this).data("name") !== undefined) {
                td = $("<td></td>", {
                    "data-name": $(cur_td).data("name")
                });
                
                var c = $(cur_td).find($(children[0]).prop('tagName')).clone().val("");
                c.attr("name", $(cur_td).data("name") + newid);
                c.appendTo($(td));
                td.appendTo($(tr));
            } else {
                td = $("<td></td>", {
                    'text': $('#tab_logic tr').length
                }).appendTo($(tr));
            }
        });
        
        // add the new row
        $(tr).appendTo($('#tab_logic'));
        
        $(tr).find("td button.row-remove").on("click", function() {
             $(this).closest("tr").remove();
        });
    });

    $("#add_row").trigger("click");

    //area calc
    var inch_to_feet   = 0.0833;
    var feet_to_metres = 0.3048;

    $(document).on("change","input",function(){

        var $parent = $(this).closest("tr")
        // console.log($parent);
        var length = 0
        var width = 0
        length = $parent.find('input[name*="length"]').val()
        width = $parent.find('input[name*="width"]').val()
        console.log("width B "+width)
        var widthInches = $parent.find('input[name*="inchwidth"]').val()
        var lengthInches = $parent.find('input[name*="inchlength"]').val()

        if (widthInches) {
            
            var _width_metres = widthInches*inch_to_feet*feet_to_metres
            width = parseFloat(width) + (Math.round((_width_metres + Number.EPSILON) * 100) / 100)

            console.log("width A "+width)
        }

        if (lengthInches) {
            var _length_metres = lengthInches*inch_to_feet*feet_to_metres
            length = parseFloat(length) +  (Math.round((_length_metres + Number.EPSILON) * 100) / 100)
            console.log("length "+length)
        }

        //inch only

        var _inchWidth = $parent.find('input[name*="widinch"]').val()
        var _inchLength = $parent.find('input[name*="leninch"]').val()

        if (_inchWidth) {
            var _width_metres = _inchWidth*inch_to_feet*feet_to_metres
            width = (Math.round((_width_metres + Number.EPSILON) * 100) / 100)
            console.log("Width "+width)
        }

         if (_inchLength) {
            var _length_metres = _inchLength*inch_to_feet*feet_to_metres
            length = (Math.round((_length_metres + Number.EPSILON) * 100) / 100)
            console.log("Width "+length)
        }


        var _Area =  Math.round(((length * width) + Number.EPSILON) * 100) / 100

        $parent.find('input[name*="area"]').val(_Area); 
        
        var totalArea = 0;

        var $tbody = $(this).closest("tbody")

        $tbody.find('input[name*="area"]').each(function() {

            console.log($(this).val())
            totalArea += Number($(this).val());
        });

        $("#totalArea").html(totalArea+" sq.m")
    });
});

    function addTabRow(tab) {
                // Get max row id and set new id
        var newid = 0;

        // console.log($(tab+' tr'))

        $.each($(tab+' tr'), function() {

            if (parseInt($(this).data("id")) > newid) {
                newid = parseInt($(this).data("id"));
            }
        });
        newid++;
        
        var tr = $("<tr></tr>", {
            id: "addr"+newid,
            "data-id": newid
        });
        
        // loop through each td and create new elements with name of newid
        $.each($(tab+" tbody tr:nth(0) td"), function() {
            var td;
            var cur_td = $(this);
            
            var children = cur_td.children();
            
            // add new td and element if it has a nane
            if ($(this).data("name") !== undefined) {
                td = $("<td></td>", {
                    "data-name": $(cur_td).data("name")
                });
                
                var c = $(cur_td).find($(children[0]).prop('tagName')).clone().val("");
                c.attr("name", $(cur_td).data("name") + newid);
                c.appendTo($(td));
                td.appendTo($(tr));
            } else {
                td = $("<td></td>", {
                    'text': $(this).children('tr').length
                }).appendTo($(tr));
            }
        });
        
        // add the new row
        // console.log(element)
        $(tr).appendTo($(tab));
        
        $(tr).find("td button.row-remove").on("click", function() {
             $(this).closest("tr").remove();
        });
    }
