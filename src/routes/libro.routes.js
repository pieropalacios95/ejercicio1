import { Router } from "express";
import {getLibros, createNewLibro, getLibroById, deleteLibro, countTotalLibros, updateLibroById} from '../controllers/libro.controller'

const router = Router();

router.get('/libro', getLibros)

router.post('/libro', createNewLibro)

router.get('/libro/count', countTotalLibros)

router.get('/libro/:id', getLibroById)

router.delete('/libro/:id', deleteLibro)

router.put('/libro/:id', updateLibroById)

export default router