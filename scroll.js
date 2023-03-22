const boxSp = document.getElementById('box-sticky')








window.addEventListener("scroll", function() {
    const boxSticky = document.getElementById('box-sp-sticky')
    var scrollPosition = window.scrollY;
    console.log(scrollPosition);
    if (scrollPosition > 800) {
        boxSticky.classList.remove("hidden");
    } else {
      boxSticky.classList.add("hidden");
    }
  });
  

  