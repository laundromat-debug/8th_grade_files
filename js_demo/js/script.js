function askName() {
    var nameReturn = document.getElementById('ask-name');
    var name = prompt('please enter your name in the box below');
    if (name == '') {
        alert('Please try again.');
    } else {
        nameReturn.innerHTML = 'Hello' + name + '! Nice to meet you!'
    }
    nameReturn.style.fontSize = '30px';
    nameReturn.style.color = 'pink';

}

function askQuestion() {
    var p = prompt('Team Gale OR Team Peeta');
    if (p !=null) {
        document.getElementById('ask-question').innerHTML = 'For real?' + p + 'Your opinon does not matter then I guess'  }
}
