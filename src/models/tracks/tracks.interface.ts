import { Coordenada } from '../coordenada/coordenada.interface';

export interface Track {
  coordenadas: Coordenada[];
  $trackId?: number;
  trackRating: number;
  userId: string;
  androidId: number;
  //trackDate: Date;
}
