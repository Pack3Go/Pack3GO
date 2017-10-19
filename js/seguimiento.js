function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	  var jsoninfo = this.responseText;
	  var myObjInfo = JSON.parse(jsoninfo.toString());
	  var sinInfoGuia = "No se cuenta con información de esta guia.";
	  var vacioGuia = "Favor de capturar una guia valida.";
	  var headCabecera = 
	  "<table border='2'><tr><td>Fecha</td><td>Hora</td><td>Movimiento</td><td>Comentario</td></tr>";
	  var cadenaString = "";
	  if (document.getElementById("text_guia").value !== "") {
		  for (i = 0; i < myObjInfo.length; i++) {
			if (myObjInfo[i].idseguimiento === document.getElementById("text_guia").value) {
				for (index = 0; index < myObjInfo[i].fecha.length; index++) {
					var fec = myObjInfo[i].fecha[index] == undefined ? "":myObjInfo[i].fecha[index];
					var hrs = myObjInfo[i].hora[index] == undefined ? "":myObjInfo[i].hora[index];
					var mov = myObjInfo[i].movimiento[index] == undefined ? "":myObjInfo[i].movimiento[index];
					var comen = myObjInfo[i].comentarios[index] == undefined ? "":myObjInfo[i].comentarios[index];
					cadenaString += "<tr><td>" + fec + "</td>"
								+"<td>" + hrs + "</td>"
								+"<td>" + mov + "</td>"
								+"<td>" + comen + "</td></tr>";
				}
				var ponInfo = headCabecera+cadenaString+"</table>";
				document.getElementById("divDetalleGuia").innerHTML = ponInfo;
				document.getElementById("msg").innerHTML = "";
			} else {
				document.getElementById("divDetalleGuia").innerHTML = "";
				document.getElementById("msg").innerHTML = sinInfoGuia;
			}
		  }
	  } else {
		document.getElementById("divDetalleGuia").innerHTML = "";
		document.getElementById("msg").innerHTML = vacioGuia;
	  }
	}
  };
  xhttp.open("GET", "JS/pack3go.json", true);
  xhttp.send();
}