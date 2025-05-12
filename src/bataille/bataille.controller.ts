import {
    Controller,
    Get,
    Post,
    Delete,
    Param,
    Body,
    Res,
    HttpStatus, BadRequestException, Put,
} from '@nestjs/common';
import { Response } from 'express';
import { BatailleService } from './bataille.service';
import { Bataille } from './Bataille';

@Controller('bataille')
export class BatailleController {
    constructor(private readonly batailleService: BatailleService) {}

    @Get()
    async getAll(@Res() res: Response): Promise<Response> {
        const batailles = await this.batailleService.findAll();
        return res.status(HttpStatus.OK).json({
            status: 'success',
            data: batailles,
        });
    }

    @Get(':id')
    async getOne(@Param('id') id: string, @Res() res: Response): Promise<Response> {
        const bataille = await this.batailleService.findOne(Number(id));
        if (!bataille) {
            return res.status(HttpStatus.NOT_FOUND).json({
                status: 'error',
                message: `Bataille avec l'id ${id} non trouvée`,
            });
        }
        return res.status(HttpStatus.OK).json({
            status: 'success',
            data: bataille,
        });
    }

    @Post()
    async create(@Body() bataille: Bataille) {
        try {
            // Log les données reçues
            console.log('Données reçues :', bataille);

            // Validation de la date (si nécessaire)
            const date = new Date(bataille.date);
            if (isNaN(date.getTime())) {
                throw new BadRequestException('Date invalide');
            }

            // Valider le reste des champs ici, si besoin
            // Si la validation passe, crée l'objet
            const createdBataille = await this.batailleService.create(bataille);

            return {
                status: 'success',
                data: createdBataille
            };
        } catch (error) {
            console.error('Erreur lors de la création de la bataille:', error.message || error);
            throw new BadRequestException('Erreur lors de la création de la bataille');
        }
    }

    @Delete(':id')
    async delete(@Param('id') id: string, @Res() res: Response): Promise<Response> {
        try {
            console.log('Type et valeur de id reçu :', typeof id, id); // 👈 AJOUTE ÇA

            const numericId = Number(id);
            if (isNaN(numericId)) {
                throw new BadRequestException('ID invalide');
            }

            await this.batailleService.delete(numericId);

            return res.status(HttpStatus.OK).json({
                status: 'success',
                message: `Bataille avec l'id ${numericId} supprimée`,
            });
        } catch (error) {
            console.error('Erreur lors de la suppression :', error);
            return res.status(HttpStatus.BAD_REQUEST).json({
                status: 'error',
                message: 'Impossible de supprimer la bataille',
                error,
            });
        }
    }
    @Put(':id')
    async put(@Param('id') id : String , @Res() res:Response) : Promise<Response>{
        try{
            await this.batailleService.update(Number('id'));
            return res.status(HttpStatus.OK).json({
                status: 'success',
                message: `Bataille avec l'id ${id} modifier`,
            });
        }catch (error){
            console.error('Erreur lors de la modfification :', error);
            return res.status(HttpStatus.BAD_REQUEST).json({
                status: 'error',
                message: 'Impossible de modifier la bataille',
                error,
            });
        }
    }
}
