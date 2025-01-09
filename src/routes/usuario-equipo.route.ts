import { Router } from 'express';
import { actualizarUsuarioEquipo, darBajaUsuarioEquipo, insertarUsuarioEquipo, listarUsuarioEquipo, obtenerUsuarioEquipo } from '../controllers/usuario-equipo.controller';


const router: Router = Router();

router.post('/',insertarUsuarioEquipo);
router.get('/',listarUsuarioEquipo);
router.get('/:idUsuarioEquipo',obtenerUsuarioEquipo);
router.put('/:idUsuarioEquipo',actualizarUsuarioEquipo);
router.delete('/:idUsuarioEquipo',darBajaUsuarioEquipo);


export default router;