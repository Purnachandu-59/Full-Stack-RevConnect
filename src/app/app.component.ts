// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// // @Component({
// //   selector: 'app-root',
// //   standalone: true,
// //   imports: [RouterOutlet],
// //   template: ' Hello ',
// //   styles: [`
// //     :host {
// //       color: blue;
// //     }
// //   `]
// // })




// @Component({
//   selector: 'app-root',
//   template: `
//     @for (user of users; track user.id) {
//       <p>{{ user.name }}</p>
//     }
//   `,
// })
// export class AppComponent 
// {
//   users = [
//     {id: 0, name: 'Sarah'},
//     {id: 1, name: 'Amy'},
//     {id: 2, name: 'Rachel'},
//     {id: 3, name: 'Jessica'},
//     {id: 4, name: 'Poornima'},
//   ];
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div [contentEditable]="isEditable">
      Editable Content
    </div>

    <img 
      [src]="imageUrl" 
      alt="Angular Logo"
      width="200"
    />
  `,
  styles: [`
    :host {
      color: blue;
      display: block;
      margin: 20px;
    }
  `]
})
export class AppComponent {
  isEditable = true;
  imageUrl = "https://gizmotimes360.wordpress.com/wp-content/uploads/2014/07/lambho.jpg";
}
