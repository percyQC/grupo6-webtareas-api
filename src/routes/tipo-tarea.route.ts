import { Router } from 'express';
import { insertarTipoTarea, listarTipoTareas, obtenerTipoTarea, actualizarTipoTarea, darBajaTipoTarea } from '../controllers/tipo-tarea.controller';

const router: Router = Router();

router.post('/', insertarTipoTarea);
router.get('/', listarTipoTareas);
router.get('/:idTipoTarea', obtenerTipoTarea);
router.put('/:idTipoTarea', actualizarTipoTarea);
router.delete('/:idTipoTarea', darBajaTipoTarea);

export default router;