window.onload = init;
function init() {
    var button = document.getElementById("addButton");
    button.onclick = handleButtonClick;
    loadPlaylist();
}
function handleButtonClick() {
    let textInput = document.getElementById("songTextInput"); 
    let songName = textInput.value;
    let li = document.createElement("li");
    li.innerHTML = songName;
    let ul = document.getElementById("playlist"); 
    ul.appendChild(li);
    save(songName);
    if (songName == "") {
        alert("please enter a song");
    }
    else {
        alert("added " + songName)
    }
}