import { NoteTag } from '@app/entities/note-tag.entity';
import { Note } from '@app/entities/note.entity';
import { Tag } from '@app/entities/tag.entity';
import { Todo } from '@app/entities/todo.entity';
import { User } from '@app/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly config: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.config.get<string>('DB_HOST'),
      port: this.config.get<number>('DB_PORT'),
      username: this.config.get<string>('DB_USERNAME'),
      password: this.config.get<string>('DB_PASSWORD'),
      database: this.config.get<string>('DB_NAME'),
      ssl: {
        ca: this.config.get<string>('CA_SSL_PATH'),
        rejectUnauthorized: false,
      },
      entities: [User, Note, Todo, Tag, NoteTag],
      synchronize: false,
    };
  }
}
