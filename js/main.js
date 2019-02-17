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

    $("a").click(function() {
      let $id = $(this).attr("id");
      switch ($id) {
        case "menu1":
          window.open("index.html#hide", "_self");
          break;
        case "menu2":
          window.open("index.html#hide", "_self");
          break;
        case "menu3":
          window.open("index.html#toggle", "_self");
          break;
        case "menu4":
          window.open("index.html#fadeIn", "_self");
          break;
        case "menu5":
          window.open("index.html#fadeOut", "_self");
          break;
        case "menu6":
          window.open("index.html#fadeTo", "_self");
          break;
        case "menu7":
          window.open("index.html#fadeToggle", "_self");
          break;
        default:
          break;
      }
    });

    primerArticle();

    segundoArticle(display);

    tercerArticle();

    cuartoArticle();

    quintoArticle();
  }

  function primerArticle() {
    $hide1.click(function() {
      $(this).hide("slow", "linear", function() {
        $(this).show(3000, "swing");
        $hide2.hide("fast");
      });
    });
  }

  function segundoArticle(display) {
    $hide3.click(function() {
      $hide4.toggle("fast", "linear");
    });
    $hide4.click(function() {
      $hide3.toggle(5000, "swing", function() {
        $hide5.toggle(display);
        if (display == false) display = true;
        else display = false;
        $("#display").text(display);
      });
    });
    return display;
  }

  function tercerArticle() {
    // $("#hide-6").on("click", function() {
    //   $(this).fadeOut(2000, "swing", function() {
    //     $(this).fadeIn(2000, "linear");
    //   });
    // });

    $("#hide-6").on("click", function() {
      $(this).fadeOut({
        duration : 2000,
        start: $("#hide-7").fadeOut(2000),
        step: function(){ //A function to be called for each animated property of each animated element.
          $("#hide-7").fadeIn(2000)
          //console.log('step');
        },
        progress: function(){ //A function to be called after each step of the animation.
          //$("#hide-7").fadeOut('fast')
          //console.log('en progreso');
        },
        complete: function(){ //A function that is called once the animation on an element is complete.
          $(this).fadeIn(2000, "linear")
          console.log('complete');
        },   
        done: function(){ //A function to be called when the animation on an element completes.
          console.log('done');
        },
        fail: function(){ //A function to be called when the animation on an element fails to complete.
          console.log('ha fallado');
        }
      });
    });

    $("#hide-7").on("click", function() {
      $(this).fadeOut(2000, "linear", function() {
        $(this).fadeIn(2000, "swing");
      });
    });
  }

  function random() {
    let rand = Math.random().toFixed(2);
    $('#display-rand').text(rand);
    return rand;
  }

  function cuartoArticle() {
    $("#hide-8").on("click", function() {
      $(this).fadeTo("fast", random());
    });
  }

  function quintoArticle() {
    $("#hide-9").on("click", function() {
      $(this).fadeToggle(2000, function(){
          $(this).fadeToggle(2000);
      });
    });
  }

  $(init);
}
