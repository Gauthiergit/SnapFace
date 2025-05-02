import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";

@Injectable({
	providedIn: 'root'
})
export class FaceSnapService {

	private faceSnaps: FaceSnap[] = [
		new FaceSnap(
			"Kratos",
			"Powerfull God of War",
			"https://img.20mn.fr/bouFvRmkQpOalWHHDd_LEA/1444x920_kratos-content-god-of-war-elu-jeu-annee-game-awards-2018",
			new Date(),
			156,
		),
		new FaceSnap(
			"Geralt of Rivia",
			"The Witcher or The white wolf or the blaviken's butcher",
			"https://cdn-www.konbini.com/files/2024/08/geralt-feat.jpg?width=3840&quality=75&format=webp",
			new Date(),
			80,
		),
		new FaceSnap(
			"Batman",
			"The dark knight or the vengence aka Bruce Wayne",
			"https://game-guide.fr/wp-content/uploads/2015/06/Batman_Arkham_Knight1.jpg",
			new Date(),
			10,
		).withLocation("In Gotham")
	];

	getFaceSnaps(): FaceSnap[] {
		return [...this.faceSnaps];
	}

	getFaceSnapById(faceSnapId: string): FaceSnap {
		const foundFaceSnap: FaceSnap | undefined = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId)
		if (!foundFaceSnap)
			throw new Error('FaceSnap not found !');
		return foundFaceSnap;
	}

	snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
		const faceSnap: FaceSnap = this.getFaceSnapById(faceSnapId)
		faceSnap.snap(snapType);
	}
}