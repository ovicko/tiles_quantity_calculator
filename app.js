$(document).ready(function() {
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
  
    $(document).on("change","input",function(){
  var totalArea = 0;

        var $parent = $(this).closest("tr")

        console.log($parent);
        var length = $parent.find('input[name*="length"]').val()
        var width = $parent.find('input[name*="width"]').val()

        var _Area = length * width
        $parent.find('input[name*="area"]').val(_Area); 

        $('input[name*="area"]').each(function() {
            totalArea += Number($(this).val());
        });

        $("#totalArea").html(totalArea+" sq.m")
        

        // var currentClass = $(this).attr('class').split(" ")[0];
        // // console.log(currentClass)
        // var currentElementName = $(this).attr('name')
        // console.log(currentElementName)
        // var elementValue = jQuery('input[name="'+currentElementName+'"]').val();

        // if (currentClass == 'length'){
        // //DO LENGTH CALCULATIONS
        // length = parseFloat(elementValue)
        //     console.log("Length : "+elementValue);
            
        // }
        // if (currentClass == 'width'){
        // //DO WIDTH CALCULATIONS
        //     width = parseFloat(elementValue)
        //     console.log("Width : "+width);
        // }

        // if (width > 0 &&  length > 0) {
        //    //DO AREA CALCULATIONS
        //    area = width * length 
        //    console.log("CALC AREA: "+area)
        // } 
    });

});