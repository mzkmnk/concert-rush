import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { configModule } from './utils/config';
import { typeOrmModule } from './utils/typeorm';

@Module({
  imports: [configModule, typeOrmModule, HealthModule],
})
export class AppModule {}
