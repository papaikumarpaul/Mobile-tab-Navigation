const contents=document.querySelectorAll(".content");
const listItem=document.querySelectorAll("nav ul li");
listItem.forEach((item,idx)=>{
    item.addEventListener("click",()=>{
     

        //active item list
        item.classList.add("active");
        // display content
        contents[idx].classList.add("show");
    })
})
function hideAllContents(){
	contents.forEach(content=>{
content.classList.remove("show");
	})
}
function hideAllItems(){
listItem.forEach(listItem=>{
	listItem.classList.remove("active");
})
}
// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});

