function resolver2(id)
{
    var p = document.querySelector(id);

    var R = 10, i = 3, U, R2, i2, t = 4.5; 
    //R => Resistor 1,
    //i => corrente eletrica de R, 
    //U => ddp, 
    //R2 => Resistor 2,
    //i2 => corrente eletrica de R2,
    //t => corrente eletrica total.

    U = R * i;

    i2 = t - i;

    R2 = U / i2;

    p.style.display = "block";
    p.innerHTML = R2+"Ω";
}