function filterShowHide() {
    console.log(document.getElementById('forms').style.display)
    if (document.getElementById('forms').style.display == 'none'){
        document.getElementById('forms').style.display = 'flex'
    } else {
        document.getElementById('forms').style.display = 'none'
    }
}