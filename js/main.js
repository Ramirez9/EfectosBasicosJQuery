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




