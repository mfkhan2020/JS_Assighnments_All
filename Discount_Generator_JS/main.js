function disc_calc() {
    event.preventDefault();
    let inp1 = Number(document.getElementById("inp1").value);
    let inp2 = Number(document.getElementById("inp2").value);

    let disc_result = inp1 * inp2 / 100;
    let pay_after_disc = inp1 - disc_result;

    document.getElementById("para1").innerHTML = disc_result;
    document.getElementById("para2").innerHTML = pay_after_disc;
}


