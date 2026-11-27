import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseProvider } from './database.providers';
import { ConfigService } from '../config/config.service';
import { ConfigModule } from '../config/config.module';

@Module({
    imports: [
        /* ConfigModule, */
        TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (config: ConfigService) => ({
            type: 'postgres',
            host: config.get('HOST') || 'localhost',
            port: Number(config.get('PORT_DB')) || 5432,
            username: config.get('USERNAME') || 'postgres',
            password: config.get('PASSWORD') || 'nueva_clave',
            database: config.get('DATABASE') || 'back_nest_angular',
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            /*synchronize: false,*/
            }),
        }),
    ],
    providers: [...databaseProvider, ConfigService],
    exports: [...databaseProvider, TypeOrmModule],
})
export class DatabaseModule {}