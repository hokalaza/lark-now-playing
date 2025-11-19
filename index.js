// Minimal Revenge/Vendetta plugin (plain JS). Keeps things simple so installer accepts it.
export default {
  onLoad() {
    try {
      // show a toast or console log so you can tell the plugin loaded
      if (globalThis.Revenge && typeof globalThis.Revenge.showToast === "function") {
        globalThis.Revenge.showToast("Lark Now Playing loaded");
      } else {
        console.log("Lark Now Playing loaded");
      }
    } catch (e) {
      console.log("Lark Now Playing load error", e);
    }
  },

  onUnload() {
    try {
      if (globalThis.Revenge && typeof globalThis.Revenge.showToast === "function") {
        globalThis.Revenge.showToast("Lark Now Playing unloaded");
      } else {
        console.log("Lark Now Playing unloaded");
      }
    } catch (e) {
      console.log("Lark Now Playing unload error", e);
    }
  }
};
