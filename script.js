const container = document.getElementById("container");
const input = document.getElementById("add");
const btn = document.getElementById("btn");
const task = document.getElementById("task")
const btn2 = document.getElementById("btn2")
let array = []
i = 0

btn.addEventListener("click", () => {
    const text = input.value
    if(task===""){
        
        return
    }
    
    const items = document.createElement("li")
    task.appendChild(items)
    items.textContent=text
    input.value=""

    items.id = `item-${i}`
    
    
    const itemText = document.createTextNode(text);    

    const dltbutton = document.createElement("button")
    dltbutton.className = "dltbutton"
    dltbutton.textContent = "X";
    dltbutton.addEventListener("click", () => {
        items.remove();
    })

    items.appendChild(dltbutton); 
    task.appendChild(items)

    input.value = ""
    
    array.push(`item-${i}`)
    
    i++
    
        

})



