window.onload = () => {
    const transition_el = document.querySelector('.transition'); //might want to make this id
    //IMPORTANT! This delays ALL links. This may very well cause errors in the future.
    //Should definitely move these to ids in the future but im too lazy.
    const anchors = document.querySelectorAll('a');
    let animTime = 200;

    setTimeout(() =>{
        transition_el.classList.remove('is-active');
    }, animTime);
    
    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];

        anchor.addEventListener('click', e => {
            e.preventDefault(); //stops link
            let target = e.target.href; //stores target page in target

            transition_el.classList.add('is-active');

            setTimeout(() => {
                window.location.href = target; //finally loads the page
            }, animTime)
        })
    }
}