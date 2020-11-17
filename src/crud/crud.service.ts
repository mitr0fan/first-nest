import { Injectable } from '@nestjs/common';
import { Course } from 'src/interfaces/course.interface';
import { HttpParams } from 'src/interfaces/http-params.interface';

@Injectable()
export class CrudService {
    async getList<T>(query: HttpParams, data: T[]): Promise<T[]> {
        const offset = +query.offset || 0;
        const limit = +query.limit || Infinity;
        const paramsList: {key: string, value: string}[] = [];

        Object.entries(query)
            .forEach(([key, value]) => {
                if (key !== 'offset' && key !== 'limit') {
                    paramsList.push({ key, value })
                }
            });

        return data.filter((i, index) => {
            let isValueChecked = false;

            isValueChecked = paramsList.every(param => {
                return i[param.key] && i[param.key].toLowerCase().includes(param.value.toLowerCase());
            });

            return isValueChecked && index >= offset && index < offset + limit
        });
    }

    async getOne<T>(id: number, data: T[]): Promise<T> {
        return data.find(i => i['id'] === id);
    }

    async addToList<T>(elem: Partial<T>, data: T[]): Promise<T> {
        let id = data
            .map((i) => i['id'])
            .reduce((prev, curr) => (curr > prev ? curr : prev), -1);

        elem['id'] = ++id;
        data.push(elem as T);
        return elem as T;
    }

    async removeOne<T>(id: number, data: T[]) {
        const index = data.findIndex(i => i['id'] === id);

        if (index || index === 0) {
            return data.splice(index, 1);
        } else {
            return null;
        }
    }

    async editOne<T>(edited: Partial<T>, data: T[]) {
        const index = data.findIndex(i => i['id'] === edited['id']);

        if (index || index === 0) {
            return data[index] = {...data[index], ...edited};
        } else {
            return null;
        }
    }
}
