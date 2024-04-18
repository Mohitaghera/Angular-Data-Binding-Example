import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserDetailComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = [
    {
      id: 1,
      name: 'Mohit Aghera',
      email: 'm@gmail.com',
      phone: 9876543210,
      age: 21,
    },
    {
      id: 2,
      name: 'Jimmy',
      email: 'm@gmail.com',
      phone: 9876543210,
      age: 21,
    },
    {
      id: 3,
      name: 'Utsav',
      email: 'm@gmail.com',
      phone: 9876543210,
      age: 21,
    },
    {
      id: 4,
      name: 'Kedar',
      email: 'm@gmail.com',
      phone: 9876543210,
      age: 24,
    },
    {
      id: 5,
      name: 'Dhaval',
      email: 'm@gmail.com',
      phone: 9876543210,
      age: 20,
    },
    {
      id: 6,
      name: 'Raj',
      email: 'm@gmail.com',
      phone: 9876543210,
      age: 26,
    },
    {
      id: 7,
      name: 'Meet',
      email: 'm@gmail.com',
      phone: 9876543210,
      age: 28,
    },
    {
      id: 8,
      name: 'Kush',
      email: 'm@gmail.com',
      phone: 9876543210,
      age: 23,
    },
  ];
}
