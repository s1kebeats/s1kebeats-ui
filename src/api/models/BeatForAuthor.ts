import type Tag from './Tag';

export default interface BeatForAuthor {
  id: number;
  name: string;
  bpm: number | null;
  image: string | null;
  mp3: string;
  wavePrice: number;
  stemsPrice: number | null;
  tags: Tag[];
}
