import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { BatailleService } from './bataille.service';
import {Bataille} from "./Bataille";
import {isString} from "class-validator";


@Controller('bataille')
export class BatailleController {
    constructor(private readonly batailleService: BatailleService) {}

    @Get()
    async getAll(): Promise<Bataille[]> {
        return this.batailleService.findAll();
    }

    @Get(':id')
    async getOne(@Param('id') id: string): Promise<Bataille> {
        return this.batailleService.findOne(Number(id));
    }

    @Post()
    async create(@Body() bataille: Bataille): Promise<void> {
        return this.batailleService.create(bataille);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.batailleService.delete(Number(id));
    }
}