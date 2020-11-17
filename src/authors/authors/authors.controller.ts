import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CrudService } from 'src/crud/crud.service';
import { Author } from 'src/interfaces/author.interface';
import { HttpParams } from 'src/interfaces/http-params.interface';
import { AuthorsService } from './authors.service';

@Controller('authors')
export class AuthorsController {
    constructor(private crud: CrudService, private authorsService: AuthorsService) {}

    @Get()
    async getList(@Query() query: HttpParams): Promise<Author[]> {
        return this.crud.getList<Author>(query, this.authorsService.data);
    }

    @Post()
    async addAuthor(@Body() body): Promise<Author> {
        return this.crud.addToList<Author>(body, this.authorsService.data);
    }
}
