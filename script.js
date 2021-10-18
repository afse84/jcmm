document.querySelector('.button').onclick = () => {
    console.log("clicked");
    fetch('http://localhost:3000/login')
        .then(response => response.json())
        .then(data => load(data['data']));

    function load(data) {
        console.log(data);
    }

}