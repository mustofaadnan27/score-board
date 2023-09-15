function changeName() {
    let name1 = document.querySelector('#ubahNama1').value;
    let name2 = document.querySelector('#ubahNama2').value;
    if (name1) {
        document.querySelector('#team1').innerHTML = name1;
    }else if(name2) {
        document.querySelector('#team2').innerHTML = name2;
    }
}




let score1 =  0;
let scoreElement1 = document.querySelector('.score1');
scoreElement1.innerHTML = score1;
let tambah1 = document.querySelector('#buttonTambah1').addEventListener('click', function() {
    score1++;
    scoreElement1.innerHTML = score1;
    disableEnableButton();
})

let kurang1 = document.querySelector('#buttonKurang1').addEventListener('click', function() {
    if (score1 > 0) {
        score1--;
        scoreElement1.innerHTML = score1;
        disableEnableButton();
    }
})

let score2 =  0;
let scoreElement2 = document.querySelector('.score2');
scoreElement2.innerHTML = score2;
let tambah2 = document.querySelector('#buttonTambah2').addEventListener('click', function() {
    score2++;
    scoreElement2.innerHTML = score2;
    disableEnableButton();
})

let kurang2 = document.querySelector('#buttonKurang2').addEventListener('click', function() {
    if (score2 > 0) {
        score2--;
        scoreElement2.innerHTML = score2;
        disableEnableButton();
    }
})

function disableEnableButton() {
    if (score1 === 0) {
        document.querySelector('#buttonKurang1').disabled = true;
    }else {
        document.querySelector('#buttonKurang1').disabled = false;

    }
}
