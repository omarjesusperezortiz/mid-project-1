// HAMBURGER MENU

function myFunction() {
    const x = document.getElementById('myTopNav');
    console.log(x)
    if (x.className === "nav-menu") {
      x.className = "nav-menu-responsive";
      const hamNav= document.querySelector("#ham-nav")
      const body=document.querySelector("body")
      const hamIcon=document.querySelector("#hamburger")
      hamNav.style.background = "#072ac8"
      hamNav.style.opacity = "1";
      body.style.background="rgb(0,0,0)";
      hamIcon.innerHTML=`
      <i class="fa fa-close"></i>
      `
      hamNav.innerHTML = `
        <div class="navHam"  >
      <li><a href="/index.html">Home</a></li>
      <li><a href="/projects.html">Projects</a></li>
      <li><a href="#">Services</a></li>
        </div>
      `

    } else {
      x.className = "nav-menu";
      const hamNav= document.querySelector("#ham-nav")
      const body=document.querySelector("body")
      const hamIcon=document.querySelector("#hamburger")
        hamNav.style.background = ""
        hamNav.style.opacity = "0";
        body.style.background="rgb(255,255,255)"
        hamIcon.innerHTML=`
        <i class="fa fa-bars"></i>
        `
      hamNav.innerHTML = `
      
      <div class="navHam"  >
      <li><a href="/index.html">Home</a></li>
      <li><a href="/projects.html">Projects</a></li>
      <li><a href="#">Services</a></li>
        </div>

        
      `
      
    }
  }

  const button= document.getElementById('hamburger');

  button.addEventListener('click',myFunction)