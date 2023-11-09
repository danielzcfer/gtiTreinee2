const controuls = document.querySelectorAll('.control');

let currentItem = 0;

const items = document.querySelectorAll('.imagem');

const maxItems = items.length;

controuls.forEach(control => {control.addEventListener('click',() => {

        const isLeft = control.classList.contains('arrow-left')

        if(isLeft){
            currentItem -= 1;
        }else{
            currentItem += 1;
        }

        if(currentItem >= maxItems){
            currentItem = 0;
        }
        if(currentItem < 0){
            currentItem = maxItems - 1;
        }

        items[currentItem].scrollIntoView({
            inline: 'center',
            behavior: 'smooth',
        });

    })
});