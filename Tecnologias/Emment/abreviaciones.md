******************
commandButton
	p => process
	t => tittle
	v => value


tag
	c => column
property
	ft => footerText
	# => id
	h => header on c: headerText
	s => sorter
	str => stylerig
	c => colspan
	f => filter
	fm => fm filterMatchMode
ajax
	rsc row select checkbox
	

{
	"snippets": {
		"html": {
			"abbreviations": {
				"ce" : "<center>",
				"as2:tb" : "<as2:toolBar bean=\"#{${1:nombreBean}Bean}\">",
				"ht" : "<html xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:ui=\"http://java.sun.com/jsf/facelets\" xmlns:h=\"http://java.sun.com/jsf/html\" xmlns:f=\"http://java.sun.com/jsf/core\" xmlns:p=\"http://primefaces.org/ui\" xmlns:as2=\"http://java.sun.com/jsf/composite/componentes\">",
				"ui:c": "<ui:composition template=\"/template/template.xhtml\">",
				"ui:d": "<ui:define name=\"contenido\">",
				"ui:ia" : "<ui:include src=\"/template/auditoriaRapida.xhtml\">",
				"ui:pfc" : "<ui:param name=\"fechaCreacion\" value=\"#{${1:nombreBean}Bean.${2:campo}.fechaCreacion}\" />",
				"ui:puc" : "<ui:param name=\"usuarioCreacion\" value=\"#{${1:nombreBean}Bean.${2:campo}.usuarioCreacion}\" />",
				"ui:pfm" : "<ui:param name=\"fechaModificacion\" value=\"#{${1:nombreBean}Bean.${2:campo}.fechaModificacion}\" />",
				"ui:pum" : "<ui:param name=\"usuarioModificacion\" value=\"#{${1:nombreBean}Bean.${2:campo}.usuarioModificacion}\" />",
				"f:fstrcn" : "<f:facet name=\"${1:name}\" colspan=\"${2:int}\" style=\"text-align:right\">",
				"f:fh" : "<f:facet name=\"header\">",
				"f:ff" : "<f:facet name=\"footer\">",
				"f:cdt" : "<f:convertDateTime pattern=\"#{${1:nombreBean}Bean.formatoFecha}\" />",
				"f:cn" : "<f:convertNumber pattern=\"#{${1:nombreBean}Bean.formato${2:nombreFormato}}\"/>",
				"h:pg": "<h:panelGrid columns=\"#{${1:nombreBean}Bean.numeroColumnasPanelNuevo}\" columnClasses=\"columnaEtiqueta,columnaValor,columnaEtiqueta,columnaValor\">",
				"h:fpi": "<h:form prependId=\"false\" id=\"form\">",
				"h:ot" : "<h:outputText value=\"#{msgs.lbl_${1:nombre_label}}:\"/>",
				"h:otv" : "<h:outputText value=\"#{${1:value}}\">",
				"h:cotv" : "<h:outputText value=\"#{_${1:var}.${2:campo}}\"/>",
				"h:cotvf" : "<h:outputText value=\"#{_${1:var}.fecha}\">",
				"h:cotnh": "<h:outputText value=\"#{msgs.lbl_numero}\"/>",
				"h:cotnh": "<h:outputText value=\"#{msgs.lbl_numero}\"/>",
				"h:coteh" : "<h:outputText value=\"#{msgs.lbl_estado}\" />",
				"h:cotev" : "<h:outputText value=\"#{_${1:var}.estado.nombre}\" />",
				"h:cotnv": "<h:outputText value=\"#{_${1:var}.numero}\" />",
				"h:cotdv" : "<h:outputText value=\"#{_${1:var}.descripcion}\" />",
				"p:dt" : "<p:dataTable filterDelay=\"#{sesionControler.retrasoFiltro}\" id=\"${1:idTabla}\" rowIndexVar=\"secuencial\" emptyMessage=\"#{msgs.msg_no_hay_datos}\" value=\"#{${2:nombreBean}Bean.lista${3:listaNombre}}\" var=\"_${4:var}\" paginator=\"true\" paginatorPosition=\"bottom\" style=\"width:100%\" rows=\"#{${2:nombreBean}Bean.numeroFilas}\" rowsPerPageTemplate=\"#{${2:nombreBean}Bean.numeroFilasPorPagina}\" selection=\"#{${2:nombreBean}Bean.${5:campoBean}}\" selectionMode=\"single\" rowKey=\"#{_${4:var}.id}\" sortBy=\"#{_${4:var}.${6:campoVarOrdenar}}\" sortOrder=\"DESCENDING\" lazy=\"true\">",
				"p:scdt" : "<p:column styleClass=\"columnaDTAccion tableCell\" headerText=\"Nº\">",
				"p:otdt": "<h:outputText value=\"#{secuencial+1}\"/>",
				"p:oppc": "<p:outputPanel id=\"panelContenedor\">",
				"p:oppn": "<p:outputPanel id=\"panelNuevo\">",
				"p:oppl": "<p:outputPanel id=\"panelListado\">",
				"p:opplh": "<p:panel header=\"#{msgs.lbl_panel_listado} (#{msgs.lbl_${1:msg_label}})\">",
				"p:op": "<p:outputPanel>",
				"p:ph": "<p:panel header=\"#{msgs.lbl_${1:nombre_label}}\">",
				"p:fs" : "<p:fieldset>",
				"p:fsl" : "<p:fieldset legend=\"#{msgs.lbl_${1:nombre_label}}\">",
				"p:atc": "<p:ajax event=\"tabChange\" update=\":form:tv${1:elemTab}\"/>",
				"p:arsc" : "<p:ajax event=\"rowSelectCheckbox\" process=\"@this :form:${1:refereciaProcesar}\" update=\":form:${2:refereciaActualizar}\" listener=\"#{${3:nombreBean}Bean.${4:metodoBean}}\"/>",
				"p:arusc" : "<p:ajax event=\"rowUnselectCheckbox\" process=\"@this :form:${1:refereciaProcesar}\" update=\":form:${2:refereciaActualizar}\" listener=\"#{${3:nombreBean}Bean.${4:metodoBean}}\"/>",
				"p:aum": "<p:autoComplete queryDelay=\"#{sesionControler.retrasoFiltro}\" id=\"au${1:idAutoCompletar}\" multiple=\"true\" styleClass=\"input-text\" value=\"#{${2:nombreBean}Bean.lista${3:NombreLista}}\" completeMethod=\"#{${2:nombreBean}Bean.${4:metodoAutocompletar}}\" minQueryLength=\"2\" converter=\"${5:nombreEntidad}Converter\" var=\"_${6:var}\" itemLabel=\"#{_${6:var}.${7:attr}}\" itemValue=\"#{_${6:var}}\" forceSelection=\"true\">",
				"p:aus": "<p:autoComplete queryDelay=\"#{sesionControler.retrasoFiltro}\" id=\"au${1:idAutoCompletar}\" styleClass=\"input-text\" value=\"#{${2:nombreBean}Bean.${3:nombreCampo}}\" completeMethod=\"#{${2:nombreBean}Bean.${4:metodoAutocompletar}}\" minQueryLength=\"2\" converter=\"${5:nombreEntidad}Converter\" var=\"_${6:var}\" itemLabel=\"#{_${6:var}.${7:attr}}\" itemValue=\"#{_${6:var}}\" forceSelection=\"true\">",
				"p:c" : "<p:column>",
				"p:cstrc" : "<p:column style=\"text-align:right\" colspan=\"${1:int}\">",
				"p:cstrcft" : "<p:column style=\"text-align:right\" colspan=\"${1:int}\" footerText=\"#{msgs.lbl_${lbl_campo}}:\">",
				"p:cu" : "<p:column styleClass=\"columnaDTUnidad tableCell\" headerText=\"#{msgs.lbl_unidad_${1:lbl_unidad}}\">",
				"p:cc" : "<p:column styleClass=\"columnaDTCantidad tableCell\" headerText=\"#{msgs.lbl_${1:lbl_campo_cantidad}}\">",
				"p:cb" : "<p:column styleClass=\"columnaDTAccion tableCell\">",
				"p:chffm" : "<p:column headerText=\"#{msgs.lbl_${1:lbl_header_col}}\" filterBy=\"#{_${2:var}.${3:campo}}\" filterMatchMode=\"contains\">",
				"p:csf" : "<p:column styleClass=\"tableCell\" sortBy=\"#{_${1:var}.${2:campo}}\" filterBy=\"#{_${1:var}.${2:campo}}\">",
				"p:cn" : "<p:column styleClass=\"columnaDTNumeroDocumento tableCell\" sortBy=\"#{_${1:var}.numero}\" filterBy=\"#{_${1:var}.numero}\">",
				"p:cfv" : "<p:column styleClass=\"columnaDTFecha tableCell\" headerText=\"#{msgs.lbl_fecha}\" sortBy=\"#{_${1:var}.fecha}\">",
				"p:cf" : "<p:column styleClass=\"columnaDTFecha tableCell\" headerText=\"#{msgs.lbl_${1:lbl_fecha}}\" sortBy=\"#{_${2:var}.${3:campoVar}}\">",
				"p:cd": "<p:column styleClass=\"tableCell\" sortBy=\"#{_${1:var}}.descripcion}\" filterBy=\"#{_${1:var}}.descripcion}\">",
				"p:ce" : "<p:column styleClass=\"columnaDTEstado tableCell\" sortBy=\"#{_${1:var}.estado}\" filterBy=\"#{_${1:var}.estado}\" filterOptions=\"#{${2:nombreBean}.listaEstadoItem}\">",
				"p:csmm" : "<p:column selectionMode=\"multiple\" style=\"width:16px;text-align:center\"/>",
				"p:cgf" : "<p:columnGroup type=\"footer\">",
				"p:cbt" : "<p:commandButton>",
				"p:cbtp" : "<p:commandButton process=\"${1:form:}\">",
				"p:cbtd" : "<p:commandButton process=\"@this :form:${1:reference:process}\" oncomplete=\"${3:nombreDialog}.show();\" actionListener=\"#{${5:nombreBean}Bean.${6:metodoBean}Listener(${7:vars})}\" update=\":form:${8:reference:update}\" title=\"#{msgs.lbl_${2:hoverlblbtn}}\" icon=\"ui-icon-${4:nombreicono}\">",
				"p:s" : "<p:spacer width=\"2px\"/>",
				"p:r" : "<p:row>",
				"p:sr" : "<p:summaryRow>",
				"p:tv" : "<p:tabView>",
				"p:t" : "<p:tab title=\"#{msgs.lbl_${1:titleTab}}\">",
				"p:dg" : "<p:dialog header=\"#{msgs.lbl_${1:label_dialog}}\" id=\"dlg${2:idDialog}\" widgetVar=\"dlg${2:idDialog}\" height=\"auto\" width=\"900\" closable=\"false\">",
				"h:otau": "<h:outputText value=\"#{_${1:var}.${2:attr}}\" />",
				"p:aisau" : "<p:ajax process=\"@this\" global=\"false\" partialSubmit=\"true\" update=\"@this\" event=\"itemSelect\"/>",
				"p:ausau" : "<p:ajax process=\"@this\" global=\"false\" partialSubmit=\"true\" update=\"@this\" event=\"itemUnselect\"/>",
				"z:pop": "ContainerAutoUpadteDeferredLoad",
				"z:pp": "ContainerHeaderFooter",
				"z:pfs": "ContainerLegendContent",
				"z:hpg": "ContaincerColumnColumStyle",
				"ht:j1": "html>ui:c>ui:d>h:fpi>p:oppc>(p:oppn+p:oppl>p:opplh)",
				"ht:j2": "html>ui:c>ui:d>h:fpi>p:ph",
				"ht:aum" : "h:ot+p:aum>(p:c>h:otau)+p:aisau+p:ausau",
				"ht:aus" : "h:ot+p:aus>(p:c>h:otau)+p:aisau",
				"ht:s" : "p:scdt>p:otdt",
				"ht:cn": "p:cn>(f:fh>h:cotnh)+h:cotnv",
				"ht:cf": "p:cfv>h:cotvf>f:cdt",
				"ht:cv": "p:csf>(f:fh>h:ot)+h:cotv",
				"ht:ce": "p:ce>(f:fh>h:coteh)+h:cotev",
				"ht:cu": "p:cu>h:cotv",
				"ht:cd": "h:otv>f:cn",
				"ht:ccd": "p:cc>h:otv>f:cn",
				"ht:cc": "p:cc>h:otv",
				"ht:uia" : "ui:ia>(ui:pfc+ui:puc+ui:pfm+ui:pum)"
			}
		}
	}
}	





