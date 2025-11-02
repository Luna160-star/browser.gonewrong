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
}
);