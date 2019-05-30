select * from configuracion where parametro like '%REGISTRO_RETENCION_OBLIGATORIO_PAGO_VOUCHER%';

delete from configuracion where fecha_creacion >= '2019-02-05 12:10:05';

EDITAR_AGENTE_COMERCIAL