import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
	@Input() stages: [];
	@Input() currentStageId: 0;
 	@Output() changeStageId = new EventEmitter<number>();

	onNavigate(id) {
		this.changeStageId.emit(id);
	}
}
