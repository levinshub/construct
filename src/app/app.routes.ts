import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogsComponent } from './blogs/blogs.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    {
        path: 'home',
        data: { title: 'Home' },
        component: HomeComponent,
      }, {
        path: 'contact-us',
        data: { title: 'Contact Us' },
        component: ContactUsComponent,
      }, {
        path: 'about-us',
        data: { title: 'About Us' },
        component: AboutUsComponent,
      },{
        path: 'blogs',
        data: { title: 'blogs' },
        component: BlogsComponent,
      },
      
];
