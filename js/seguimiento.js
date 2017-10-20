$(document).ready(function(){
$("#danger").hide();
$("#divDetalleGuia").hide();
var myObjInfo = $.parseJSON('[{"idseguimiento": "EE987271825CN","fecha":["18-sep-2017","18-sep-2017","18-sep-2017","18-sep-2017","19-sep-2017","19-sep-2017","19-sep-2017","06-oct-2017","06-oct-2017","06-oct-2017","06-oct-2017","06-oct-2017"],"hora":["11:45","13:34","19:30","19:45","11:40","17:20","17:20","07:20","13:40","19:40","08:15","13:45"],"movimiento":["Aprobado por el correo Ciudad de México","Recolectado Ciudad de México","Llegada a CEDIS","Movimiento a CEDIS","Salida de CEDIS Ciudad de México","Regreso a CEDIS Ciudad de México","Salida de CEDIS Ciudad de México","Procesado para salida Ciudad de México","Salida a estación de transito Ciudad de México","Llagada a estación de transito Ciudad de México","Procesado para salida de estación"], "comentarios":["","se traslada"]}]');
	
	$("#btn_consultas").click(function(){
				  var sinInfoGuia = "No se cuenta con información de esta guia.";
				  var vacioGuia = "Favor de capturar una guia valida.";
				  var headCabecera = 
				  "<table class='table'><thead class='thead-dark'><tr><th scope='col'>Fecha</th><th scope='col'>Hora</th><th scope='col'>Movimiento</th><th scope='col'>Comentario</th></tr></thead><tbody>";
				  var cadenaString = "";
				  if ($("#text_guia").val() !== "") {
					  for (i = 0; i < myObjInfo.length; i++) {
						if (myObjInfo[i].idseguimiento === $("#text_guia").val()) {
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
							var ponInfo = headCabecera+cadenaString+"<tbody></table>";
							$("#divDetalleGuia").empty().append(ponInfo);
							$("#divDetalleGuia").show();
							$("#danger").empty().append("");
							$("#danger").hide();
						} else {
							$("#divDetalleGuia").empty().append("");
							$("#divDetalleGuia").hide();
							$("#danger").empty().append(sinInfoGuia);
							$("#danger").show();
						}
					  }
				  } else {
					$("#divDetalleGuia").empty().append("");
					$("#divDetalleGuia").hide();
					$("#danger").empty().append(vacioGuia);
					$("#danger").show();
				  }
	});
});
