export default interface BeatUpload {
  name: string;
  wavePrice: number;
  wave: string;
  mp3: string;
  image: string;
  stems?: string;
  stemsPrice?: number;
  description?: string;
  bpm?: number;
}
