import { Injectable } from '@nestjs/common';

import { map, firstValueFrom } from 'rxjs';
import {Bataille} from "./Bataille";
import {HttpService} from "@nestjs/axios";


@Injectable()
export class BatailleService {
    private readonly baseUrl = 'http://localhost:5000/bataille';

    constructor(private readonly http: HttpService) {}

    async findAll(): Promise<Bataille[]> {
        const response = this.http.get(this.baseUrl).pipe(map(res => res.data));
        return await firstValueFrom(response);
    }

    async findOne(id: number): Promise<Bataille> {
        const response = this.http.get(`${this.baseUrl}/${id}`).pipe(map(res => res.data));
        return await firstValueFrom(response);
    }

    async create(bataille: Bataille): Promise<void> {
        await firstValueFrom(this.http.post(this.baseUrl, bataille));
    }

    async delete(id: number): Promise<void> {
        await firstValueFrom(this.http.delete(`${this.baseUrl}/${id}`));
    }
}