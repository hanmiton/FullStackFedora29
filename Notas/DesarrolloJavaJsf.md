Primer compliar cambios en bean y cambiso de vistas en temporales

datatables hide all column
	nose puede usar a nivel de datalle tiene que se una propiedad del bean
datatalbes hide valur of column
	se puede usar un h:panelGroup para no mostrar dicho valor

	requisicionEnProcesoDeCompra
ERRORES OCN OBJETOS
	dscp.getEmpresa().getProveedor().setCondicionPagoCotizable(dscp.getEmpresa().getProveedor().getCondicionPago());
		modifica el mismo por que apunta al mismo objeto
	solucion 
		CondicionPago abc = new CondicionPago();
					abc.setCodigo(dscp.getEmpresa().getProveedor().getCondicionPago().getCodigo());
					abc.setNombre(dscp.getEmpresa().getProveedor().getCondicionPago().getNombre());
					dscp.getEmpresa().getProveedor().setCondicionPagoCotizable(abc);

siempre probar editar nuevo cancelar las opciones basicas

</spacer> nos permite poner espacios en blanco dentro de primefaces

*****************************MAL***********************************
<p:autoComplete queryDelay="#{sesionControler.retrasoFiltro}" id="auSolicitud" styleClass="input-text" value="#{cotizacionCompraBean.solicitudCompra}" completeMethod="#{cotizacionCompraBean.completeSolicitud}" minQueryLength="2" converter="solicitudCompraConverter" var="_solicitud" itemLabel="#{_solicitud.numero}" itemValue="#{_solicitud}" forceSelection="true">
							<p:column>
								<h:outputText value="#{_solicitud.numero}"/>
							</p:column>
							<p:ajax process="@this" global="false" partialSubmit="true" update="@this" event="itemSelect" listener="#{cotizacionCompraBean.previzualizarPedidoProveedorListener}"/>
						</p:autoComplete>
Ajax into autocomplete envia null var
se debe usar 
	public void previzualizarPedidoProveedorListener(SelectEvent event) {  
		previzualizarPedidoProveedorListener((SolicitudCompra) event.getObject(), false);
	}
	


---------------------------------**************
The <f:setPropertyActionListener> works only inside a component implementing ActionSource interface, such as <h:commandButton>, <h:commandLink>. It's unclear what autocomplete component you're talking about, but the PrimeFaces <p:autoComplete> doesn't implement it.

************MEJORAS***********
Debe poder ser modificable la fecha de entrega

************CODIGO****************
	Contar numero de repeticiones dentro (revisar como ordenar de acuerdo a la insercion) 

	String prueba = "Hola Hola como como estas";
		
		Map<String, Long> linkedHashMap =  Arrays.asList(prueba.split(" ")).stream().collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));
		
		linkedHashMap.forEach((k,v) -> {
			System.out.println(k + "numeor de repeticiones" + v);
		});

-**************************************jsf
	referencia AS2
		Poner
			form
		No poner
			p:outputPanel

**************************
filtroEmpresa mapa fitlros empresa solo string 
Map<String,String>

<p:dataTable
	tipo selecon simpele objet
	tipo selccion multipel lista
		en caso de null en en bean verificar
*****************************************
