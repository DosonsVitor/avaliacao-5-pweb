function resolver1(id)
{
    var p = document.querySelector(id);

    var t;

    t = Math.sqrt(169)/Math.sqrt(100);


    var hora = Math.floor(t);
    var minuto = Math.floor((t-hora) * 6);

    p.style.display = "block";
    p.innerHTML = t + "h ou "+ hora + " Hora(s) e "+ minuto + " Minuto(s)";
}
