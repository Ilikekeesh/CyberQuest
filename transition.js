window.onload = () => {
    const transition_el = document.querySelector('.transition'); //might want to make this id? according to tutorial
    const anchors = document.querySelectorAll('.navlink');
    let animTime = 200;

    setTimeout(() =>{
        transition_el.classList.remove('is-active');
    }, animTime);
    
    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];

        anchor.addEventListener('click', e => {
            e.preventDefault(); //stops link
            let target = anchor.href; //stores target page in target
            const isStudent = localStorage.getItem('student') === 'true';
            console.log("index: " + target.indexOf("classroom.html"));
            console.log("check 1: " + (target.indexOf("classroom.html")>0));
            console.log("check 2:" + !isStudent);
            if ((target.indexOf("classroom.html")>0) && (!isStudent)){
                target = target.substring(0,target.indexOf("classroom.html")) + "teacherclassroom.html";
                console.log("target: " +target);
            }
            transition_el.classList.add('is-active');

            setTimeout(() => {

                window.location.href = target; //finally loads the page
            }, animTime)
        })
    }
}