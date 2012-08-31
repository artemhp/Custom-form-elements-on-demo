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
});