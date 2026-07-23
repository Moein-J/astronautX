"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { Terminal, Activity, Rocket, CheckCircle2, RefreshCw } from "lucide-react";

type TCosmosDashboardProps = {
  className?: string;
};

export function CosmosDashboard({ className = "" }: TCosmosDashboardProps) {
  const [activeTab, setActiveTab] = useState<"telemetry" | "systems" | "command">("telemetry");
  const [thrustPower, setThrustPower] = useState(85);
  const [shieldActive, setShieldActive] = useState(true);
  const [dockingStatus, setDockingStatus] = useState<"IDLE" | "DOCKING" | "DOCKED">("IDLE");

  const handleInitiateDocking = () => {
    if (dockingStatus !== "IDLE") return;
    setDockingStatus("DOCKING");

    setTimeout(() => {
      setDockingStatus("DOCKED");
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#22d3ee", "#a855f7", "#ffffff", "#38bdf8"],
      });
    }, 2000);
  };

  const handleReset = () => {
    setDockingStatus("IDLE");
  };

  return (
    <div
      className={`w-full max-w-4xl mx-auto rounded-2xl bg-slate-950/80 border border-cyan-500/30 backdrop-blur-2xl shadow-2xl shadow-cyan-950/40 overflow-hidden font-mono text-sm ${className}`}
    >
      {/* Terminal Header Bar */}
      <div className="flex items-center justify-between px-6 py-3.5 bg-slate-900/90 border-b border-white/10 text-xs">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          </div>
          <span className="text-cyan-400 font-bold tracking-wider flex items-center gap-2">
            <Terminal className="w-4 h-4" /> STATION-OS v4.12 // TERMINAL
          </span>
        </div>
        <div className="text-slate-400 text-xs hidden sm:block">
          STATUS: <span className="text-emerald-400 font-semibold">ONLINE</span>
        </div>
      </div>

      {/* Control Tabs */}
      <div className="flex border-b border-white/10 bg-slate-900/40 text-xs">
        <button
          onClick={() => setActiveTab("telemetry")}
          className={`flex-1 py-3 px-4 text-center font-medium border-b-2 transition-all ${
            activeTab === "telemetry"
              ? "border-cyan-400 text-cyan-300 bg-cyan-950/30"
              : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          [1] LIVE TELEMETRY
        </button>
        <button
          onClick={() => setActiveTab("systems")}
          className={`flex-1 py-3 px-4 text-center font-medium border-b-2 transition-all ${
            activeTab === "systems"
              ? "border-cyan-400 text-cyan-300 bg-cyan-950/30"
              : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          [2] SHIP SYSTEMS
        </button>
        <button
          onClick={() => setActiveTab("command")}
          className={`flex-1 py-3 px-4 text-center font-medium border-b-2 transition-all ${
            activeTab === "command"
              ? "border-cyan-400 text-cyan-300 bg-cyan-950/30"
              : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          [3] DOCKING COMMAND
        </button>
      </div>

      {/* Terminal Tab Body */}
      <div className="p-6 sm:p-8 space-y-6 text-slate-300">
        {activeTab === "telemetry" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/70 border border-white/5 space-y-1">
                <span className="text-xs text-slate-500">ORBITAL SPEED</span>
                <p className="text-xl font-bold text-cyan-400">27,600 KM/H</p>
                <span className="text-[10px] text-emerald-400">NORMAL TRAJECTORY</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/70 border border-white/5 space-y-1">
                <span className="text-xs text-slate-500">CABIN PRESSURE</span>
                <p className="text-xl font-bold text-purple-400">101.3 KPA</p>
                <span className="text-[10px] text-emerald-400">STABLE O2 RATIO</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/70 border border-white/5 space-y-1">
                <span className="text-xs text-slate-500">DIST TO OUTPOST</span>
                <p className="text-xl font-bold text-amber-400">14.2 KM</p>
                <span className="text-[10px] text-cyan-400">CLOSING RATE 12M/S</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/50 border border-cyan-500/20 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-cyan-300">
                  <Activity className="w-4 h-4 animate-pulse" /> QUANTUM DATA STREAM
                </span>
                <span className="text-slate-400">PACKET BUFFER: 100%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-linear-to-r from-cyan-500 via-indigo-500 to-purple-500 animate-pulse w-full" />
              </div>
            </div>
          </div>
        )}

        {activeTab === "systems" && (
          <div className="space-y-6 animate-fadeIn">
            {/* Thrust Power Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>THRUSTER OUTPUT LEVEL</span>
                <span className="text-cyan-400 font-bold">{thrustPower}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={thrustPower}
                onChange={(e) => setThrustPower(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            {/* Shield Matrix Switch */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900/70 border border-white/5">
              <div>
                <p className="text-sm font-semibold text-white">DEFLECTOR SHIELD MATRIX</p>
                <p className="text-xs text-slate-400">Protect hull against solar micrometeoroids</p>
              </div>
              <button
                onClick={() => setShieldActive(!shieldActive)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  shieldActive
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                    : "bg-red-500/20 text-red-300 border border-red-500/40"
                }`}
              >
                {shieldActive ? "SHIELD ACTIVE" : "SHIELD OFFLINE"}
              </button>
            </div>
          </div>
        )}

        {activeTab === "command" && (
          <div className="space-y-6 text-center py-4 animate-fadeIn">
            <div className="space-y-2">
              <Rocket className="w-10 h-10 text-cyan-400 mx-auto animate-bounce" />
              <h4 className="text-lg font-bold text-white">STATION DOCKING SEQUENCER</h4>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                Align thrusters with Space Station Port 07. Press below to initiate automated electromagnetic docking protocol.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              {dockingStatus === "IDLE" && (
                <button
                  onClick={handleInitiateDocking}
                  className="px-8 py-3.5 rounded-full bg-linear-to-r from-cyan-500 to-indigo-600 text-white font-bold text-xs tracking-wider shadow-lg shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all"
                >
                  INITIATE AUTOMATED DOCKING
                </button>
              )}

              {dockingStatus === "DOCKING" && (
                <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold">
                  <RefreshCw className="w-4 h-4 animate-spin" /> ALIGNING ORBITAL VECTORS...
                </div>
              )}

              {dockingStatus === "DOCKED" && (
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> DOCKING SUCCESSFUL — WELCOME ABOARD!
                  </div>
                  <button
                    onClick={handleReset}
                    className="text-xs text-slate-400 hover:text-white underline"
                  >
                    Reset Terminal Sequence
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
