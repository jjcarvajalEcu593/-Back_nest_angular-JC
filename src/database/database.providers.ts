import { ConfigService } from '../config/config.service';
import { DataSource } from 'typeorm';

export const databaseProvider = [
    {
        provide: 'DATABASE_CONNECTION',
        inject: [ConfigService],
        useFactory: (config: ConfigService) => {
        const dataSource = new DataSource({
            type: 'postgres',
            host: config.get('HOST') || 'localhost',
            port: +(config.get('PORT') || 5432),
            username: config.get('USERNAME') || 'postgres',
            password: config.get('PASSWORD') || '',
            database: config.get('DATABASE') || 'back_nest_angular',
        });

        return dataSource.initialize();
        },
    },
];
