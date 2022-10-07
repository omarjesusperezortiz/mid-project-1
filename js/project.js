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
            <img src="./media/projects-section/${num}.jpg" alt="" srcset="">
            <p class="body-regular">
            ${newComment}
            </p>
        </div>
    </div>
    `
}