// Simple Pomodoro Timer logic for the UI
// Default values (minutes)
let defaults = {
    work: 25,
    shortBreak: 5,
    longBreak: 15,
    cyclesUntilLong: 4
  };
  
  let state = {
    mode: "work", // "work", "short", "long"
    running: false,
    remaining: defaults.work * 60,
    intervalId: null,
    currentCycle: 1,
    totalCycles: defaults.cyclesUntilLong
  };
  
  // Elements
  const timeDisplay = document.getElementById("timeDisplay");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const resetBtn = document.getElementById("resetBtn");
  const progressBar = document.getElementById("progressBar");
  const cycleText = document.getElementById("cycleText");
  
  const workInput = document.getElementById("workInput");
  const shortInput = document.getElementById("shortInput");
  const longInput = document.getElementById("longInput");
  const cyclesInput = document.getElementById("cyclesInput");
  const applyBtn = document.getElementById("applyBtn");
  const restoreBtn = document.getElementById("restoreBtn");
  
  // Initialize UI
  function init() {
    // set inputs to defaults
    workInput.value = defaults.work;
    shortInput.value = defaults.shortBreak;
    longInput.value = defaults.longBreak;
    cyclesInput.value = defaults.cyclesUntilLong;
  
    resetToDefaults();
    updateUI();
  }
  
  function resetToDefaults() {
    state.mode = "work";
    state.running = false;
    clearIntervalSafe();
    state.currentCycle = 1;
    state.totalCycles = defaults.cyclesUntilLong;
    state.remaining = defaults.work * 60;
    setPlayIcon(false);
    updateUI();
  }
  
  function clearIntervalSafe() {
    if (state.intervalId !== null) {
      clearInterval(state.intervalId);
      state.intervalId = null;
    }
  }
  
  function setPlayIcon(running) {
    playPauseBtn.textContent = running ? "⏸" : "▶";
  }
  
  // Format seconds to MM : SS
  function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    const mm = String(m).padStart(2, "0");
    const ss = String(s).padStart(2, "0");
    return `${mm} : ${ss}`;
  }
  
  // Update displayed time + progress + cycle text
  function updateUI() {
    timeDisplay.textContent = formatTime(state.remaining);
  
    // compute duration for current mode (in seconds)
    const duration = getDurationForMode(state.mode);
    const elapsed = Math.max(0, duration - state.remaining);
    const fraction = duration > 0 ? (elapsed / duration) : 0;
    progressBar.style.width = `${Math.round(fraction * 100)}%`;
  
    cycleText.textContent = `Cycle ${state.currentCycle} of ${state.totalCycles}`;
  }
  
  // return duration in seconds for mode
  function getDurationForMode(mode) {
    if (mode === "work") return (defaults.work * 60);
    if (mode === "short") return (defaults.shortBreak * 60);
    if (mode === "long") return (defaults.longBreak * 60);
    return defaults.work * 60;
  }
  
  // Timer tick
  function tick() {
    if (state.remaining <= 0) {
      // Switch modes
      if (state.mode === "work") {
        // finished a work cycle -> increment cycle and switch to break
        state.currentCycle++;
        const useLong = (state.currentCycle - 1) % state.totalCycles === 0;
        state.mode = useLong ? "long" : "short";
        state.remaining = getDurationForMode(state.mode);
      } else {
        // finished a break -> go back to work
        state.mode = "work";
        state.remaining = getDurationForMode("work");
        // if we went past totalCycles, wrap cycle counter to 1
        if (state.currentCycle > state.totalCycles) {
          state.currentCycle = 1;
        }
      }
      // small beep (if allowed) - optional: try to play a short sound using Web Audio
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = "sine";
        o.frequency.value = 800;
        o.connect(g);
        g.connect(ctx.destination);
        g.gain.value = 0.05;
        o.start();
        setTimeout(() => { o.stop(); ctx.close(); }, 180);
      } catch (e) {
        // ignore audio errors
      }
    } else {
      state.remaining--;
    }
    updateUI();
  }
  
  // Play / Pause
  playPauseBtn.addEventListener("click", () => {
    if (!state.running) {
      // start
      state.running = true;
      setPlayIcon(true);
      // prevent multiple intervals
      if (!state.intervalId) {
        state.intervalId = setInterval(tick, 1000);
      }
    } else {
      // pause
      state.running = false;
      setPlayIcon(false);
      clearIntervalSafe();
    }
  });
  
  // Reset
  resetBtn.addEventListener("click", () => {
    // Reset current mode to its full duration and stop
    state.running = false;
    setPlayIcon(false);
    clearIntervalSafe();
    state.mode = "work";
    state.remaining = defaults.work * 60;
    state.currentCycle = 1;
    updateUI();
  });
  
  // Apply settings
  applyBtn.addEventListener("click", () => {
    // read inputs (basic validation)
    const w = parseInt(workInput.value, 10) || defaults.work;
    const s = parseInt(shortInput.value, 10) || defaults.shortBreak;
    const l = parseInt(longInput.value, 10) || defaults.longBreak;
    const c = Math.max(1, parseInt(cyclesInput.value, 10) || defaults.cyclesUntilLong);
  
    defaults.work = Math.max(1, w);
    defaults.shortBreak = Math.max(1, s);
    defaults.longBreak = Math.max(1, l);
    defaults.cyclesUntilLong = c;
  
    // update state appropriately
    state.totalCycles = c;
    state.mode = "work";
    state.remaining = defaults.work * 60;
    state.currentCycle = 1;
    state.running = false;
    clearIntervalSafe();
    setPlayIcon(false);
    updateUI();
  });
  
  // Restore defaults
  restoreBtn.addEventListener("click", () => {
    defaults = { work: 25, shortBreak: 5, longBreak: 15, cyclesUntilLong: 4 };
    workInput.value = defaults.work;
    shortInput.value = defaults.shortBreak;
    longInput.value = defaults.longBreak;
    cyclesInput.value = defaults.cyclesUntilLong;
    resetToDefaults();
  });
  
  // optional: toggle between Podomoro / Deadlines (just visual toggle now)
  document.querySelectorAll(".pill").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      // for now only Podomoro logic is implemented; Deadlines could be added
      if (btn.dataset.mode === "deadlines") {
        // visual only: swap title text
        document.querySelector(".timer-title").textContent = "Deadlines";
      } else {
        document.querySelector(".timer-title").textContent = "Focus Time";
      }
    });
  });
  
  // init
  init();
  