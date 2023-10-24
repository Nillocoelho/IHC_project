import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isModalVisible = false;

  showModal() {
    this.isModalVisible = true;
  }
  closeModal() {
    this.isModalVisible = false;
  }

}
