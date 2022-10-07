

  const getData = async () => {
    const promise = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await promise.json();
    return data
}

getData();

const post1 = async (num) => {
const data = await getData();
const newTitle = data[num].title
const newComment = data[num].body
//console.log(newTitle,newComment)
const project = document.querySelector('#project-1');
project.innerHTML = 
`<img src="/media/projects-section/${num}.jpg" alt="" srcset="" />
<div  class="container-in">
<h3 >${newTitle}</h3>
<p class="headline-regular">${newComment}</p>
  <div class="learn-more">Learn more</div>
</div>`
}

const post2 = async (num) => {
    const data = await getData();
    const newTitle = data[num].title
    const newComment = data[num].body
    //console.log(newTitle,newComment)
    const project = document.querySelector('#project-2');
    project.innerHTML = 
    `<img src="/media/projects-section/${num}.jpg" alt="" srcset="" />
    <div  class="container-in">
    <h3 >${newTitle}</h3>
    <p class="headline-regular">${newComment}</p>
      <div class="learn-more">Learn more</div>
    </div>`
    }

const post3 = async (num) => {
        const data = await getData();
        const newTitle = data[num].title
        const newComment = data[num].body
        //console.log(newTitle,newComment)
        const project = document.querySelector('#project-3');
        project.innerHTML = 
        `<img src="/media/projects-section/${num}.jpg" alt="" srcset="" />
        <div  class="container-in">
        <h3 >${newTitle}</h3>
        <p class="headline-regular">${newComment}</p>
          <div class="learn-more">Learn more</div>
        </div>`
        }

    const postProject = async (num) => {
          const data = await getData();
          const newTitle = data[num].title
          const newComment = data[num].body
          //console.log(newTitle,newComment)
          const project = document.querySelector('#postProject');
          project.innerHTML = 
          `
          <h1>Project</h1>
          <div class="little-container">
              <p class="body-medium">${newTitle}</p>
          <p class="body-regular">Completed on June 22, 2021</p>
          </div>
          <div class="container">
              <div class="project">
                  <img src="/media/projects-section/${num}.jpg" alt="" srcset="">
                  <p class="body-regular">
                  ${newComment}
                  </p>
              </div>
          </div>
          `
    }


//NUMBEROS ALEATORIOS JUST FOR FUN


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
const rndInt1 = randomIntFromInterval(1, 2)
//console.log(rndInt1)
const rndInt2 = randomIntFromInterval(3, 4)
//console.log(rndInt2)
const rndInt3 = randomIntFromInterval(5, 6)
//console.log(rndInt3)
const random = randomIntFromInterval(1, 6)

post1(rndInt1)
post2(rndInt2)
post3(rndInt3)
postProject(random)

// console.log(newTitle)
// const title = document.querySelector('#project-1-title');
// const comment= document.querySelector('#project-1-title');
// let html = ''
// for (let i = 0; i < pokemons.length; i++) {
//     const element = pokemons[i];
//     html += 
//     `
//     <h3 id="project-1-title">${newTitle}</h3>
//     <p class="headline-regular">${newComment}</p>`
// }




