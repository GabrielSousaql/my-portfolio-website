window.onscroll = function() {
    handleScroll();
};
  
  const navbar = document.getElementById("navbar");
  let navbar_position = navbar.offsetTop;

  function handleScroll() {

    if (window.scrollY >= navbar.offsetTop) {
      navbar.classList.add("sticky");
      if (window.scrollY <= navbar_position){
        navbar.classList.remove("sticky")
      }
    } 
  }
  