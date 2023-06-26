const button = document.querySelector('.button')
const resultName = document.querySelector('.resultname');
const avaImg = document.querySelector('.avaimg');
const resultComment = document.querySelector('.resultcomment');
const commentTime = document.querySelector('.commenttime');

function cleanUser() {
    let name = document.querySelector('.name').value;
    const clean = name.trim(name);
    const small = clean.toLowerCase();
    const user = small[0].toUpperCase() + small.slice(1);
    resultName.textContent = (user);
}
function formatUser() {
    switch ((document.getElementById('username').checked)
    && (document.querySelector('.name').value.length > 0)) {
        case true:
            cleanUser();
            break;
        case false:
            resultName.textContent = "Username";
            break;
        default:
            resultName.textContent = "Username";
    }
}
function formatAva() {
    const images = [
        "https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295972138872283.webp",
        "https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676295806122712757.png",
        "https://cs14.pikabu.ru/post_img/2023/02/13/8/1676296296178548227.webp",
        "https://cs13.pikabu.ru/post_img/2023/02/13/8/167629632911850940.webp",
        "https://cs13.pikabu.ru/post_img/2023/02/13/8/1676295972191096669.webp",
        "https://cs13.pikabu.ru/post_img/2023/02/13/8/16762962261328396.webp",
    ];
    const randomNumber = Math.floor(Math.random() * 6);
    const i = randomNumber;
    let ava = document.querySelector('.ava').value;
    (document.querySelector('.ava').value.trim().length === 0) ? (avaImg.innerHTML = `<img src="${images[i]}" alt="Аватар">`) : (avaImg.innerHTML = `<img src="${ava}" alt="Аватар">`)
}

function formatComment() {
    let message;
    let comment = document.querySelector('.comment').value;
    const checkSpam = comment.toLowerCase();
    if (checkSpam.includes("viagra") || checkSpam.includes("xxx")) {
        message = comment.replace(/viagra|xxx/gi, "***");
    }
    else {
        message = comment;
    }
    resultComment.textContent = (message);
}

function showDate() {
    let date = new Date();
    commentTime.innerHTML = `${date}`;
}

button.addEventListener('click', formatUser);
button.addEventListener('click', formatAva);
button.addEventListener('click', formatComment);
button.addEventListener('click', showDate);
