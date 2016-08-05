<script>
 $(document).ready(function (){
  $('.nav-btn').on("click", function() {
    $('#main-nav').slideToggle("slow");
     $(window).resize(function() {
        if($(window).width() > 600) {
            $("#main-nav").removeAttr("style");
            }
        });
    });
    });
</script>
This is the HTML (inside the header):

<span class="nav-btn"></span>
    <nav id="main-nav">
        <ul>
            <li><a href="#home" class="scroll">HOME</a></li>
            <li><a href="#about" class="scroll">ABOUT</a></li>
            <li><a href="#portfolio" class="scroll">PORTFOLIO</a></li>
            <li><a href="#contact" class="scroll">CONTACT</a> </li>
        </ul>
    </nav>  