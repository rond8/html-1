function updateHoveredDiv(color) {
    document.getElementById('word').textContent = 'this is ' + color;
    if(color=='green'){
        document.getElementById('word').style.backgroundColor='green'
    }
    else{document.getElementById('word').style.backgroundColor='red'}
}

