import { Request, Response } from 'express'; 
import * as TipoTareaService from '../services/tipo_tarea.service';
import { TipoTarea } from '../entities/tipo-tarea';
import { BaseResponse } from '../shared/base-response';
import { Message } from '../enums/message';

export const insertarTipoTarea = async (req: Request, res: Response) => {
    try {
        console.log('insertarTipoTarea');
        const tipoTarea: Partial<TipoTarea> = req.body;
        const newTipoTarea: TipoTarea = await TipoTareaService.insertarTipoTarea(tipoTarea);
        res.json(BaseResponse.success(newTipoTarea, Message.INSERTADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }  
};

export const listarTipoTareas = async (req: Request, res: Response) => {
    try {
        console.log('listarTipoTareas');
        const tipoTareas: TipoTarea[] = await TipoTareaService.listarTipoTareas();        
        res.json(BaseResponse.success(tipoTareas));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const obtenerTipoTarea = async (req: Request, res: Response) => {
    try {
        console.log('obtenerTipoTarea');
        const { idTipoTarea } = req.params;    
        const tipoTarea: TipoTarea = await TipoTareaService.obtenerTipoTarea(Number(idTipoTarea));
        if (!tipoTarea) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }
        res.json(BaseResponse.success(tipoTarea));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const actualizarTipoTarea = async (req: Request, res: Response) => {
    try {
        const { idTipoTarea } = req.params;
        const tipoTarea: Partial<TipoTarea> = req.body;
        if (!(await TipoTareaService.obtenerTipoTarea(Number(idTipoTarea)))) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }
        const updatedTipoTarea: TipoTarea = await TipoTareaService.actualizarTipoTarea(Number(idTipoTarea), tipoTarea);
        res.json(BaseResponse.success(updatedTipoTarea, Message.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const darBajaTipoTarea = async (req: Request, res: Response) => {
    try {
        console.log('darBajaTipoTarea');
        const { idTipoTarea } = req.params;
        if (!(await TipoTareaService.obtenerTipoTarea(Number(idTipoTarea)))) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }        
        await TipoTareaService.darBajaTipoTarea(Number(idTipoTarea));
        res.json(BaseResponse.success(null, Message.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};
