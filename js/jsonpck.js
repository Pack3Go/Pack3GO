$(document).ready(function(){
$("#danger").hide();
$("#divDetalleGuia").hide();
var myObjInfo = $.parseJSON('[{"idseguimiento":"EE987271825CN","estadoEntrega":"Entregado","fechaEntrega":"Martes, Noviembre 07, 2017 EN 16:23","entregaFirmada":"CHENG Y C","tipoEnvio":"HARD CARRIER","origen":"CUAUTITLAN - CUAUTITLAN IZCALLI - MEXICO","destino":"FLAT D5, 11/F , SUPREME IND BUILDING, 15-17 SHAN MEI STREET, FOTAN.","detalleMov":[{"fecha":"Lunes, Septiembre 18, 2017","movimiento":["Aprobado por el correo","Envío retirado / Recolectado","Salida a CEDIS","Llegada a CEDIS","Procesado en CEDIS"],"ubicacion":["Ciudad de México - México","Ciudad de México - México","Ciudad de México - México","Ciudad de México - México","Ciudad de México - México"],"hora":["11:45","13:34","19:30","19:45","19:46"],"pieza":["1","1","1","1","1"]},{"fecha":"Martes, Septiembre 19, 2017","movimiento":["Salida de CEDIS a Tránsito","Regreso a CEDIS","RETENIDO en CEDIS"],"ubicacion":["Ciudad de México - México","Ciudad de México - México","Ciudad de México - México"],"hora":["11:40","14:34","14:35"],"pieza":["1","1","1"]},{"fecha":"Jueves, Octubre 05, 2017","movimiento":["Salida de CEDIS a Tránsito","Llegada a Centro de Envios"],"ubicacion":["Ciudad de México - México","Ciudad de México - México"],"hora":["07:20","10:40"],"pieza":["1","1"]},{"fecha":"Viernes, Octubre 06, 2017","movimiento":["Revision aduanal para salida a destino"],"ubicacion":["Ciudad de México - México"],"hora":["08:34"],"pieza":["1"]},{"fecha":"Martes, Octubre 10, 2017","movimiento":["Finalizo revision aduanal para salida a destino"],"ubicacion":["Ciudad de México - México"],"hora":["22:20"],"pieza":["1"]},{"fecha":"Lunes, Octubre 23, 2017","movimiento":["Procesado en Centro de Envios para salida a Destino","En Vuelo ( SALIDA INTERNACIONAL)"],"ubicacion":["Ciudad de México - México","Ciudad de México - México"],"hora":["09:40","11:45"],"pieza":["1","1"]},{"fecha":"Martes, Octubre 24, 2017","movimiento":["Actualizacion de estatus en aduanas","Procesado en Aduana Finalizado","Llegada a un centro de Oficinas.","Procesado para salida a destino","En Vuelo ( SALIDA INTERNACIONAL)"],"ubicacion":["Cincinnati -  Estados Unidos","Cincinnati -  Estados Unidos","Cincinnati -  Estados Unidos","Cincinnati -  Estados Unidos","Cincinnati - EstadosUnidos"],"hora":["13:56","15:34","16:23","20:45","22:13"],"pieza":["1","1","1","1","1"]},{"fecha":"Viernes, Noviembre 03, 2017","movimiento":["Llegada a un centro de Oficinas.","Proceso de Aduanas Iniciado","Procesado en Aduana Finalizado","Procesado en HONG KONG"],"ubicacion":["HONG KONG","HONG KONG","HONG KONG","HONG KONG"],"hora":["09:45","10:16","12:23","16:34"],"pieza":["1","1","1","1"]},{"fecha":"Martes, Noviembre 07, 2017","movimiento":["Envío en Ruta de Entrega FOTAN","Entregado "],"ubicacion":["HONG KONG","HONG KONG"],"hora":["11:16","16:23"],"pieza":["1","1"]}]},{"idseguimiento":"EE122216115CN","estadoEntrega":"Esperando Recolección para Envío","fechaEntrega":"","entregaFirmada":"JIANG FENG","tipoEnvio":"HARD CARRIER","origen":"CUAUTITLAN - CUAUTITLAN IZCALLI - MEXICO","destino":"CHINA, GUANG DONG SHENG, 518000, SHEN ZHEN SHI , LONG HUA JIE DAO, Yi Xiu Village","detalleMov":[{"fecha":"Miercoles, Noviembre 15, 2017","movimiento":["Etiqueta Impresa"],"ubicacion":["Ciudad de México - México"],"hora":["10:55"],"pieza":["1"]},{"fecha":"Jueves, Noviembre 16, 2017","movimiento":["Aprobado por el correo"],"ubicacion":["Ciudad de México - México"],"hora":["14:34"],"pieza":["1"]},{"fecha":"Martes, Noviembre 21, 2017","movimiento":["Recolectado por el correo","Llegada a CEDIS","Procesado en  CEDIS  a Tránsito"],"ubicacion":["Ciudad de México - México","Ciudad de México - México","Ciudad de México - México"],"hora":["08:44","16:25","19:41"],"pieza":["1","1","1"]}]}]');
	$("#btn_consultas").click(function(){
				  var sinInfoGuia = "No se cuenta con información de esta guia.";
				  var vacioGuia = "Favor de capturar una guia valida.";
				  var detalleGuia = "<div class='panel panel-primary'><div class=panel-heading'>Detalle de guía</div><div class='panel-body'>";
				  var headCabecera = 
				  "<table class='table table-bordered' ><thead class='thead-inverse'><tr><th scope='col'>Movimiento</th><th scope='col'>Ubicación</th><th scope='col'>Hora</th><th scope='col'>Pieza</th></tr></thead><tbody>";
				  var cadenaString = "";
				  if ($("#text_guia").val() !== "") {
					  for (i = 0; i < myObjInfo.length; i++) {
						if (myObjInfo[i].idseguimiento === $("#text_guia").val()) {
							var botonDescarga = "";
							if (myObjInfo[i].estadoEntrega == 'Entregado') {
								botonDescarga = "<a href='HardCarrEE987271825CN.pdf' class='btn btn-primary' role='button' download='Descargar firma'>Descargar firma</a>";
							}
							var panelDetalle = "<div class='panel panel-primary'>"
							+"<div class='panel-heading'><p>Detalle de guía</p></div>"
							+"<div class='panel-body' align='center'>"
							+"<table border='0' width='900px;'>"
							+"<thead><tr><th width='450px;' scope='col'>Guía aerea:</th><th width='450px;' scope='col'>Area de servicio origen:</th></tr></thead>"
							+"<thead><tr><th scope='col'><p style='margin-left: 1cm;font-size: 13px;'>" + myObjInfo[i].idseguimiento + "</p></th><th scope='col'><p style='margin-left: 1cm;font-size: 13px;'>" + myObjInfo[i].origen + "</p></th></tr></thead>"
							+"<thead><tr><th colspan='2' scope='col'>Estado:</th></tr></thead>"
							+"<thead><tr><th colspan='2' scope='col'><p style='margin-left: 1cm;font-size: 13px;'>" + myObjInfo[i].estadoEntrega + "</p></th></tr></thead>"
							+"<thead><tr><th colspan='2' scope='col'>Fecha entrega:</th></tr></thead>"
							+"<thead><tr><th colspan='2' scope='col'><p style='margin-left: 1cm;font-size: 13px;'>" + myObjInfo[i].fechaEntrega + "</p></th></tr></thead>"
							+"<thead><tr><th scope='col'>Entrega firma:</th><th scope='col'>Area de servicio destino:</th></tr></thead>"
							+"<thead><tr><th scope='col'><p style='margin-left: 1cm;font-size: 13px;'>" + myObjInfo[i].entregaFirmada + "</p></th><th scope='col'><p style='margin-left: 1cm;font-size: 13px;'>" + myObjInfo[i].destino + "</p></th></tr></thead>"
							+"<thead><tr><th colspan='2' scope='col'>Tipo de guia:</th></tr></thead>"
							+"<thead><tr><th colspan='2' scope='col'><p style='margin-left: 1cm;font-size: 13px;'>" + myObjInfo[i].tipoEnvio + "</p></th></tr></thead>"
							+"</table>" + botonDescarga;
						
							for (index = 0; index < myObjInfo[i].detalleMov.length; index++) {
								var fec = myObjInfo[i].detalleMov[index].fecha == undefined ? "":myObjInfo[i].detalleMov[index].fecha;
								cadenaString += "<tr><td><p class='thead-dark'>" + fec + "</p><td></tr>";
								for (indexDM = 0; indexDM < myObjInfo[i].detalleMov[index].movimiento.length; indexDM++) {
									var mov = myObjInfo[i].detalleMov[index].movimiento[indexDM];
									var ubicacion = myObjInfo[i].detalleMov[index].ubicacion[indexDM];
									var hora = myObjInfo[i].detalleMov[index].hora[indexDM];
									var pieza = myObjInfo[i].detalleMov[index].pieza[indexDM];
									
									mov = mov == undefined ? "":mov;
									ubicacion = ubicacion == undefined ? "":ubicacion;
									hora = hora == undefined ? "":hora;
									pieza = pieza == undefined ? "":pieza;
									cadenaString += "<tr><td>" + mov + "</td>"
											+"<td>" + ubicacion + "</td>"
											+"<td>" + hora + "</td>"	
											+"<td>" + pieza + "</td></tr>";
								}
							}
							var ponInfo = headCabecera+cadenaString+"<tbody></table>";
							$("#divDetalleGuia").empty().append(ponInfo);
							$("#divDetalleGuia").show();
							$("#detMovGuia").empty().append(panelDetalle);
							$("#detMovGuia").show();
							$("#danger").empty().append("");
							$("#danger").hide();
							break;
						} else {
							$("#divDetalleGuia").empty().append("");
							$("#divDetalleGuia").hide();
							$("#detMovGuia").empty().append("");
							$("#detMovGuia").hide();
							$("#danger").empty().append(sinInfoGuia);
							$("#danger").show();
						}
					  }
				  } else {
					$("#divDetalleGuia").empty().append("");
					$("#divDetalleGuia").hide();
					$("#detMovGuia").empty().append("");
					$("#detMovGuia").hide();
					$("#danger").empty().append(vacioGuia);
					$("#danger").show();
				  }
	});
});
