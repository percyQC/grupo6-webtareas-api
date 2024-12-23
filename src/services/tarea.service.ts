import { AppDataSource } from "../config/db.config";
import { Tarea } from "../entities/tarea";
import { EstadoAuditoria } from "../enums/estado-auditoria";

const repository = AppDataSource.getRepository(Tarea);

export const insertarTarea= async (data: Partial<Tarea>): Promise<Tarea>  => {
    const newTarea: Tarea = await repository.save(data);
    return await repository.findOne({where: {idTarea: newTarea.idTarea}});    
}

export const listarTarea = async (): Promise<Tarea[]> =>{
    return await repository.find({
        where: {estadoAuditoria: EstadoAuditoria.ACTIVO},
        relations: ['tipotarea','usuario','equipo']
    });
}

export const obtenerTarea = async (idTarea: number ) : Promise<Tarea> => {
    return await repository.findOne({ 
        where: { idTarea , estadoAuditoria: EstadoAuditoria.ACTIVO },
        relations: ['tipotarea','usuario','equipo']
    });  
}

export const actualizarTarea = async (idTarea: number, data: Partial<Tarea>) => {
    await repository.update(idTarea,data);
    return obtenerTarea(idTarea);
}

export const darBajaTarea = async (idTarea: number): Promise<void> => {
    await repository.update(idTarea, { estadoAuditoria: EstadoAuditoria.INACTIVO });
    
}