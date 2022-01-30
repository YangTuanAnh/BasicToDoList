document.getElementById("todobtn").addEventListener("click", () => {
    let value = document.getElementById("todoinput").value
    if (value!=" ") {
        let paragraph=document.createElement("p")
        paragraph.innerHTML=value
        document.getElementById("items").appendChild(paragraph)
        document.getElementById("todoinput").value = " "
        paragraph.addEventListener("click", () => {
            paragraph.style.textDecoration = "line-through"
        })
        paragraph.addEventListener("dblclick", () => {
            document.getElementById("items").removeChild(paragraph)
        })
    }
})