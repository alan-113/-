document.addEventListener("DOMContentLoaded", () => {
    const hinata = document.getElementById("hinata");
    const feedback = document.getElementById("feedback");
    const clickCount = document.getElementById("click-count");
    const voice1 = document.getElementById("voice1");
    const voice2 = document.getElementById("voice2");
    const voice3 = document.getElementById("voice3");


    let count = 0;

    hinata.addEventListener("click", () => {
        count++;
        clickCount.textContent = count;

        // 随机播放语音
        const randomVoice = Math.random() > 0.5 ? voice1 : voice2 : voice3;
        randomVoice.play();

        // 根据点击次数显示不同的反馈信息
        if (count === 1) {
            feedback.textContent = "日向翔阳说：让我们一起加油吧！";
        } else if (count === 5) {
            feedback.textContent = "日向翔阳说：你真的很喜欢我吗？";
        } else if (count === 10) {
            feedback.textContent = "日向翔阳说：我已经迫不及待要和你一起打排球了！";
        } else {
            feedback.textContent = "点击日向翔阳，听听他的声音吧！";
        }
    });
});