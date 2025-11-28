import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,              
  imports: [RouterModule, CommonModule ],      
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
constructor(private router: Router) {}

  isLoginPage(): boolean {
    return this.router.url === '/';
  }
}
