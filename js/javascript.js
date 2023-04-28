// all btns selection
const btns = document.querySelectorAll('.option__btn');
const btnSubmit = document.querySelector('.btn_submit');
const front = document.querySelector('.container_front');
const back = document.querySelector('.container_back');
const btnBack = document.querySelector('.btn_back');
let prevBtn = null;

//adding class for selected btn
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
       if (e.target.nodeName === 'BUTTON') {
        e.target.classList.add('selected_btn');

        if (prevBtn !== null) {
            prevBtn.classList.remove('selected_btn');
        }

        prevBtn = e.target;
       }

       document.querySelector('.selected').innerHTML = `You selected ${e.target.textContent} out of 5`
       console.log(e.target.textContent);
    })
})


//submit even
btnSubmit.addEventListener("click", () => {
    front.style.display = "none";
    back.style.display = "grid";
})


//going back event
btnBack.addEventListener('click', () => {
    front.style.display = "grid";
    back.style.display = "none";

    btns.forEach((btn) => {
        btn.classList.remove('selected_btn');
    })
})