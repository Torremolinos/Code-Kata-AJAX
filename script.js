document.querySelector(".request").addEventListener("click", (event) => {
  console.log("Click en el boton");
 requestActivity();
});

function requestActivity() {
  const url = "https://www.boredapi.com/api/activity/";
  const https = new XMLHttpRequest();

  //ahora donde vamos a consultar y que elementos vamos a comprobar

  https.open("GET", url);

  //como responderemos

  https.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log("peticion realizada");
      insertOutResponse(this.response);
    }
  };
  https.send();
}

function insertOutResponse(response) {
  let decodedResponse = JSON.parse(response);
  let container = document.querySelector(".activity");

  //vaciamos el conteiner para asegurarnos que nuestra peticiones lleguen vacias.

  container.innerHTML = "";
  //aqui hacemos la actividad
  let activity = document.createElement("h4");
  activity.append(decodedResponse.activity);

  //metemos el h4 en el contenedor.

  container.append(activity);

  let link = document.createElement("a");
  link.href = decodedResponse.link;
  link.text = decodedResponse.link;
  link.target = "_black";
  container.append(link);

  let type = document.createElement("p");
  type.append(decodedResponse.type);
  container.append(type);
}
