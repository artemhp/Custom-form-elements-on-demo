document.observe("dom:loaded", function() {
    $$('.test span').each(function(el){
        el.observe('click', function(event){
            $('test-zone').select('label').each(function(elem){
                elem.writeAttribute("class", el.readAttribute('id'));
                if (el.readAttribute('id') == "none") {
                    elem.previous("input").writeAttribute("class", el.readAttribute('id'));
                } else {
                    elem.previous("input").writeAttribute("class", "");
                }
            });
        });
    });

    $$("#test-zone3 input[type=checkbox]").each(function(el){
        if (el.up("label")) {
            el.up("label").addClassName("custom-checkbox-label").down("input[type=checkbox]").insert({
                after: "<span class='custom-tick'></span>"
            });
        }
    });
});


/*
$(document).ready(function() {
    var custom_checkbox_label = $("#test-zone3 input[type=checkbox]").parent("label");
    custom_checkbox_label.addClass("custom-checkbox-label");
    $("<span class='custom-tick'></span>").insertAfter(custom_checkbox_label.children("input[type=checkbox]"));
});*/
