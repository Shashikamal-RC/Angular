import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';


// should specify first component that needs to be loaded
platformBrowserDynamic().bootstrapModule(AppModule); 