import { AppDataSource } from "../config/db.config";
import { TipoTarea } from "../entities/tipo-tarea";
import { EstadoAuditoria } from "../enums/estado-auditoria";

const repository = AppDataSource.getRepository(TipoTarea);

export const insertarTipoTarea = async (data: Partial<TipoTarea>): Promise<TipoTarea> => {
    const newTipoTarea: TipoTarea = await repository.save(data);
    return await repository.findOne({ where: { idTipoTarea: newTipoTarea.idTipoTarea } });    
};

export const listarTipoTareas = async (): Promise<TipoTarea[]> => {
    return await repository.find({ where: { estadoAuditoria: EstadoAuditoria.ACTIVO } });
};

export const obtenerTipoTarea = async (idTipoTarea: number): Promise<TipoTarea> => {
    return await repository.findOne({ where: { idTipoTarea, estadoAuditoria: EstadoAuditoria.ACTIVO } });  
};

export const actualizarTipoTarea = async (idTipoTarea: number, data: Partial<TipoTarea>) => {
    await repository.update(idTipoTarea, data);
    return obtenerTipoTarea(idTipoTarea);
};

export const darBajaTipoTarea = async (idTipoTarea: number): Promise<void> => {
    await repository.update(idTipoTarea, { estadoAuditoria: EstadoAuditoria.INACTIVO });
};