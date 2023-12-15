window.onload = init;
function init() {
    let button = document.getElementById("addButton");
    button.onclick = handleButtonClick;
    loadPlaylist();
}
function handleButtonClick() {
    let textInput = document.getElementById("songTextInput"); 
    const songName = textInput.value;
    console.log(songName)
    let li = document.createElement("li");
    li.innerHTML = songName;
    console.log(songName)
    let ul = document.getElementById("playlist"); 
    ul.appendChild(li);
    console.log(songName)
    save("test");
    if (songName == "") {
        alert("please enter a song");
    }
    else {
        alert("added " + songName)
    }
}