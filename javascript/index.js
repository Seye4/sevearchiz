// ********** set date ************
const date = (document.getElementById(
    "date"
  ).innerHTML = new Date().getFullYear());
  
  // ********** nav toggle ************
  // select button and links
  const menuBar = document.getElementById("menu_bar");
  const sideMenu = document.getElementById("side_menu");

  // add event listener
  menuBar.addEventListener("click", () => {
    sideMenu.classList.toggle("show_links");
  });
  
  // ********** smooth scroll ************
 

  const scrollLinks = document.querySelectorAll(".scroll_link");
  scrollLinks.forEach(link => {
    link.addEventListener("click", e => {
      // prevent default
      e.preventDefault();
      sideMenu.classList.remove("show_links");
  
      const id = e.target.getAttribute("href").slice(1);
      const element = document.getElementById(id);
      //
      let position = element.offsetTop - 62;
  
      window.scrollTo({
        left: 0,
        // top: element.offsetTop,
        top: position,
        behavior: "smooth"
      });
    });
  });
  