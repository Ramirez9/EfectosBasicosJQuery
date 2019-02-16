/**
 * Presentación de los efectos básicos de JQuery
 * 
 * @author Francisco - Angelo
 * @version 1.0
 * 
 */
{

    function init() {

        let display = false;
        $hide1 = $("#hide-1");
        $hide2 = $("#hide-2");
        $hide3 = $("#hide-3");
        $hide4 = $("#hide-4");
        $hide5 = $("#hide-5");
        $display = $("#display");

        $display.text(display);

        $("a").click(function () {
            let $id = $(this).attr("id");
            switch ($id) {
                case "menu1":
                    window.open('index.html#hide', '_self')
                    break;
                case "menu2":
                    window.open('index.html#hide', '_self')
                    break;
                case "menu3":
                    window.open('index.html#toggle', '_self')
                    break;
                case "menu4":
                    window.open('index.html#fadeIn', '_self')
                    break;
                case "menu5":
                    window.open('index.html#fadeOut', '_self')
                    break;
                case "menu6":
                    window.open('index.html#fadeTo', '_self')
                    break;
                case "menu7":
                    window.open('index.html#fadeToggle', '_self')
                    break;
                default:
                    break;
            }

        })

        primerArticle();

        segundoArticle(display);
    }

    function primerArticle() {
        $hide1.click(function () {
            $(this).hide("slow", "linear", function () {
                $(this).show(3000, "swing");
                $hide2.hide("fast");
            });
        });
    }

    function segundoArticle(display) {
        $hide3.click(function () {
            $hide4.toggle("fast", "linear");
        });
        $hide4.click(function () {
            $hide3.toggle(5000, "swing", function () {
                $hide5.toggle(display);
                if (display == false)
                    display = true;
                else
                    display = false;
                $("#display").text(display);
            });
        });
        return display;
    }

    $(init);
}