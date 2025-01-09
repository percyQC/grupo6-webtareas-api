import { Request, Response } from 'express'; 
import * as usuarioEquipoService from '../services/usuario-equipo.service';
import { BaseResponse } from '../shared/base-response';
import { Message } from '../enums/message';
import { usuarioEquipo } from '../entities/usuario-equipo';



export const insertarUsuarioEquipo = async (req: Request, res: Response) => {
    try {
        console.log('insertarUsuarioEquipo')
        const usuarioequipo: Partial<usuarioEquipo> = req.body;
        const newUsuarioEquipo: usuarioEquipo = await usuarioEquipoService.insertarUsuarioEquipo(usuarioequipo)
        res.json(BaseResponse.success(newUsuarioEquipo,Message.INSERTADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }  
    
}

export const listarUsuarioEquipo = async (req: Request, res: Response) => {
    try {
        console.log('listarUsuarioEquipo');
        const usuarioequipos: usuarioEquipo[] = await usuarioEquipoService.listarUsuarioEquipo();        
        res.json(BaseResponse.success(usuarioequipos));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
    
}

export const obtenerUsuarioEquipo = async (req: Request, res: Response)=>{
    try {
        console.log('obtenerUsuarioEquipo');
        const {idUsuarioEquipo} = req.params;    
        const usuarioequipo: usuarioEquipo = await usuarioEquipoService.obtenerUsuarioEquipo(Number(idUsuarioEquipo));
        if(!usuarioequipo){
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }
        res.json(BaseResponse.success(usuarioequipo));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
    
}

export const actualizarUsuarioEquipo = async (req: Request, res: Response)=>{
    try {
        const { idUsuarioEquipo } = req.params;
        const usuarioequipo: Partial<usuarioEquipo> = req.body;
        if(!(await usuarioEquipoService.obtenerUsuarioEquipo(Number(idUsuarioEquipo)))){
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }
        const updateUsuarioEquipo: usuarioEquipo = await usuarioEquipoService.actualizarUsuarioEquipo(Number(idUsuarioEquipo),usuarioequipo)
        res.json(BaseResponse.success(updateUsuarioEquipo,Message.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
    
}

export const darBajaUsuarioEquipo = async (req: Request, res: Response)=>{
    try {
        console.log('darBajaUsuarioEquipo');
        const { idUsuarioEquipo } = req.params;
        if(!(await usuarioEquipoService.obtenerUsuarioEquipo(Number(idUsuarioEquipo)))){
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }        
        await usuarioEquipoService.darBajaUsuarioEquipo(Number(idUsuarioEquipo));
        res.json(BaseResponse.success(null,Message.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
    
}