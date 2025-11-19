import { storage } from "@vendetta/plugin";
import { findByProps } from "@vendetta/metro";
import { plugin } from "@vendetta";

const Status = findByProps("setCustomStatus");

export const onLoad = () => {
  if (!storage.song) storage.song = "No Song";

  Status.setCustomStatus({
    text: `🎵 Listening on Lark: ${storage.song}`
  });
};

export const onUnload = () => {
  Status.setCustomStatus(null);
};

export const settings = () => ({
  title: "Lark Now Playing",
  render: () => {
    return (
      <div style={{ padding: 10 }}>
        <h3>Lark Now Playing</h3>
        <input
          placeholder="Enter song name"
          value={storage.song}
          onChange={(v) => {
            storage.song = v;
            Status.setCustomStatus({
              text: `🎵 Listening on Lark: ${storage.song}`
            });
          }}
        />
      </div>
    );
  }
});
