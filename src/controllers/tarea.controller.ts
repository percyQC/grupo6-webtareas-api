import { Request, Response } from 'express'; 
import * as tareaService from '../services/tarea.service';
import { BaseResponse } from '../shared/base-response';
import { Message } from '../enums/message';
import { Tarea } from '../entities/tarea';

export const insertarTarea = async (req: Request, res: Response) => {
    try {
        console.log('insertarTarea')
        const tarea: Partial<Tarea> = req.body;
        const newTarea: Tarea = await tareaService.insertarTarea(tarea)
        res.json(BaseResponse.success(newTarea,Message.INSERTADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }   
}

export const listarTarea = async (req: Request, res: Response) => {
    try {
        console.log('listarTarea');
        const tareas: Tarea[] = await tareaService.listarTarea();              
        res.json(BaseResponse.success(tareas));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }   
}

export const obtenerTarea = async (req: Request, res: Response)=>{
    try {
        console.log('obtenerTarea');
        const {idTarea} = req.params;    
        const tarea: Tarea = await tareaService.obtenerTarea(Number(idTarea));
        if(!tarea){
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }
        res.json(BaseResponse.success(tarea));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }    
}

export const actualizarTarea = async (req: Request, res: Response)=>{
    try {
        const { idTarea } = req.params;
        const tarea: Partial<Tarea> = req.body;
        if(!(await tareaService.obtenerTarea(Number(idTarea)))){
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }
        const updateTarea: Tarea = await tareaService.actualizarTarea(Number(idTarea),tarea)
        res.json(BaseResponse.success(updateTarea,Message.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }    
}

export const darBajaTarea = async (req: Request, res: Response)=>{
    try {
        console.log('darBajaTarea');
        const { idTarea } = req.params;
        if(!(await tareaService.obtenerTarea(Number(idTarea)))){
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }        
        await tareaService.darBajaTarea(Number(idTarea));
        res.json(BaseResponse.success(null,Message.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }    
}