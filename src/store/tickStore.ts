type Listener = () => void;

class TickStore {
  private value = 0;
  private listeners = new Set<Listener>();
  private timer: number | null = null;

  start() {
    if (this.timer != null) return;
    this.timer = setInterval(() => {
      this.value += 1;
      this.listeners.forEach((l) => l());
    }, 1000) as unknown as number;
  }

  stop() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  getSnapshot = () => this.value;
  getServerSnapshot = () => 0;
  subscribe = (listener: Listener) => {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  };
}

export const tickStore = new TickStore();
