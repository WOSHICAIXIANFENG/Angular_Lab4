/**
 * Created by Samuel on 13/7/2017.
 */
import { RouterModule, Routes} from '@angular/router';
import { PostComponent } from './user-post.component';
import { DataDrivenComponent } from './data-driven.component';

const MY_ROUTES:Routes = [
  {path:'', component: DataDrivenComponent},
  {path:'result', component: PostComponent},

  // ** for all routes that we don't recognize,
  // Routes served from top to bottom so this should always come last!
  { path: '**', redirectTo: '/' }
];

export const MyRoutes = RouterModule.forRoot(MY_ROUTES);
