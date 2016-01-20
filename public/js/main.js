$(function(){
    var $text_containers = $(".typed-container");

    type_all_texts($text_containers);
});

function type_all_texts($text_containers) {
    var index = 0;
    type_text($text_containers[index], index, function callback() {
        index += 1;
        if (index != $text_containers.length) {
            type_text($text_containers[index], index, callback);
        }
    })
}

function type_text(text_container, index, callback) {
    $(text_container).css("opacity", "1");
    var $typed_text = $(text_container).find(".typed-text");
    var text = $typed_text.html();
    $typed_text.html("");
    $typed_text.typed({
        strings: [text],
        typeSpeed: 20,
        backDelay: 100,
        loop: false,
        loopCount: false,
        callback: function() {
            $typed_text.data().typed.cursor.css("display", "none");
            var $response_container = $(text_container).find(".response-text")
            var response_text = $response_container.html();
            $response_container.css("display", "block");
            $response_container.html("<i class=\"fa fa-circle-o-notch fa-spin\"></i>");
            setTimeout(function() {
                $response_container.html(response_text);
                callback();
            }, 2000);
        }
    });
}
//# sourceMappingURL=main.js.map
