import { Router } from 'express';
import {insertarTarea,listarTarea,obtenerTarea,actualizarTarea,darBajaTarea} from '../controllers/tarea.controller';

const router: Router = Router();

router.post('/',insertarTarea);
router.get('/',listarTarea);
router.get('/:idTarea',obtenerTarea);
router.put('/:idTarea',actualizarTarea);
router.delete('/:idTarea',darBajaTarea);

export default router;