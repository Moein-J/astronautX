"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

type TAudioControllerProps = {
  className?: string;
};

export function AudioController({ className = "" }: TAudioControllerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const toggleAudio = () => {
    if (!audioCtxRef.current) {
      // Initialize Web Audio API synth
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Deep space sub drone oscillator
      const osc1 = ctx.createOscillator();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(55, ctx.currentTime); // A1 note (55 Hz)

      // LFO for subtle pitch drift
      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.15, ctx.currentTime);
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(2.5, ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(osc1.frequency);
      lfo.start();

      // Cosmic shimmer oscillator
      const osc2 = ctx.createOscillator();
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(164.81, ctx.currentTime); // E3 harmonic

      const gain2 = ctx.createGain();
      gain2.gain.setValueAtTime(0.15, ctx.currentTime);
      osc2.connect(gain2);

      // Low pass filter to remove harshness
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(220, ctx.currentTime);

      osc1.connect(filter);
      gain2.connect(filter);
      filter.connect(masterGain);

      osc1.start();
      osc2.start();
    }

    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }

    if (!isPlaying) {
      gainNodeRef.current?.gain.setTargetAtTime(0.12, audioCtxRef.current.currentTime, 0.5);
      setIsPlaying(true);
    } else {
      gainNodeRef.current?.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.3);
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <button
      onClick={toggleAudio}
      aria-label={isPlaying ? "Mute ambient audio" : "Unmute ambient audio"}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider shadow-lg shadow-cyan-950/50 hover:bg-slate-900 transition-all duration-300 group ${className}`}
    >
      <div className="relative flex items-center justify-center">
        {isPlaying ? (
          <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />
        ) : (
          <VolumeX className="w-4 h-4 text-slate-400" />
        )}
      </div>

      <span className="hidden sm:inline">
        {isPlaying ? "COSMIC AUDIO [ON]" : "AMBIENCE [OFF]"}
      </span>

      {isPlaying && (
        <span className="flex items-end gap-0.5 h-3">
          <span className="w-0.5 h-full bg-cyan-400 animate-[bounce_1s_infinite_100ms]" />
          <span className="w-0.5 h-3/4 bg-cyan-400 animate-[bounce_1s_infinite_300ms]" />
          <span className="w-0.5 h-1/2 bg-cyan-400 animate-[bounce_1s_infinite_200ms]" />
        </span>
      )}
    </button>
  );
}
