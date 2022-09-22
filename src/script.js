const div = document.getElementsByTagName("div")
var element = Array.prototype.slice.call(div)
const animation = ()=>{
    element.forEach(element => {
        element.classList.add("animated")
        setTimeout(()=>{
            element.classList.remove("animated");
        },4000)
    });
}