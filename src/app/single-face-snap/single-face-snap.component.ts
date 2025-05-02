import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { FaceSnapService } from '../services/face-snaps-service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
	selector: 'app-single-face-snap',
	imports: [
		NgStyle,
		NgClass,
		UpperCasePipe,
		DatePipe,
		RouterLink
	],
	templateUrl: './single-face-snap.component.html',
	styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {

	faceSnap!: FaceSnap;
	isSnap!: boolean;
	textButton!: string;

	constructor(
		private faceSnapService: FaceSnapService,
		private route: ActivatedRoute
	) { }

	ngOnInit(): void {
		this.prepareInterface();
		this.getFaceSnap();
	}

	onClickSnap(): void {
		if (this.isSnap === true) {
			this.textButton = "oh snap! 🤌";
			this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
			this.isSnap = false;
		} else {
			this.textButton = "unsnap 👎";
			this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
			this.isSnap = true;
		}
	}

	private prepareInterface() {
		this.isSnap = false;
		this.textButton = "oh snap! 🤌";
	}

	private getFaceSnap() {
		const faceSnapId = this.route.snapshot.params['id'];
		this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
	}
}
