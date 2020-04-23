import { Module, Logger } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MyLoggerModule } from "./shared/logger/logger.module";
import configuration from "./shared/config/default.config";
import { Users } from "./modules/users/users.model";
import { DogsModule } from "./modules/dogs/dogs.module";
import { MyDogsModule } from "./modules/my_dogs/my_dogs.module";
import { join } from "path";
@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useFactory: () => ({
        dialect: "sqlite",
        //storage: "/sandbox/src/db/database.sqlite",
        storage: "/sandbox/db/database.sqlite",
        //models: [User],
        autoLoadModels: true,
        synchronize: true,
        modelPaths: [join(__dirname, "./modules/**/*.model.js")],
        modelMatch: (filename, member) => {
          let returnValue =
            filename.substring(0, filename.indexOf(".model")) ===
            member.toLowerCase();
          console.log(
            `modelMatch:filename=>${filename},member=>${member},returnValue=>${returnValue}`
          );
          return returnValue;
        }
      })
    }),
    MyLoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    })
    // Users,
    // DogsModule,
    // MyDogsModule
  ],
  controllers: [AppController],
  providers: [AppService, Logger]
})
export class AppModule {}
