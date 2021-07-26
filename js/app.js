const api = "https://api.jikan.moe/v3/search/anime?q=";

function buscar() {
  const input = document.querySelector("#buscar");

  fetch(`${api}${input.value}`)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      localStorage.datos = JSON.stringify(result.results);
      llenardatos(result.results);
    })
    .catch((err) => {
      console.log("seguro algo fallo", err);
    });
}

const botonBuscar = document.querySelector("#searchAgain");

botonBuscar.addEventListener("click", buscar);

function llenardatos(animes) {
  /*------ cod ------------*/
  const d = document;

  let divresultado = d.querySelector("#resultado");

  for (let ani of animes) {
    //creo el div contenedor
    let ulresult = d.createElement("ul");
    ulresult.classList.add("p-0");

    //creo el li
    //falta id anime
    let liResult = d.createElement("li");
    liResult.id = "anime";
    liResult.classList.add(
      "mt-5",
      "row",
      "justify-content-between",
      "align-items-center",
      "m-0",
      "pb-2",
      "pb-md-0",
      "liApi"
    );

    //creo div que contiene la img
    let divContenImg = d.createElement("div");
    divContenImg.classList.add("col-12", "p-0", "col-md-3", "text-center");

    //creo la imag
    let img = d.createElement("img");

    img.src = `${ani.image_url}`;

    img.classList.add("imgRidus");
    img.alt = `${ani.title}`;

    divContenImg.appendChild(img);

    liResult.appendChild(divContenImg);

    //CONTENEDOR DE INFO

    let divContInfo = d.createElement("div");
    divContInfo.classList.add("col-12", "col-md-5");

    //FALTA ID TITULO
    let h3 = d.createElement("h3");

    h3.classList.add("titulo", "h5", "pt-3", "font-weight-bold");
    h3.innerText = ani.title;
    //h3.innerHTML = `${prod['nombre']}`;
    divContInfo.appendChild(h3);

    //creo la p para la sinoptsis falta agregarle el contenio!!!!!Falta ID

    let pSiniopsis = d.createElement("p");

    pSiniopsis.classList.add("sinopsis");
    pSiniopsis.innerText = ani.synopsis;

    divContInfo.appendChild(pSiniopsis);

    liResult.appendChild(divContInfo);

    let divContBoton = d.createElement("div");
    divContBoton.classList.add("col-12", "col-md-2");
    let spanScore = d.createElement("span");
    spanScore.innerText = "Score";
    divContBoton.appendChild(spanScore);
    let pScore = d.createElement("p");
    divContBoton.classList.add("score");
    pScore.innerText = ani.score;
    //pSiniopsis.setAttribute( 'Score');COLOCAR ID SCORE

    divContBoton.appendChild(pScore);

    let btnlink = d.createElement("button");

    btnlink.innerText = "Ir a Myanimelist";
    btnlink.classList.add("btn-enviar");
    btnlink.addEventListener("click", () => {
      window.location.href = ani.url;
    });

    divContBoton.appendChild(btnlink);
    liResult.appendChild(divContBoton);

    ulresult.appendChild(liResult);

    divresultado.appendChild(ulresult);
  }
}

document.addEventListener("estamoActivo", function (e) {
  // alert('online')
});
