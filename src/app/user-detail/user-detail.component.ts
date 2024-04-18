import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
})
export class UserDetailComponent {
  @Input() users: any;
  isEdit = false;
  currentUser: any;

  edit(user: any) {
    this.isEdit = true;
    this.currentUser = { ...user };
  }
  closeEditForm() {
    this.isEdit = false;
  }
  update() {
    const index = this.users.findIndex(
      (user: any) => user.id === this.currentUser.id
    );

    if (index !== -1) {
      this.users[index] = { ...this.currentUser };
      this.isEdit = false;
    }
  }

  isValid(): boolean {
    return (
      this.isNameValid() &&
      this.isEmailValid() &&
      this.isPhoneValid() &&
      this.isAgeValid()
    );
  }

  isNameValid(): boolean {
    return !!this.currentUser.name && this.currentUser.name.trim() !== '';
  }

  validateEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  isEmailValid(): boolean {
    return (
      !!this.currentUser.email && this.validateEmail(this.currentUser.email)
    );
  }

  validatePhone(phone: string): boolean {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
  }

  isPhoneValid(): boolean {
    return (
      !!this.currentUser.phone && this.validatePhone(this.currentUser.phone)
    );
  }

  isAgeValid(): boolean {
    return (
      !!this.currentUser.age &&
      !isNaN(this.currentUser.age) &&
      this.currentUser.age >= 1
    );
  }
}
