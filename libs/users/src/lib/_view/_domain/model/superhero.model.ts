import { Appearance } from './appearance.model';
import { Biography } from './biography.model';
import { Connections } from './connections.model';
import { Image } from './image.model';
import { Powerstats } from './powerstats.model';
import { Work } from './work.model';

export interface Superhero {
  id: string;
  name: string;
  image: Image;
  appearance: Appearance;
  biography: Biography;
  connections: Connections;
  powerstats: Powerstats;
  work: Work;
}
