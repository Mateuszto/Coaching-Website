const chatButton = document.querySelector('.chat');
const chatActive = document.querySelector('.active__chat');
const closeButton = document.querySelector('.close')

const startChatting = () => {
    chatActive.classList.add("active__menu__click");
    // console.log("Open chat");
}
const closeChat = () => {
    chatActive.classList.remove("active__menu__click");
}

chatButton.addEventListener('click', startChatting)
closeButton.addEventListener('click', closeChat);