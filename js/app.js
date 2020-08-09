/*
    ~global vars:
        -navigationBar: gets access to the unpopulated list
        to be used to fill it with links
        -sections: gets the differing articles
*/ 
const navigationBar = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');

/*
    ~function navigationBarConstruct:
        -function allows for an empty string to be populated with 
        the proper HTML needed to populated the <ul> tags.
        -loops though the amount of sections used
        -gets the path of the id and stores it in var idName
        -addCode then adds the HTMl needed and fills the 
        var idName in the href and the section number via
        the for loop itteration
        -code is then added to HTML after exiting loop
*/ 
(function navigationBarConstruct(){
    let addCode = '';
    for(let i = 0; i < sections.length;i++){
        const idName = sections[i].id;
        addCode += `<li><a class = "menu__link" href = "#${idName}">Section ${i+1}</a></li>`;  
    }
    navigationBar.insertAdjacentHTML('beforeend', addCode);
}());
/*
    ~function classSwitch:
        -allows for dynamic ability to note when the user
        scrolls over an article and adds in the current class
        for the adjactent HTML that is being scrolled over
        -for loop itterates over thje number of sectioons (that being 4)
        -getSize function is called and the value returned is stored in size
        -so long as the value in size is within that range, the class will be 
        added. if not, then the class is removed.
        -
*/
function classSwitch(){
    for(let i = 0; i < sections.length;i++){
        const size = getSize(sections[i]);
        if (size < 250 && size >= -250){
            sections[i].classList.add('your-active-class');
            sections[i].style.cssText = "background-color: #60ff47";
        }
        else{
            sections[i].classList.remove('your-active-class');
            sections[i].style.cssText = "background-color: linear-gradient(0deg, rgba(136,203,171,1) 0%, rgba(0,13,60,1) 100%)";
        }
    }
}
/*
    ~function getSize:
        ~takes in the parameter sections wich should denote the current
        section being scrolled over
        ~number that is returned will be the size between the top of the
        viewport and the element currently being scrolled over
*/
function getSize(sections){
    return sections.getBoundingClientRect().top;

}
//this even listener will trigger the classSwitch function when scrolled
//over
document.addEventListener('scroll', classSwitch);

/*
    ~function scroll:
        -this function will execute when there is a click
        in the document
        -the event of the click is passed in and the default
        behavior of the event is turned off (the sudden shift
        to the section)
        -sectionId will get the id of the section that was 
        clicked
        -section will then be able to obtain the whole
        section that the sectionID is associated with by
        querySelection of the ID
        -scrollTo method will then be able to create
        the smooth scroll effect
        -offsetTop will get the top pos. distance
        of the section
        -then the smooth behavior is defined
*/

document.addEventListener('click', function (event){
    event.preventDefault();
    const sectionID = event.target.getAttribute('href');
    const section = document.querySelector(sectionID);
	window.scrollTo({
		top: section.offsetTop,
		behavior: 'smooth',
	});
});