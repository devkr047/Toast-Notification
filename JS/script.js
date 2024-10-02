var c = 0;

const color=['#DC143C','#1E90FF','#00CED1','#F0E68C','#EE82EE','#00FA9A','#F4A460']
const container = document.getElementById('notification-container');
document.getElementById('btn').addEventListener('click', function () {
    c++;
    this.classList.add('animation');
    setTimeout(remclass,1000);
    const notification = document.createElement('div');
    notification.classList.add('notification');
    let i = Math.floor(Math.random() * color.length);
    notification.style.border=`2px solid ${color[i]}`;
    notification.style.background=`${color[i]}`;
    notification.innerHTML = `Notification ${c}`;
    container.appendChild(notification);
    setTimeout(remNoti, 3000);
})

function remclass(){
    document.getElementById('btn').classList.remove('animation');
}

function remNoti() {
    container.removeChild(container.firstElementChild);
}