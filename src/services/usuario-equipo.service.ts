import { AppDataSource } from "../config/db.config";
import { usuarioEquipo } from "../entities/usuario-equipo";
import { EstadoAuditoria } from "../enums/estado-auditoria";

const repository = AppDataSource.getRepository(usuarioEquipo);

export const insertarUsuarioEquipo= async (data: Partial<usuarioEquipo>): Promise<usuarioEquipo>  => {
    const newUsuarioEquipo: usuarioEquipo = await repository.save(data);
    return await repository.findOne({where: {idUsuarioEquipo: newUsuarioEquipo.idUsuarioEquipo},
        relations: ['usuario','equipo']
    });    
}

export const listarUsuarioEquipo = async (): Promise<usuarioEquipo[]> =>{
    return await repository.find({where: {estadoAuditoria: EstadoAuditoria.ACTIVO},
        relations: ['usuario','equipo']
    });
}

export const obtenerUsuarioEquipo = async (idUsuarioEquipo: number ) : Promise<usuarioEquipo> => {
    return await repository.findOne({ where: { idUsuarioEquipo , estadoAuditoria: EstadoAuditoria.ACTIVO },
        relations: ['usuario','equipo'] });  
}

export const actualizarUsuarioEquipo = async (idUsuarioEquipo: number, data: Partial<usuarioEquipo>) => {
    await repository.update(idUsuarioEquipo,data);
    return obtenerUsuarioEquipo(idUsuarioEquipo);
}

export const darBajaUsuarioEquipo = async (idUsuarioEquipo: number): Promise<void> => {
    await repository.update(idUsuarioEquipo, { estadoAuditoria: EstadoAuditoria.INACTIVO });
    
}