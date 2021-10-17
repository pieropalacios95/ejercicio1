import { Router } from "express";
import {getLibros, createNewLibro} from '../controllers/libro.controller'

const router = Router();

router.get('/libro', getLibros)

router.post('/libro', createNewLibro)

router.get('/libro', )

router.put('/libro', )

router.delete('/libro', )

export default router