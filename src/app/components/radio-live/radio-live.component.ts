import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-radio-live',
  imports: [],
  templateUrl: './radio-live.component.html',
  styleUrl: './radio-live.component.css',
})
export class RadioLiveComponent {
  isPlaying = signal(false);
  private audio: HTMLAudioElement | null = null;
  private streamUrl = 'https://radioreyjesus.online/radio.mp3';

  constructor() {
    this.audio = new Audio(this.streamUrl);
    this.audio.preload = 'none';
  }

  togglePlay() {
    if (!this.audio) return;

    if (this.isPlaying()) {
      this.audio.pause();
      this.isPlaying.set(false);
    } else {
      this.audio.play().catch((error) => {
        console.error('Error al reproducir:', error);
      });
      this.isPlaying.set(true);
    }
  }

  ngOnDestroy() {
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }
  }
}
