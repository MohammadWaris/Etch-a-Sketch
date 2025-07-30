const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");
const div4 = document.createElement("div");
const div5 = document.createElement("div");
const div6 = document.createElement("div");
const div7 = document.createElement("div");
const div8 = document.createElement("div");
const div9 = document.createElement("div");
const div10 = document.createElement("div");
const div11 = document.createElement("div");
const div12 = document.createElement("div");
const div13 = document.createElement("div");
const div14 = document.createElement("div");
const div15 = document.createElement("div");
const div16 = document.createElement("div");
const div17 = document.createElement("div");
const div18 = document.createElement("div");
const div19 = document.createElement("div");
const div20 = document.createElement("div");
const div21 = document.createElement("div");
const div22 = document.createElement("div");
const div23 = document.createElement("div");
const div24 = document.createElement("div");
let divs = [div1,div2,div3,div4,div5,div6,div7,div8,div9,div10,div11,div12,div13,div14,div15,div16,div17,div18,div19,div20,div21,div22,div23,div24]
let counter = 1;
divs.forEach(el =>{
    el.textContent = `Div ${counter++}`;
    el.classList.add("box");
    el.setAttribute("id",`div${counter}`);
    document.querySelector("#contianer").appendChild(el)
})
let numberOfDivs = 0;
document.querySelector("#add").addEventListener('click',() => {
    numberOfDivs = Number(prompt("Enter The number of divs: "))
    if(numberOfDivs > 100){
        alert("you are not allowed to enter over the 100")
    }else if(numberOfDivs > 0 ){
        divs.forEach(el => {
            document.querySelector('#contianer').removeChild(el);
        })
        
        divs = []
        let counter = 0;
        for (let i = 0 ; i< numberOfDivs; i++){
            let div = document.createElement('div');
            div.classList.add('box');
            div.setAttribute("id",`div${counter++}`)
            div.textContent = ` Div ${counter}`;
            document.querySelector('#contianer').appendChild(div)
            divs.push(div);
        }
    }
})