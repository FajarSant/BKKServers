import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    ParseIntPipe,
  } from '@nestjs/common';
  import { PenggunaService } from './pengguna.service';
  import { CreatePenggunaDto } from './dto/create-pengguna.dto';
  import { UpdatePenggunaDto } from './dto/update-pengguna.dto';
  
  @Controller('pengguna')
  export class PenggunaController {
    constructor(private readonly penggunaService: PenggunaService) {}
  
    @Post('create')
    create(@Body() createPenggunaDto: CreatePenggunaDto) {
      return this.penggunaService.create(createPenggunaDto);
    }
  
    @Get('getall-pengguna')
    findAll() {
      return this.penggunaService.findAll();
    }
  
    @Get('get-pengguna/:id')
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.penggunaService.findOne(id);
    }
  
    @Patch('update/:id')
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body() updatePenggunaDto: UpdatePenggunaDto,
    ) {
      return this.penggunaService.update(id, updatePenggunaDto);
    }
  
    @Delete('delete/:id')
    remove(@Param('id', ParseIntPipe) id: number) {
      return this.penggunaService.remove(id);
    }
  }
  