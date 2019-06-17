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
				"ht" : "<html xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:ui=\"http://java.sun.com/jsf/facelets\" xmlns:h=\"http://java.sun.com/jsf/html\" xmlns:f=\"http://java.sun.com/jsf/core\" xmlns:p=\"http://primefaces.org/ui\" xmlns:as2=\"http://java.sun.com/jsf/composite/componentes\">",
				"ui:c": "<ui:composition template=\"/template/template.xhtml\">",
				"ui:d": "<ui:define name=\"contenido\">",
				"f:fh" : "<f:facet name=\"header\">",
				"f:cdt" : "<f:convertDateTime pattern=\"#{${1:nombreBean}Bean.formatoFecha}\" />",
				"h:pg": "<h:panelGrid columns=\"#{${1:nombreBean}Bean.numeroColumnasPanelNuevo}\" columnClasses=\"columnaEtiqueta,columnaValor,columnaEtiqueta,columnaValor\">",
				"h:fpi": "<h:form prependId=\"false\" id=\"form\">",
				"h:ot" : "<h:outputText value=\"#{msgs.lbl_${1:nombre_label}}:\"/>",
				"h:otv" : "<h:outputText value=\"#{${1:value}}\">",
				"h:cotvf" : "<h:outputText value=\"#{_${1:var}.fecha}\">",
				"h:cotnh": "<h:outputText value=\"#{msgs.lbl_numero}\"/>",
				"h:cotdh" : "<h:outputText value=\"#{msgs.lbl_descripcion}\" />",
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
				"p:aum": "<p:autoComplete queryDelay=\"#{sesionControler.retrasoFiltro}\" id=\"au${1:idAutoCompletar}\" multiple=\"true\" styleClass=\"input-text\" value=\"#{${2:nombreBean}Bean.lista${3:NombreLista}}\" completeMethod=\"#{${2:nombreBean}Bean.${4:metodoAutocompletar}}\" minQueryLength=\"2\" converter=\"${5:nombreEntidad}Converter\" var=\"_${6:var}\" itemLabel=\"#{_${6:var}.${7:attr}}\" itemValue=\"#{_${6:var}}\" forceSelection=\"true\">",
				"p:aus": "<p:autoComplete queryDelay=\"#{sesionControler.retrasoFiltro}\" id=\"au${1:idAutoCompletar}\" styleClass=\"input-text\" value=\"#{${2:nombreBean}Bean.${3:nombreCampo}}\" completeMethod=\"#{${2:nombreBean}Bean.${4:metodoAutocompletar}}\" minQueryLength=\"2\" converter=\"${5:nombreEntidad}Converter\" var=\"_${6:var}\" itemLabel=\"#{_${6:var}.${7:attr}}\" itemValue=\"#{_${6:var}}\" forceSelection=\"true\">",
				"p:c" : "<p:column>",
				"p:csf" : "<p:column styleClass=\"columnaDTNumeroDocumento tableCell\" sortBy=\"#{_${1:var}.${2:campo}}\" filterBy=\"#{_${1:var}.${2:campo}}\">",
				"p:cn" : "<p:column styleClass=\"columnaDTNumeroDocumento tableCell\" sortBy=\"#{_${1:var}.numero}\" filterBy=\"#{_${1:var}.numero}\">",
				"p:cfv" : "<p:column styleClass=\"columnaDTFecha tableCell\" headerText=\"#{msgs.lbl_fecha}\" sortBy=\"#{_${1:var}.fecha}\">",
				"p:cf" : "<p:column styleClass=\"columnaDTFecha tableCell\" headerText=\"#{msgs.lbl_${1:lbl_fecha}}\" sortBy=\"#{_${2:var}.${3:campoVar}}\">",
				"p:cd": "<p:column styleClass=\"tableCell\" sortBy=\"#{_${1:var}}.descripcion}\" filterBy=\"#{_${1:var}}.descripcion}\">",

				"p:s" : "<p:spacer width=\"2px\"/>",
				"p:tv" : "<p:tabView>",
				"p:t" : "<p:tab title=\"#{msgs.lbl_${1:titleTab}}\">",
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
				"ht:cf": "p:cfv>h:cotvf>f:cdt"
			}
		}
	}
}	



