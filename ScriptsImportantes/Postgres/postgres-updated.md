delete from comprobante_electronico_pendiente_sri;
delete from clave_acceso_pendiente_publicar;
update configuracion set valor='false', valor_mostrar='false' where parametro like '%AMBIENTE_FACTURACION_ELECTRONICA%';
update usuario set clave = '0c50fd2947a9e1f1490da25908fcd926' where nombre_usuario = 'admin';
update configuracion set valor='true', valor_mostrar='true' where parametro = 'generacion_de_costos_automatica';
update configuracion set valor='/home/chilli/AS2' where parametro = 'AS2_HOME';
update configuracion set valor_mostrar='/home/chilli/AS2' where parametro = 'AS2_HOME';
update tarea_programada set activo = false;