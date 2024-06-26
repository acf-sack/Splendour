
$(function(){
    $("#nav-placeholder").load("./assets/placeholders/nav.html");
  });

  $(function(){
    $("#footer-placeholder").load("./assets/placeholders/footer.html");
  });
  VanillaTilt.init(document.querySelectorAll(".competition-card"), {
		max: 8,
		speed: 400,
        glare: true,
        'max-glare': 0.25,
	});