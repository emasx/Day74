// Select all sections
const sections = document.querySelectorAll('.section');
// Select Controls
const sectBtns = document.querySelectorAll('.controls');
// Select Control
const sectBtn = document.querySelectorAll('.control');

// Select the body
const allSections = document.querySelector('.main-content');


function PageTransitions() {
    // Button click active class
    for(let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        });
    }

    // Sections Active class

    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id) { // if this is true or if we have an ID

            // Remove selected from the other buttons
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            // hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');

        }
    })

    // Toggle theme

    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
    })
}

PageTransitions();
