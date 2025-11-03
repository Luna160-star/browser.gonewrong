const fileImg = document.querySelectorAll('.file1, .file2, .file3, .file4, .file5, .file6, .file7');

const dialog= document.getElementById('file-pop1');
const closebtn= document.getElementById('close');
const popupTitle = document.querySelector('.name');
const popupBody = document.getElementById('pop-body');

fileImg.forEach(button => {
    button.addEventListener('click', () => {
        
    popupTitle.textContent = button.getAttribute('data-title');
    popupBody.innerHTML = button.getAttribute('data-body');

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