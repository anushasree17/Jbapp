import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JournalEntity } from './journal/journal.Entity';
import { JournalController } from './journal/journal.controller';
import { JournalService } from './journal/journal.service';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://admin:Anusha%401988@16.171.226.32:27017/?authSource=admin&authMechanism=SCRAM-SHA-1',
      // database: DB_NAME,
      entities: [JournalEntity],
    }),
    TypeOrmModule.forFeature([JournalEntity]),
  ],
  controllers: [JournalController],
  providers: [JournalService],
})
export class AppModule {}
