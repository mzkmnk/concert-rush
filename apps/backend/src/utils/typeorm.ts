import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

export const typeOrmModule = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    type: 'mysql',
    host: configService.get<string>('TIDB_HOST'),
    port: configService.get<number>('TIDB_PORT', 4000),
    username: configService.get<string>('TIDB_USERNAME'),
    password: configService.get<string>('TIDB_PASSWORD'),
    database: configService.get<string>('TIDB_DATABASE'),
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/../migration/*.ts'],
    synchronize: false,
  }),
});
