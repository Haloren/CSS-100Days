window.onload = () => document.getElementById('first').className = "circle selected"
   
select = (id) => {
    const selected = id

    const circleArray = ["first", "second", "third", "forth"]
    let newArray = circleArray.filter(c => c !== selected)

    newArray.map((c) => {
        document.getElementById(c).className = "circle"
    })

    document.getElementById(selected).className = "circle selected"
}