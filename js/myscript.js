$(document).ready(function(){
    /* Code for Important Dates right link*/
    $("#btnnotice").click(function() {
        $(".notices").toggleClass("notices-click");
        $("#notice").toggle(500);
    });
    /* Code for Contact page*/
    $("input").focus(function() {
    $(this).css("border", "solid 1px #006411");
    }
    );
    $("input").blur(function() {
    $(this).css("border", "solid 1px #999");
    }
    );
    $("textarea").focus(function() {
        $(this).css("border", "solid 1px #ccc");
    }
    );
    $("textarea").blur(function() {
        $(this).css("border", "none");
    }
    );
    
    $("#nav-mobile").click(function() {
    $(".sf-menu").toggleClass("dispmenu");
       
    });
    });