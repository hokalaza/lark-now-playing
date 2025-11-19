import { settings } from "@vendetta";
import { registerSettings } from "@vendetta/settings";
import { patcher } from "@vendetta/patcher";
import { findByProps } from "@vendetta/metro";

let patches = [];

export default {
    onLoad() {
        const statusModule = findByProps("setPresence");

        patches.push(
            patcher.before(statusModule, "setPresence", (args) => {
                const playing = settings.get("text", "Listening to music");
                args[0].status = "online";
                args[0].activities = [
                    {
                        name: playing,
                        type: 2
                    }
                ];
            })
        );

        registerSettings(
            "Lark Now Playing",
            () => {
                return (
                    <div>
                        <input
                            placeholder="Now playing text"
                            value={settings.get("text", "")}
                            onChange={(v) => settings.set("text", v)}
                        />
                    </div>
                );
            }
        );
    },

    onUnload() {
        for (const unpatch of patches) unpatch();
        patches = [];
    }
};
