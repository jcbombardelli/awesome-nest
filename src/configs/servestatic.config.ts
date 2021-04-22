import { ServeStaticModuleOptions } from '@nestjs/serve-static'
import { join } from 'path'


export const serveStaticConfig: ServeStaticModuleOptions = {
  rootPath: join(__dirname, '..', 'client/dist')
}
