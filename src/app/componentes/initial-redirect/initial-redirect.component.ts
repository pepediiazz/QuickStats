import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial-redirect',
  standalone: true,
  template: ''
})
export class InitialRedirectComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    const visited = localStorage.getItem('visited');
    if (visited) {
      this.router.navigate(['/football']);
    } else {
      localStorage.setItem('visited', 'true');
      this.router.navigate(['/landing']);
    }
  }
}
