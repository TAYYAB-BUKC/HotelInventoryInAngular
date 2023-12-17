import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'hinv-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnDestroy {
  title: string = 'Header Title'

  ngOnDestroy(): void {
    console.log('This Life cyle called when this component element gets removed from the DOM. To illustrate this, I removed this component element from the DOM');
  }
}
