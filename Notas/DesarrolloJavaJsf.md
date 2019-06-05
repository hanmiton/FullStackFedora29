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

The <f:setPropertyActionListener> works only inside a component implementing ActionSource interface, such as <h:commandButton>, <h:commandLink>. It's unclear what autocomplete component you're talking about, but the PrimeFaces <p:autoComplete> doesn't implement it.

************MEJORAS***********
Debe poder ser modificable la fecha de entrega