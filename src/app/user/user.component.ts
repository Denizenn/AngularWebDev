import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);




@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input( {required: true} ) user!: User;
  @Input({required: true}) selected!: boolean;

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}


// Newer version of inputs w signals
//--------------------------------
// avatar = input.required<string>();
// name = input.required<string>();

// imagePath = computed(() => {
//   return 'assets/users/' + this.avatar();
// });
//--------------------------------

// Modern output solution
// select = output<string>();
