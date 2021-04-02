let btn = document.querySelector('#button ');
let counter = document.querySelector('.counter');
let current = document.querySelector('.current');
let span = document.querySelector('.span')
let now = document.querySelector('.now');
let circle = document.querySelector('.circle');
let aud = new Audio();
let array = document.querySelector('.array');
let example = {
    name: ' ',
    music: '',
    img: " ",

}

let Arr = [];
let copy = []

let btn1 = document.querySelector('.btn_first')
let f_i = document.querySelector('.first_input');
let btn2 = document.querySelector('#btn_second');
let s_i = document.querySelector('.second_input');
let btn3 = document.querySelector('#btn_third');
let t_i = document.querySelector('.third_input');
let btn4 = document.querySelector("#btn_fourth")

let currentTrack = 0;
let currentSrc = 0;
let currentImg = 0;
let currentArr = 0;
let pic = document.getElementById("img");
let src = URL.createObjectURL;
let next = document.getElementById('button_next');
//...example= Arr[0]=example;
let bg = document.getElementById('body_bg');

let counter_pressure = 0;
btn1.onclick = function () {
    counter_pressure++;
    Arr.push({ ...example });
    console.log(Arr);
    f_i.disabled = false;
    btn2.disabled = false;
    if (counter_pressure = 1) {
        btn1.disabled = true;
    }

}

btn2.onclick = function () {
    Arr[currentArr].name = f_i.value;
    s_i.disabled = false;

}

s_i.oninput = function () {
    Arr[currentArr].img = src(this.files[0]);

    btn3.disabled = false;

}
btn3.onclick = function () {
    console.log(Arr)

    t_i.disabled = false;
}
t_i.oninput = function () {
    Arr[currentArr].music = src(this.files[0])
    btn4.disabled = false;
}
btn4.onclick = function () {
    console.log(Arr)
    next.disabled = false;

}
bg.onchange = function () {
    const background = src(this.files[0]);
    document.body.style.backgroundImage = `url("${background}")`;
}

next.addEventListener("click", function () {


    t_i.value = "";
    f_i.value = "";
    s_i.value = ""
    currentArr++;
    f_i.disabled = true;
    btn2.disabled = true;
    s_i.disabled = true;
    t_i.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    next.disabled = true;
    btn.disabled = false;
    for (let names of Arr) {
        array.textContent += names.name + " , ";
    }
    span.textContent = Arr.length
    circle_img.src = Arr[currentTrack].img;
    aud.src = Arr[currentTrack].music
    btn1.disabled = false;
})

aud.defaultPlaybackRate = 1;

let leftArrow = document.querySelector('.left_arrow');
let rightArrow = document.querySelector(".right_arrow");

leftArrow.addEventListener('click', function (event) {


    currentTrack--;
    aud.src = Arr[currentTrack].music;
    circle_img.src = Arr[currentTrack].img;
    console.log(currentTrack)
    if (currentTrack < 0) {
        currentTrack = 0;
    }

    if (currentTrack <= 0) {
        currentTrack = 0;

        aud.src = Arr[currentTrack].music + '  ';
    }
    circle_img.style.display = "block"
    circle.style.display = "block"
    aud.playbackRate = select.value;
    aud.play();
    now.innerHTML = "Сейчас вы слушаете: " + `  <span>${currentTrack + 1}</span>` + ' трек-' + (Arr[currentTrack].name);
})
let big = Arr.length;
rightArrow.addEventListener('click', function (event) {
    aud.playbackRate = select.value;

    currentTrack++
    circle_img.src = Arr[currentTrack].img;
    aud.src = Arr[currentTrack].music;
    console.log(currentTrack)
    now.innerHTML = "Сейчас вы слушаете: " + `<span> ${currentTrack + 1}</span > ` + ' трек-' + Arr[currentTrack].name;
    if (currentTrack < 0) {
        currentTrack = 0;
    }




    if (currentTrack <= 0) {
        currentTrack = 0;
        aud.src = Arr[currentTrack].music + '  ';
    }
    circle_img.style.display = "block"
    circle.style.display = "block"
    aud.play();
})




circle.style.display = "none"


let range = document.querySelector('.range');
let minutes = document.querySelector('.min');
let seconds = document.querySelector('.sec')







aud.addEventListener('loadedmetadata', function () {
    let hour = Math.floor(aud.duration / 60 / 60);
    let min = Math.floor(aud.duration / 60) - (hour * 60);
    let sec = aud.duration % 60;

    minutes.textContent = "0" + min + ":";
    seconds.textContent = sec.toFixed(0) + ";";
    if (sec < 9) {
        seconds.textContent = "0" + sec.toFixed(0) + ";"
    }
    aud.playbackRate = select.value;

})
let current_time = document.querySelector('.current_time');
let min_time = document.querySelector('.min_time');
let sec_time = document.querySelector('.sec_time');


let select = document.querySelector('.select');
select.addEventListener('change', function (event) {
    aud.playbackRate = select.value;
    if (select.value == 0.5) {
        circle.style.animationDuration = "7s"
    } if (select.value == 1) {
        circle.style.animationDuration = "5s"
    } if (select.value == 1.5) {
        circle.style.animationDuration = "3s"
    } if (select.value == 2) {
        circle.style.animationDuration = "1s"
    }
})


aud.ontimeupdate = function () {
    let hour = Math.floor(aud.currentTime / 60 / 60);
    let min = Math.floor(aud.currentTime / 60) - (hour * 60);
    let sec = (aud.currentTime % 60).toFixed();
    let i = 0;


    if (currentTrack < 0) {
        currentTrack = 0;
    }
    min_time.textContent = "0" + min + ":";
    if (currentTrack == Arr.length) {
        currentTrack = 0;
        currentTrack = 0;
    }
    if (aud.ended == true) {

        currentTrack++;
        circle_img.src = Arr[currentTrack].img;
        aud.src = Arr[currentTrack].music;
        aud.play();
        now.innerHTML = "Сейчас вы слушаете: " + `<span> ${currentTrack + 1}</span > ` + ' трек-' + (Arr[currentTrack].name);
        aud.playbackRate = select.value;


    }

    if (sec > 59) {
        sec = 0;
        min++;

    } if (sec < 10) {
        sec_time.textContent = "0" + sec + ";"
    } else if (sec >= 10) {
        sec_time.textContent = sec + ";"
    }


}

let minuse = document.getElementById('minuse');
let plus = document.getElementById('plus');
let pause = document.getElementById('pause');
let av = document.querySelector('.audio_volume')
let avc = aud.volume;
aud.volume = 0.1;


let circle_img = document.getElementById('circle_img')

btn.addEventListener('click', function (event) {


    circle_img.style.display = "block"
    circle.style.display = "block"
    if (select.value == 0.5) {
        circle.style.animationDuration = "7s"
    } if (select.value == 1) {
        circle.style.animationDuration = "5s"
    } if (select.value == 1.5) {
        circle.style.animationDuration = "3s"
    } if (select.value == 2) {
        circle.style.animationDuration = "1s"
    }
    aud.play();

    now.innerHTML = "Сейчас вы слушаете: " + `<span > ${currentTrack + 1}</span> ` + ' трек-' + (Arr[currentTrack].name);
})


minuse.addEventListener('click', function (event) {
    aud.volume -= 0.1
    av.innerHTML = "Громкость " + aud.volume.toFixed(1) * 100 + "%";
})
plus.addEventListener('click', function (event) {
    aud.volume += 0.1;
    av.innerHTML = "Громкость: " + aud.volume.toFixed(1) * 100 + "%";

})

pause.addEventListener('click', function (event) {

    aud.pause();
    circle.style.animationDuration = "0s"

})


let loop = document.querySelector('.loop');
loop.addEventListener('click', function () {
    loop.classList.toggle('loop_next')
    aud.loop = !aud.loop;
})













