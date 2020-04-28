document.querySelector('#add-question-btn').addEventListener('click',()=>{
    document.querySelector('#bell-notification').classList.add('bell-notification');
    setTimeout(() => {
        document.querySelector('#bell-notification').classList.remove('bell-notification');

    }, 4000);
});
