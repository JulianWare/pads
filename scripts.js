// Start and End Tone Functions
let oscillatorType = 'sawtooth';
let audioCtx1 = null;
let oscillator1;
let gainNode1;
function startTone1(hertz1) {
    audioCtx1 = new (window.AudioContext || window.webkitAudioContext)();
    oscillator1 = audioCtx1.createOscillator();
    oscillator1.type = oscillatorType;
    oscillator1.frequency.setValueAtTime(hertz1, audioCtx1.currentTime);
    oscillator1.start();
    gainNode1 = audioCtx1.createGain();
    gainNode1.gain.value = 0;
    oscillator1.connect(gainNode1);
    gainNode1.connect(audioCtx1.destination);
    gainNode1.gain.cancelScheduledValues(audioCtx1.currentTime);
    gainNode1.gain.setValueAtTime(gainNode1.gain.value,audioCtx1.currentTime);
    gainNode1.gain.linearRampToValueAtTime(0.1, audioCtx1.currentTime + 0.01);
}
function endTone1() {
    gainNode1.gain.cancelScheduledValues(audioCtx1.currentTime);
    gainNode1.gain.setValueAtTime(gainNode1.gain.value,audioCtx1.currentTime);
    gainNode1.gain.linearRampToValueAtTime(0.000001, audioCtx1.currentTime + 0.01);
    oscillator1.stop();
    gainNode1.disconnect(audioCtx1.destination);
}

let audioCtx2 = null;
let oscillator2;
let gainNode2;
function startTone2(hertz2) {
    audioCtx2 = new (window.AudioContext || window.webkitAudioContext)();
    oscillator2 = audioCtx2.createOscillator();
    oscillator2.type = oscillatorType;
    oscillator2.frequency.setValueAtTime(hertz2, audioCtx2.currentTime);
    oscillator2.start();
    gainNode2 = audioCtx2.createGain();
    gainNode2.gain.value = 0;
    oscillator2.connect(gainNode2);
    gainNode2.connect(audioCtx2.destination);
    gainNode2.gain.cancelScheduledValues(audioCtx2.currentTime);
    gainNode2.gain.setValueAtTime(gainNode2.gain.value,audioCtx2.currentTime);
    gainNode2.gain.linearRampToValueAtTime(0.1, audioCtx2.currentTime + 0.01);
}
function endTone2() {
    gainNode2.gain.cancelScheduledValues(audioCtx2.currentTime);
    gainNode2.gain.setValueAtTime(gainNode2.gain.value,audioCtx2.currentTime);
    gainNode2.gain.linearRampToValueAtTime(0.000001, audioCtx2.currentTime + 0.01);
    oscillator2.stop();
    gainNode2.disconnect(audioCtx2.destination);
}

let audioCtx3 = null;
let oscillator3;
let gainNode3;
function startTone3(hertz3) {
    audioCtx3 = new (window.AudioContext || window.webkitAudioContext)();
    oscillator3 = audioCtx3.createOscillator();
    oscillator3.type = oscillatorType;
    oscillator3.frequency.setValueAtTime(hertz3, audioCtx3.currentTime);
    oscillator3.start();
    gainNode3 = audioCtx3.createGain();
    gainNode3.gain.value = 0;
    oscillator3.connect(gainNode3);
    gainNode3.connect(audioCtx3.destination);
    gainNode3.gain.cancelScheduledValues(audioCtx3.currentTime);
    gainNode3.gain.setValueAtTime(gainNode3.gain.value,audioCtx3.currentTime);
    gainNode3.gain.linearRampToValueAtTime(0.1, audioCtx3.currentTime + 0.01);
}
function endTone3() {
    gainNode3.gain.cancelScheduledValues(audioCtx3.currentTime);
    gainNode3.gain.setValueAtTime(gainNode3.gain.value,audioCtx3.currentTime);
    gainNode3.gain.linearRampToValueAtTime(0.000001, audioCtx3.currentTime + 0.01);
    oscillator3.stop();
    gainNode3.disconnect(audioCtx3.destination);
}

let audioCtx4 = null;
let oscillator4;
let gainNode4;
function startTone4(hertz4) {
    audioCtx4 = new (window.AudioContext || window.webkitAudioContext)();
    oscillator4 = audioCtx4.createOscillator();
    oscillator4.type = oscillatorType;
    oscillator4.frequency.setValueAtTime(hertz4, audioCtx4.currentTime);
    oscillator4.start();
    gainNode4 = audioCtx4.createGain();
    gainNode4.gain.value = 0;
    oscillator4.connect(gainNode4);
    gainNode4.connect(audioCtx4.destination);
    gainNode4.gain.cancelScheduledValues(audioCtx4.currentTime);
    gainNode4.gain.setValueAtTime(gainNode4.gain.value,audioCtx4.currentTime);
    gainNode4.gain.linearRampToValueAtTime(0.1, audioCtx4.currentTime + 0.01);
}
function endTone4() {
    gainNode4.gain.cancelScheduledValues(audioCtx4.currentTime);
    gainNode4.gain.setValueAtTime(gainNode4.gain.value,audioCtx4.currentTime);
    gainNode4.gain.linearRampToValueAtTime(0.000001, audioCtx4.currentTime + 0.01);
    oscillator4.stop();
    gainNode4.disconnect(audioCtx4.destination);
}

let audioCtx5 = null;
let oscillator5;
let gainNode5;
function startTone5(hertz5) {
    audioCtx5 = new (window.AudioContext || window.webkitAudioContext)();
    oscillator5 = audioCtx5.createOscillator();
    oscillator5.type = oscillatorType;
    oscillator5.frequency.setValueAtTime(hertz5, audioCtx5.currentTime);
    oscillator5.start();
    gainNode5 = audioCtx5.createGain();
    gainNode5.gain.value = 0;
    oscillator5.connect(gainNode5);
    gainNode5.connect(audioCtx5.destination);
    gainNode5.gain.cancelScheduledValues(audioCtx5.currentTime);
    gainNode5.gain.setValueAtTime(gainNode5.gain.value,audioCtx5.currentTime);
    gainNode5.gain.linearRampToValueAtTime(0.1, audioCtx5.currentTime + 0.01);
}
function endTone5() {
    gainNode5.gain.cancelScheduledValues(audioCtx5.currentTime);
    gainNode5.gain.setValueAtTime(gainNode5.gain.value,audioCtx5.currentTime);
    gainNode5.gain.linearRampToValueAtTime(0.000001, audioCtx5.currentTime + 0.01);
    oscillator5.stop();
    gainNode5.disconnect(audioCtx5.destination);
}

let audioCtx6 = null;
let oscillator6;
let gainNode6;
function startTone6(hertz6) {
    audioCtx6 = new (window.AudioContext || window.webkitAudioContext)();
    oscillator6 = audioCtx6.createOscillator();
    oscillator6.type = oscillatorType;
    oscillator6.frequency.setValueAtTime(hertz6, audioCtx6.currentTime);
    oscillator6.start();
    gainNode6 = audioCtx6.createGain();
    gainNode6.gain.value = 0;
    oscillator6.connect(gainNode6);
    gainNode6.connect(audioCtx6.destination);
    gainNode6.gain.cancelScheduledValues(audioCtx6.currentTime);
    gainNode6.gain.setValueAtTime(gainNode6.gain.value,audioCtx6.currentTime);
    gainNode6.gain.linearRampToValueAtTime(0.1, audioCtx6.currentTime + 0.01);
}
function endTone6() {
    gainNode6.gain.cancelScheduledValues(audioCtx6.currentTime);
    gainNode6.gain.setValueAtTime(gainNode6.gain.value,audioCtx6.currentTime);
    gainNode6.gain.linearRampToValueAtTime(0.000001, audioCtx6.currentTime + 0.01);
    oscillator6.stop();
    gainNode6.disconnect(audioCtx6.destination);
}

let audioCtx7 = null;
let oscillator7;
let gainNode7;
function startTone7(hertz7) {
    audioCtx7 = new (window.AudioContext || window.webkitAudioContext)();
    oscillator7 = audioCtx7.createOscillator();
    oscillator7.type = oscillatorType;
    oscillator7.frequency.setValueAtTime(hertz7, audioCtx7.currentTime);
    oscillator7.start();
    gainNode7 = audioCtx7.createGain();
    gainNode7.gain.value = 0;
    oscillator7.connect(gainNode7);
    gainNode7.connect(audioCtx7.destination);
    gainNode7.gain.cancelScheduledValues(audioCtx7.currentTime);
    gainNode7.gain.setValueAtTime(gainNode7.gain.value,audioCtx7.currentTime);
    gainNode7.gain.linearRampToValueAtTime(0.1, audioCtx7.currentTime + 0.01);
}
function endTone7() {
    gainNode7.gain.cancelScheduledValues(audioCtx7.currentTime);
    gainNode7.gain.setValueAtTime(gainNode7.gain.value,audioCtx7.currentTime);
    gainNode7.gain.linearRampToValueAtTime(0.000001, audioCtx7.currentTime + 0.01);
    oscillator7.stop();
    gainNode7.disconnect(audioCtx7.destination);
}

let audioCtx8 = null;
let oscillator8;
let gainNode8;
function startTone8(hertz8) {
    audioCtx8 = new (window.AudioContext || window.webkitAudioContext)();
    oscillator8 = audioCtx8.createOscillator();
    oscillator8.type = oscillatorType;
    oscillator8.frequency.setValueAtTime(hertz8, audioCtx8.currentTime);
    oscillator8.start();
    gainNode8 = audioCtx8.createGain();
    gainNode8.gain.value = 0;
    oscillator8.connect(gainNode8);
    gainNode8.connect(audioCtx8.destination);
    gainNode8.gain.cancelScheduledValues(audioCtx8.currentTime);
    gainNode8.gain.setValueAtTime(gainNode8.gain.value,audioCtx8.currentTime);
    gainNode8.gain.linearRampToValueAtTime(0.1, audioCtx8.currentTime + 0.01);
}
function endTone8() {
    gainNode8.gain.cancelScheduledValues(audioCtx8.currentTime);
    gainNode8.gain.setValueAtTime(gainNode8.gain.value,audioCtx8.currentTime);
    gainNode8.gain.linearRampToValueAtTime(0.000001, audioCtx8.currentTime + 0.01);
    oscillator8.stop();
    gainNode8.disconnect(audioCtx8.destination);
}

let audioCtx9 = null;
let oscillator9;
let gainNode9;
function startTone9(hertz9) {
    audioCtx9 = new (window.AudioContext || window.webkitAudioContext)();
    oscillator9 = audioCtx9.createOscillator();
    oscillator9.type = oscillatorType;
    oscillator9.frequency.setValueAtTime(hertz9, audioCtx9.currentTime);
    oscillator9.start();
    gainNode9 = audioCtx9.createGain();
    gainNode9.gain.value = 0;
    oscillator9.connect(gainNode9);
    gainNode9.connect(audioCtx9.destination);
    gainNode9.gain.cancelScheduledValues(audioCtx9.currentTime);
    gainNode9.gain.setValueAtTime(gainNode9.gain.value,audioCtx9.currentTime);
    gainNode9.gain.linearRampToValueAtTime(0.1, audioCtx9.currentTime + 0.01);
}
function endTone9() {
    gainNode9.gain.cancelScheduledValues(audioCtx9.currentTime);
    gainNode9.gain.setValueAtTime(gainNode9.gain.value,audioCtx9.currentTime);
    gainNode9.gain.linearRampToValueAtTime(0.000001, audioCtx9.currentTime + 0.01);
    oscillator9.stop();
    gainNode9.disconnect(audioCtx9.destination);
}

let audioCtx10 = null;
let oscillator10;
let gainNode10;
function startTone10(hertz10) {
    audioCtx10 = new (window.AudioContext || window.webkitAudioContext)();
    oscillator10 = audioCtx10.createOscillator();
    oscillator10.type = oscillatorType;
    oscillator10.frequency.setValueAtTime(hertz10, audioCtx10.currentTime);
    oscillator10.start();
    gainNode10 = audioCtx10.createGain();
    gainNode10.gain.value = 0;
    oscillator10.connect(gainNode10);
    gainNode10.connect(audioCtx10.destination);
    gainNode10.gain.cancelScheduledValues(audioCtx10.currentTime);
    gainNode10.gain.setValueAtTime(gainNode10.gain.value,audioCtx10.currentTime);
    gainNode10.gain.linearRampToValueAtTime(0.1, audioCtx10.currentTime + 0.01);
}
function endTone10() {
    gainNode10.gain.cancelScheduledValues(audioCtx10.currentTime);
    gainNode10.gain.setValueAtTime(gainNode10.gain.value,audioCtx10.currentTime);
    gainNode10.gain.linearRampToValueAtTime(0.000001, audioCtx10.currentTime + 0.01);
    oscillator10.stop();
    gainNode10.disconnect(audioCtx10.destination);
}

let audioCtx11 = null;
let oscillator11;
let gainNode11;
function startTone11(hertz11) {
    audioCtx11 = new (window.AudioContext || window.webkitAudioContext)();
    oscillator11 = audioCtx11.createOscillator();
    oscillator11.type = oscillatorType;
    oscillator11.frequency.setValueAtTime(hertz11, audioCtx11.currentTime);
    oscillator11.start();
    gainNode11 = audioCtx11.createGain();
    gainNode11.gain.value = 0;
    oscillator11.connect(gainNode11);
    gainNode11.connect(audioCtx11.destination);
    gainNode11.gain.cancelScheduledValues(audioCtx11.currentTime);
    gainNode11.gain.setValueAtTime(gainNode11.gain.value,audioCtx11.currentTime);
    gainNode11.gain.linearRampToValueAtTime(0.1, audioCtx11.currentTime + 0.01);
}
function endTone11() {
    gainNode11.gain.cancelScheduledValues(audioCtx11.currentTime);
    gainNode11.gain.setValueAtTime(gainNode11.gain.value,audioCtx11.currentTime);
    gainNode11.gain.linearRampToValueAtTime(0.000001, audioCtx11.currentTime + 0.01);
    oscillator11.stop();
    gainNode11.disconnect(audioCtx11.destination);
}

let audioCtx12 = null;
let oscillator12;
let gainNode12;
function startTone12(hertz12) {
    audioCtx12 = new (window.AudioContext || window.webkitAudioContext)();
    oscillator12 = audioCtx12.createOscillator();
    oscillator12.type = oscillatorType;
    oscillator12.frequency.setValueAtTime(hertz12, audioCtx12.currentTime);
    oscillator12.start();
    gainNode12 = audioCtx12.createGain();
    gainNode12.gain.value = 0;
    oscillator12.connect(gainNode12);
    gainNode12.connect(audioCtx12.destination);
    gainNode12.gain.cancelScheduledValues(audioCtx12.currentTime);
    gainNode12.gain.setValueAtTime(gainNode12.gain.value,audioCtx12.currentTime);
    gainNode12.gain.linearRampToValueAtTime(0.1, audioCtx12.currentTime + 0.01);
}
function endTone12() {
    gainNode12.gain.cancelScheduledValues(audioCtx12.currentTime);
    gainNode12.gain.setValueAtTime(gainNode12.gain.value,audioCtx12.currentTime);
    gainNode12.gain.linearRampToValueAtTime(0.000001, audioCtx12.currentTime + 0.01);
    oscillator12.stop();
    gainNode12.disconnect(audioCtx12.destination);
}

let audioCtx13 = null;
let oscillator13;
let gainNode13;
function startTone13(hertz13) {
    audioCtx13 = new (window.AudioContext || window.webkitAudioContext)();
    oscillator13 = audioCtx13.createOscillator();
    oscillator13.type = oscillatorType;
    oscillator13.frequency.setValueAtTime(hertz13, audioCtx13.currentTime);
    oscillator13.start();
    gainNode13 = audioCtx13.createGain();
    gainNode13.gain.value = 0;
    oscillator13.connect(gainNode13);
    gainNode13.connect(audioCtx13.destination);
    gainNode13.gain.cancelScheduledValues(audioCtx13.currentTime);
    gainNode13.gain.setValueAtTime(gainNode13.gain.value,audioCtx13.currentTime);
    gainNode13.gain.linearRampToValueAtTime(0.1, audioCtx13.currentTime + 0.01);
}
function endTone13() {
    gainNode13.gain.cancelScheduledValues(audioCtx13.currentTime);
    gainNode13.gain.setValueAtTime(gainNode13.gain.value,audioCtx13.currentTime);
    gainNode13.gain.linearRampToValueAtTime(0.000001, audioCtx13.currentTime + 0.01);
    oscillator13.stop();
    gainNode13.disconnect(audioCtx13.destination);
}

let audioCtx14 = null;
let oscillator14;
let gainNode14;
function startTone14(hertz14) {
    audioCtx14 = new (window.AudioContext || window.webkitAudioContext)();
    oscillator14 = audioCtx14.createOscillator();
    oscillator14.type = oscillatorType;
    oscillator14.frequency.setValueAtTime(hertz14, audioCtx14.currentTime);
    oscillator14.start();
    gainNode14 = audioCtx14.createGain();
    gainNode14.gain.value = 0;
    oscillator14.connect(gainNode14);
    gainNode14.connect(audioCtx14.destination);
    gainNode14.gain.cancelScheduledValues(audioCtx14.currentTime);
    gainNode14.gain.setValueAtTime(gainNode14.gain.value,audioCtx14.currentTime);
    gainNode14.gain.linearRampToValueAtTime(0.1, audioCtx14.currentTime + 0.01);
}
function endTone14() {
    gainNode14.gain.cancelScheduledValues(audioCtx14.currentTime);
    gainNode14.gain.setValueAtTime(gainNode14.gain.value,audioCtx14.currentTime);
    gainNode14.gain.linearRampToValueAtTime(0.000001, audioCtx14.currentTime + 0.01);
    oscillator14.stop();
    gainNode14.disconnect(audioCtx14.destination);
}

let audioCtx15 = null;
let oscillator15;
let gainNode15;
function startTone15(hertz15) {
    audioCtx15 = new (window.AudioContext || window.webkitAudioContext)();
    oscillator15 = audioCtx15.createOscillator();
    oscillator15.type = oscillatorType;
    oscillator15.frequency.setValueAtTime(hertz15, audioCtx15.currentTime);
    oscillator15.start();
    gainNode15 = audioCtx15.createGain();
    gainNode15.gain.value = 0;
    oscillator15.connect(gainNode15);
    gainNode15.connect(audioCtx15.destination);
    gainNode15.gain.cancelScheduledValues(audioCtx15.currentTime);
    gainNode15.gain.setValueAtTime(gainNode15.gain.value,audioCtx15.currentTime);
    gainNode15.gain.linearRampToValueAtTime(0.1, audioCtx15.currentTime + 0.01);
}
function endTone15() {
    gainNode15.gain.cancelScheduledValues(audioCtx15.currentTime);
    gainNode15.gain.setValueAtTime(gainNode15.gain.value,audioCtx15.currentTime);
    gainNode15.gain.linearRampToValueAtTime(0.000001, audioCtx15.currentTime + 0.01);
    oscillator15.stop();
    gainNode15.disconnect(audioCtx15.destination);
}

let audioCtx16 = null;
let oscillator16;
let gainNode16;
function startTone16(hertz16) {
    audioCtx16 = new (window.AudioContext || window.webkitAudioContext)();
    oscillator16 = audioCtx16.createOscillator();
    oscillator16.type = oscillatorType;
    oscillator16.frequency.setValueAtTime(hertz16, audioCtx16.currentTime);
    oscillator16.start();
    gainNode16 = audioCtx16.createGain();
    gainNode16.gain.value = 0;
    oscillator16.connect(gainNode16);
    gainNode16.connect(audioCtx16.destination);
    gainNode16.gain.cancelScheduledValues(audioCtx16.currentTime);
    gainNode16.gain.setValueAtTime(gainNode16.gain.value,audioCtx16.currentTime);
    gainNode16.gain.linearRampToValueAtTime(0.1, audioCtx16.currentTime + 0.01);
}
function endTone16() {
    gainNode16.gain.cancelScheduledValues(audioCtx16.currentTime);
    gainNode16.gain.setValueAtTime(gainNode16.gain.value,audioCtx16.currentTime);
    gainNode16.gain.linearRampToValueAtTime(0.000001, audioCtx16.currentTime + 0.01);
    oscillator16.stop();
    gainNode16.disconnect(audioCtx16.destination);
}


// Touch Events

let keys = [].slice.call(document.querySelectorAll('.pad'), 0);
let keyboard = document.querySelector('#pads1');
let touches = [];
keyboard.addEventListener('touchstart', touchStart, false);
keyboard.addEventListener('touchend', touchEnd, false);
function isKey(key) {
	return keys.indexOf(key) >= 0;
}
function isKey1(key) {
	return keys.indexOf(key) === 0;
}
function isKey2(key) {
	return keys.indexOf(key) === 1;
}
function isKey3(key) {
	return keys.indexOf(key) === 2;
}
function isKey4(key) {
	return keys.indexOf(key) === 3;
}
function isKey5(key) {
	return keys.indexOf(key) === 4;
}
function isKey6(key) {
	return keys.indexOf(key) === 5;
}
function isKey7(key) {
	return keys.indexOf(key) === 6;
}
function isKey8(key) {
	return keys.indexOf(key) === 7;
}
function isKey9(key) {
	return keys.indexOf(key) === 8;
}
function isKey10(key) {
	return keys.indexOf(key) === 9;
}
function isKey11(key) {
	return keys.indexOf(key) === 10;
}
function isKey12(key) {
	return keys.indexOf(key) === 11;
}
function isKey13(key) {
	return keys.indexOf(key) === 12;
}
function isKey14(key) {
	return keys.indexOf(key) === 13;
}
function isKey15(key) {
	return keys.indexOf(key) === 14;
}
function isKey16(key) {
	return keys.indexOf(key) === 15;
}

function updateKeys() {
	keys.forEach(function(key) {
        if (isKey1(key) && key.classList.contains('test')) {
            endTone1();
            key.classList.remove('test');
        }
        if (isKey2(key) && key.classList.contains('test2')) {
            endTone2();
            key.classList.remove('test2');
        }
    });
	touches.forEach(function(touch) {
        if (isKey1(touch.key)) {
            touch.key.classList.add('test');
            startTone1(185);
        } 
        if (isKey2(touch.key)) {
            touch.key.classList.add('test2');
            startTone2(196);
        }
    });
}

function touchStart(evt) {
    evt.preventDefault();
    let changedTouches = evt.changedTouches;   
    for (let i = 0; i < changedTouches.length; i++) {
        let key = changedTouches[i].target;
        touches.push({ id : changedTouches[i].identifier, key: key });
    }
    updateKeys();
}
function touchEnd(evt) {
    evt.preventDefault();
    let changedTouches = evt.changedTouches;
    for (let i = 0; i < changedTouches.length; i++) {
        let index = getTouchIndex(changedTouches[i].identifier);
        if (index >= 0) {
        	touches.splice(index, 1);
        }  
    }
    updateKeys();
}
function getTouchIndex(id) {
    for (let i = 0; i < touches.length; i++) {
        if (touches[i].id === id) {
            return i;
        }
    }
    return -1;
}

// Pad Event Listeners
const btn1 = document.querySelector('.pad1');
btn1.addEventListener('mousedown', (e1) => {
    btn1.classList.add('active-red');
    startTone1(185);
    e1.preventDefault();
    e1.stopPropagation();
});
btn1.addEventListener('mouseup', (e1a) => {
    btn1.classList.remove('active-red');
    endTone1();
    e1a.preventDefault();
    e1a.stopPropagation();
});

const btn2 = document.querySelector('.pad2');
btn2.addEventListener('mousedown', (e2) => {
    btn2.classList.add('active-blue');
    startTone2(196);
    e2.preventDefault();
    e2.stopPropagation();            
});
btn2.addEventListener('mouseup', (e2a) => {
    btn2.classList.remove('active-blue');
    endTone2();
    e2a.preventDefault();
    e2a.stopPropagation();
});

const btn3 = document.querySelector('.pad3');
btn3.addEventListener('mousedown', (e3) => {
    btn3.classList.add('active-green');
    startTone3(207.65);
    e3.preventDefault();
    e3.stopPropagation();            
});
btn3.addEventListener('mouseup', (e3a) => {
    btn3.classList.remove('active-green');
    endTone3();
    e3a.preventDefault();
    e3a.stopPropagation();
});

const btn4 = document.querySelector('.pad4');
btn4.addEventListener('mousedown', (e4) => {
    btn4.classList.add('active-purple');
    startTone4(220);
    e4.preventDefault();
    e4.stopPropagation();            
});
btn4.addEventListener('mouseup', (e4a) => {
    btn4.classList.remove('active-purple');
    endTone4();
    e4a.preventDefault();
    e4a.stopPropagation();
});

const btn5 = document.querySelector('.pad5');
btn5.addEventListener('mousedown', (e5) => {
    btn5.classList.add('active-red');
    startTone5(233.08);
    e5.preventDefault();
    e5.stopPropagation();
});
btn5.addEventListener('mouseup', (e5a) => {
    btn5.classList.remove('active-red');
    endTone5();
    e5a.preventDefault();
    e5a.stopPropagation();
});

const btn6 = document.querySelector('.pad6');
btn6.addEventListener('mousedown', (e6) => {
    btn6.classList.add('active-blue');
    startTone6(246.94);
    e6.preventDefault();
    e6.stopPropagation();            
});
btn6.addEventListener('mouseup', (e6a) => {
    btn6.classList.remove('active-blue');
    endTone6();
    e6a.preventDefault();
    e6a.stopPropagation();
});

const btn7 = document.querySelector('.pad7');
btn7.addEventListener('mousedown', (e7) => {
    btn7.classList.add('active-green');
    startTone7(261.63);
    e7.preventDefault();
    e7.stopPropagation();            
});
btn7.addEventListener('mouseup', (e7a) => {
    btn7.classList.remove('active-green');
    endTone7();
    e7a.preventDefault();
    e7a.stopPropagation();
});

const btn8 = document.querySelector('.pad8');
btn8.addEventListener('mousedown', (e8) => {
    btn8.classList.add('active-purple');
    startTone8(277.18);
    e8.preventDefault();
    e8.stopPropagation();            
});
btn8.addEventListener('mouseup', (e8a) => {
    btn8.classList.remove('active-purple');
    endTone8();
    e8a.preventDefault();
    e8a.stopPropagation();
});

const btn9 = document.querySelector('.pad9');
btn9.addEventListener('mousedown', (e9) => {
    btn9.classList.add('active-red');
    startTone9(293.66);
    e9.preventDefault();
    e9.stopPropagation();
});
btn9.addEventListener('mouseup', (e9a) => {
    btn9.classList.remove('active-red');
    endTone9();
    e9a.preventDefault();
    e9a.stopPropagation();
});

const btn10 = document.querySelector('.pad10');
btn10.addEventListener('mousedown', (e10) => {
    btn10.classList.add('active-blue');
    startTone10(311.13);
    e10.preventDefault();
    e10.stopPropagation();            
});
btn10.addEventListener('mouseup', (e10a) => {
    btn10.classList.remove('active-blue');
    endTone10();
    e10a.preventDefault();
    e10a.stopPropagation();
});

const btn11 = document.querySelector('.pad11');
btn11.addEventListener('mousedown', (e11) => {
    btn11.classList.add('active-green');
    startTone11(329.63);
    e11.preventDefault();
    e11.stopPropagation();            
});
btn11.addEventListener('mouseup', (e11a) => {
    btn11.classList.remove('active-green');
    endTone11();
    e11a.preventDefault();
    e11a.stopPropagation();
});

const btn12 = document.querySelector('.pad12');
btn12.addEventListener('mousedown', (e12) => {
    btn12.classList.add('active-purple');
    startTone12(349.23);
    e12.preventDefault();
    e12.stopPropagation();            
});
btn12.addEventListener('mouseup', (e12a) => {
    btn12.classList.remove('active-purple');
    endTone12();
    e12a.preventDefault();
    e12a.stopPropagation();
});

const btn13 = document.querySelector('.pad13');
btn13.addEventListener('mousedown', (e13) => {
    btn13.classList.add('active-red');
    startTone13(369.99);
    e13.preventDefault();
    e13.stopPropagation();
});
btn13.addEventListener('mouseup', (e13a) => {
    btn13.classList.remove('active-red');
    endTone13();
    e13a.preventDefault();
    e13a.stopPropagation();
});

const btn14 = document.querySelector('.pad14');
btn14.addEventListener('mousedown', (e14) => {
    btn14.classList.add('active-blue');
    startTone14(392);
    e14.preventDefault();
    e14.stopPropagation();            
});
btn14.addEventListener('mouseup', (e14a) => {
    btn14.classList.remove('active-blue');
    endTone14();
    e14a.preventDefault();
    e14a.stopPropagation();
});

const btn15 = document.querySelector('.pad15');
btn15.addEventListener('mousedown', (e15) => {
    btn15.classList.add('active-green');
    startTone15(415.30);
    e15.preventDefault();
    e15.stopPropagation();            
});
btn15.addEventListener('mouseup', (e15a) => {
    btn15.classList.remove('active-green');
    endTone15();
    e15a.preventDefault();
    e15a.stopPropagation();
});

const btn16 = document.querySelector('.pad16');
btn16.addEventListener('mousedown', (e16) => {
    btn16.classList.add('active-purple');
    startTone16(440);
    e16.preventDefault();
    e16.stopPropagation();            
});
btn16.addEventListener('mouseup', (e16a) => {
    btn16.classList.remove('active-purple');
    endTone16();
    e16a.preventDefault();
    e16a.stopPropagation();
});

//Keyboard Event Listeners
let down1 = false;let down2 = false;let down3 = false;let down4 = false;let down5 = false;let down6 = false;let down7 = false;let down8 = false;let down9 = false;let down10 = false;let down11 = false;let down12 = false;let down13 = false;let down14 = false;let down15 = false;let down16 = false;

document.addEventListener('keydown', function(event) {
    if (event.key === '1') {
        if (down1) {return};
        down1 = true;
        startTone1(185);
        btn1.classList.add('active-red');
    } else if (event.key === '2') {
        if (down2) {return};
        down2 = true;
        startTone2(196);
        btn2.classList.add('active-blue');
    } else if (event.key === '3') {
        if (down3) {return};
        down3 = true;
        startTone3(207.65);
        btn3.classList.add('active-green');
    } else if (event.key === '4') {
        if (down4) {return};
        down4 = true;
        startTone4(220.00);
        btn4.classList.add('active-purple');
    } else if (event.key === 'q') {
        if (down5) {return};
        down5 = true;
        startTone5(233.08);
        btn5.classList.add('active-red');
    } else if (event.key === 'w') {
        if (down6) {return};
        down6 = true;
        startTone6(246.94);
        btn6.classList.add('active-blue');
    } else if (event.key === 'e') {
        if (down7) {return};
        down7 = true;
        startTone7(261.63);
        btn7.classList.add('active-green');
    } else if (event.key === 'r') {
        if (down8) {return};
        down8 = true;
        startTone8(277.18);
        btn8.classList.add('active-purple');
    } else if (event.key === 'a') {
        if (down9) {return};
        down9 = true;
        startTone9(293.66);
        btn9.classList.add('active-red');
    } else if (event.key === 's') {
        if (down10) {return};
        down10 = true;
        startTone10(311.13);
        btn10.classList.add('active-blue');
    } else if (event.key === 'd') {
        if (down11) {return};
        down11 = true;
        startTone11(329.63);
        btn11.classList.add('active-green');
    } else if (event.key === 'f') {
        if (down12) {return};
        down12 = true;
        startTone12(349.23);
        btn12.classList.add('active-purple');
    } else if (event.key === 'z') {
        if (down13) {return};
        down13 = true;
        startTone13(369.99);
        btn13.classList.add('active-red');
    } else if (event.key === 'x') {
        if (down14) {return};
        down14 = true;
        startTone14(392);
        btn14.classList.add('active-blue');
    } else if (event.key === 'c') {
        if (down15) {return};
        down15 = true;
        startTone15(415.30);
        btn15.classList.add('active-green');
    } else if (event.key === 'v') {
        if (down16) {return};
        down16 = true;
        startTone16(440);
        btn16.classList.add('active-purple');
    }
    event.preventDefault();
    event.stopPropagation();
}, false);

document.addEventListener('keyup', function(eventEnd) {
    if (eventEnd.key === '1') {
        down1 = false;
        endTone1();
        btn1.classList.remove('active-red');
    } else if (eventEnd.key === '2') {
        down2 = false;
        endTone2();
        btn2.classList.remove('active-blue');
    } else if (eventEnd.key === '3') {
        down3 = false;
        endTone3();
        btn3.classList.remove('active-green');
    } else if (eventEnd.key === '4') {
        down4 = false;
        endTone4();
        btn4.classList.remove('active-purple');
    } else if (eventEnd.key === 'q') {
        down5 = false;
        endTone5();
        btn5.classList.remove('active-red');
    } else if (eventEnd.key === 'w') {
        down6 = false;
        endTone6();
        btn6.classList.remove('active-blue');
    } else if (eventEnd.key === 'e') {
        down7 = false;
        endTone7();
        btn7.classList.remove('active-green');
    } else if (eventEnd.key === 'r') {
        down8 = false;
        endTone8();
        btn8.classList.remove('active-purple');
    } else if (eventEnd.key === 'a') {
        down9 = false;
        endTone9();
        btn9.classList.remove('active-red');
    } else if (eventEnd.key === 's') {
        down10 = false;
        endTone10();
        btn10.classList.remove('active-blue');
    } else if (eventEnd.key === 'd') {
        down11 = false;
        endTone11();
        btn11.classList.remove('active-green');
    } else if (eventEnd.key === 'f') {
        down12 = false;
        endTone12();
        btn12.classList.remove('active-purple');
    } else if (eventEnd.key === 'z') {
        down13 = false;
        endTone13();
        btn13.classList.remove('active-red');
    } else if (eventEnd.key === 'x') {
        down14 = false;
        endTone14();
        btn14.classList.remove('active-blue');
    } else if (eventEnd.key === 'c') {
        down15 = false;
        endTone15();
        btn15.classList.remove('active-green');
    } else if (eventEnd.key === 'v') {
        down16 = false;
        endTone16();
        btn16.classList.remove('active-purple');
    }
    eventEnd.preventDefault();
    eventEnd.stopPropagation();
}, false);

// Random Color
const randColor = () =>  {
    return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

// Next Wave Function
let myArray = ['sawtooth', 'square', 'triangle', 'sine'];
let myIndex = 0;
function nextElement() {
    if (myIndex === 3) {
        myIndex = 0;
    } else {
        myIndex =  myIndex + 1;
    }
    return myArray[myIndex];
};
function prevElement() {
    if (myIndex === 0) {
        myIndex = 3;
    } else {
        myIndex = myIndex - 1;
    }
    return myArray[myIndex];
};

//Switch Functions
function switchOn1() {
    document.querySelector('#pads1').style.display = 'grid';
    document.querySelector('#pads2').style.display = 'none';
    oscillatorType = 'sawtooth';
}
function switchOn2() {
    document.querySelector('#pads2').style.display = 'grid';
    document.querySelector('#pads1').style.display = 'none';
    let divs = document.querySelectorAll('#pads2 .pad');
    for(let i = 0; i < divs.length; i++){
       divs[i].style.backgroundColor = randColor();
    }
    oscillatorType = '';
}
function switchOn3() {
    
}
function switchOff3() {
   oscillatorType = prevElement();
}
function switchOn4() {
   oscillatorType = nextElement(); 
}
function switchOff4() {

}
function switch5() {

}
function switch6() {

}
function switch7() {

}
function switch8() {

}

// Switch Event Listeners
const sw1 = document.querySelector('.switch1');
sw1.addEventListener('mousedown', (s1) => {
    sw1.classList.add('active-orange');
    switchOn1();
    sw2.classList.remove('active-orange');
    s1.preventDefault();
    s1.stopPropagation();            
});
sw1.addEventListener('touchstart', (s1b) => {
    sw1.classList.add('active-orange');
    switchOn1();
    sw2.classList.remove('active-orange');
    s1b.preventDefault();
    s1b.stopPropagation();            
});

const sw2 = document.querySelector('.switch2');
sw2.addEventListener('mousedown', (s2) => {
    sw2.classList.add('active-orange');
    switchOn2();
    sw1.classList.remove('active-orange');
    s2.preventDefault();
    s2.stopPropagation();            
});
sw2.addEventListener('touchstart', (s2b) => {
    sw2.classList.add('active-orange');
    switchOn2();
    sw1.classList.remove('active-orange');
    s2b.preventDefault();
    s2b.stopPropagation();            
});

const sw3 = document.querySelector('.switch3');
sw3.addEventListener('mousedown', (s3) => {
    sw3.classList.add('active-orange');
    switchOn3();
    s3.preventDefault();
    s3.stopPropagation();            
});
sw3.addEventListener('mouseup', (s3a) => {
    sw3.classList.remove('active-orange');
    switchOff3();
    s3a.preventDefault();
    s3a.stopPropagation();
});
sw3.addEventListener('touchstart', (s3b) => {
    sw3.classList.add('active-orange');
    switchOn3();
    s3b.preventDefault();
    s3b.stopPropagation();            
});
sw3.addEventListener('touchend', (s3c) => {
    sw3.classList.remove('active-orange');
    switchOff3();
    s3c.preventDefault();
    s3c.stopPropagation();
});

const sw4 = document.querySelector('.switch4');
sw4.addEventListener('mousedown', (s4) => {
    sw4.classList.add('active-orange');
    switchOn4();
    s4.preventDefault();
    s4.stopPropagation();            
});
sw4.addEventListener('mouseup', (s4a) => {
    sw4.classList.remove('active-orange');
    switchOff4();
    s4a.preventDefault();
    s4a.stopPropagation();
});
sw4.addEventListener('touchstart', (s4b) => {
    sw4.classList.add('active-orange');
    switchOn4();
    s4b.preventDefault();
    s4b.stopPropagation();            
});
sw4.addEventListener('touchend', (s4c) => {
    sw4.classList.remove('active-orange');
    switchOff4();
    s4c.preventDefault();
    s4c.stopPropagation();
});

const sw5 = document.querySelector('.switch5');
sw5.addEventListener('mousedown', (s5) => {
    switch5();
    s5.preventDefault();
    s5.stopPropagation();            
});
const sw6 = document.querySelector('.switch6');
sw6.addEventListener('mousedown', (s6) => {
    switch6();
    s6.preventDefault();
    s6.stopPropagation();            
});
const sw7 = document.querySelector('.switch7');
sw7.addEventListener('mousedown', (s7) => {
    switch7();
    s7.preventDefault();
    s7.stopPropagation();            
});
const sw8 = document.querySelector('.switch8');
sw8.addEventListener('mousedown', (s8) => {
    switch8();
    s8.preventDefault();
    s8.stopPropagation();            
});

// Calculate PX from VH
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});