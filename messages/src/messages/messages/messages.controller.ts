import { Body, Controller, Get, Param, Post, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from '../dtos/create-message.dto';
import { MessagesService } from '../messages.service';
@Controller('messages')
export class MessagesController {

    constructor(public messagesService: MessagesService){}
    
    @Get()
    listMessages() {
        return this.messagesService.findAll();
    }

    @Post()
    createMessages(@Body() body: CreateMessageDto) {
        return this.messagesService.create(body.content)
    }

    @Get('/:id')
    getMessage(@Param('id') id:string) {
       
        const message = this.messagesService.findOne(id);
        if (!message) {
            throw new NotFoundException('message not found')
        }
        return message
    }

}
