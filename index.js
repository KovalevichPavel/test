alert('js file was created');

function showAnswer() {
    let ans = prompt('how r u?');
    const div = document.createElement('div');
    div.innerHTML = `your answer is ${ans}`;
    document.body.append(div) 
}
