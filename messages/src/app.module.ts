import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { MessagesRepository } from './messages/messages.repository';

@Module({
  imports: [MessagesModule],
  controllers: [AppController],
  providers: [AppService, MessagesRepository],
})
export class AppModule {}
