/**
 * Lightweight Web Audio API synthesizer for hymn tune rehearsal
 * Simulates a warm church organ / harmonium tone completely offline.
 */

class HymnAudioPlayer {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private currentStopFn: (() => void) | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  private midiToFreq(midi: number): number {
    return 440 * Math.pow(2, (midi - 69) / 12);
  }

  playMelody(
    midiNotes: number[],
    onProgress?: (index: number) => void,
    onEnded?: () => void
  ) {
    this.stop();
    const ctx = this.initContext();
    this.isPlaying = true;

    let aborted = false;
    const timeouts: number[] = [];
    const noteDuration = 0.55; // seconds per note
    const gap = 0.08;

    midiNotes.forEach((midi, index) => {
      const startTime = ctx.currentTime + index * (noteDuration + gap);

      const timeoutId = window.setTimeout(() => {
        if (!aborted && onProgress) {
          onProgress(index);
        }
      }, (index * (noteDuration + gap)) * 1000);
      timeouts.push(timeoutId);

      // Create gentle organ dual-oscillator
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = 'triangle';
      osc2.type = 'sine';

      const freq = this.midiToFreq(midi);
      osc1.frequency.setValueAtTime(freq, startTime);
      osc2.frequency.setValueAtTime(freq * 2, startTime); // subtle octave harmonic

      // Soft envelope (gentle attack, smooth release)
      gain.gain.setValueAtTime(0.0001, startTime);
      gain.gain.linearRampToValueAtTime(0.22, startTime + 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + noteDuration);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start(startTime);
      osc2.start(startTime);
      osc1.stop(startTime + noteDuration);
      osc2.stop(startTime + noteDuration);
    });

    const totalDuration = midiNotes.length * (noteDuration + gap);
    const endTimeout = window.setTimeout(() => {
      this.isPlaying = false;
      this.currentStopFn = null;
      if (onEnded) onEnded();
    }, totalDuration * 1000);
    timeouts.push(endTimeout);

    this.currentStopFn = () => {
      aborted = true;
      timeouts.forEach(t => clearTimeout(t));
      this.isPlaying = false;
      if (onEnded) onEnded();
    };
  }

  stop() {
    if (this.currentStopFn) {
      this.currentStopFn();
      this.currentStopFn = null;
    }
    this.isPlaying = false;
  }

  getIsPlaying() {
    return this.isPlaying;
  }
}

export const hymnAudio = new HymnAudioPlayer();
