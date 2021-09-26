
            // javascript for more algorithmic functionality
            function ClickHandler() {
                $('#list').append("<li>lorem ipsum </li>");
            }
            $(document).ready(function() {
                //use this to make sure document is loaded before function
                $('button').click(ClickHandler);
                $("span").text(function() {
                    let result = $(this).text();
                    for (var i = 0; i < 4; i++) {
                        result += String.fromCharCode(Math.floor(Math.random() * 26) + 96);
                    }
                    return result;
                });

            });