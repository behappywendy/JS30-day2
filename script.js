(function () {
    const second = document.querySelector('.second-hand');
    const min = document.querySelector('.min-hand');
    const hour = document.querySelector('.hour-hand');

    function setClock() {
        const date = new Date();
        //一秒轉6度=>360/60=6
        let secondDeg = date.getSeconds() * 6;
        //一分鐘轉6度=>360/60=6
        let minDeg = date.getMinutes() * 6 + (date.getSeconds() * 6) / 60;
        //一小時60度=>360/12=60
        let hourDeg = date.getHours() * 60 + (date.getMinutes() * 30) / 60;
        second.style.transform = `rotate(${secondDeg}deg)`;
        min.style.transform = `rotate(${minDeg}deg)`;

        hour.style.transform = `rotate(${hourDeg})deg`;
    }

    function textTime() {
        const date = new Date();
        const span = document.querySelectorAll('.displayTime span');
        let hourNode = span[0];
        let minNode = span[1];
        let secNode = span[2];
        hourNode.textContent = `${date.getHours()}點`;
        minNode.textContent = `${date.getMinutes()}分`;
        secNode.textContent = `${date.getSeconds()}秒`;
    }
    //方法一
    setClock(); //初始化
    textTime();
    // 更新畫面:setInterVal、setTimeout、requestAnimationFrame

    // setInterval(setClock, 1000);
    // setInterval(textTime, 1000);
})();

//方法二
// function timoutHandler() {
//     setClock();
//     setTimeout(timoutHandler, 1000);
// }
// setClock();
// setTimeout(timoutHandler, 1000);
//方法三
// function animationHandler() {
//     setClock();
//     window.requestAnimationFrame(animationHandler);
// }
// window.requestAnimationFrame(animationHandler);
