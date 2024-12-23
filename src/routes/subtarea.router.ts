import { Router } from 'express';
import {
    insertarSubtarea,
    listarSubtareas,
    obtenerSubtarea,
    actualizarSubtarea,
    darBajaSubtarea
} from '../controllers/subtarea.controller';

const router: Router = Router();

router.post('/', insertarSubtarea);
router.get('/', listarSubtareas);
router.get('/:idSubtarea', obtenerSubtarea);
router.put('/:idSubtarea', actualizarSubtarea);
router.delete('/:idSubtarea', darBajaSubtarea);

export default router;