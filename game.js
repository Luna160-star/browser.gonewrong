const fileImg = document.querySelectorAll('.file1, .file2, .file3, .file4');

const dialog= document.getElementById('file-pop1');
const closebtn= document.getElementById('close');
const popupTitle = document.querySelector('.name');
const popupBody = document.getElementById('pop-body');

fileImg.forEach(button => {
    button.addEventListener('click', () => {
        
        const clue1= button.getAttribute('data-clue') || ("Message here");

        popupTitle.textContent = "Type the clue title here";
        popupBody.textContent = "The clue here";

        dialog.showModal();

    });
});

closebtn.addEventListener('click', ()=> {
    dialog.close();
});


/*For the exit thingy*/

const exitInput = document.getElementById('exit-pass');
const exitBtn = document.getElementById('exit-button');
const PASSCODE_true = "111" 

exitBtn.addEventListener('click', function () {
    const userAnswer = exitInput.value.trim();

    if (userAnswer === PASSCODE_true){
        window.location.href = "out.html";
    }

    else{
        window.location.href = "fail.html";
    }
})