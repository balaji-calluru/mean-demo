import { Component } from '@angular/core';

// this is the infamous component
// - one of the blocks on your page
// - expect to create some more

// add the @Component decorator
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent {

}

// now that you have created a new component
// you need to register this sucker into the app.module.ts
// then you can see them working its magic on the SPA
// SPA - Single Page Application
