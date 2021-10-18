document.querySelector('.SGbutton').onclick = () => {
    console.log("clicked");
    fetch('https://localhost:3000/login');
}