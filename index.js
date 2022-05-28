 
const open = document.querySelector('.open')
const close = document.querySelector('.close')
const sidebar = document.querySelector('.top__nav')
const body = document.body
const resumeLink = document.querySelector('.top__nav__item--resume');


const menuLinks = document.querySelectorAll('.scroll__link[data-goto]');

    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener('click', onMenuLinkClick)
        });

        function onMenuLinkClick(e){
            const menuLink = e.target;
            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('.top').offsetHeight - document.querySelector('.top').offsetHeight;

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: "smooth"  
                });
                e.preventDefault();
            }
        }
    }

        open.addEventListener('click', () => {
            sidebar.classList.toggle('active')
            open.classList.toggle('active')
            body.classList.toggle('lock')
            })

        resumeLink.addEventListener('click', () => {
            sidebar.classList.remove('active')
            open.classList.remove('active')
            body.classList.remove('lock')
        })

        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
             if (sidebar.classList.contains('active')){
                 sidebar.classList.remove('active')
                 open.classList.remove('active')
                 }
                
            })
        })

        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;

        }

