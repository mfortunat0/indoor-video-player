import { StatusBar } from "expo-status-bar";
import { useVideoPlayer, VideoView } from "expo-video";
import { StyleSheet, View } from "react-native";

export default function App() {
  const videoSource = require("./assets/video.mp4");

  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.muted = true;
    player.play();
  });

  return (
    <View style={styles.container}>
      <VideoView
        style={styles.video}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
        nativeControls={false}
      />
      <StatusBar hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  video: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
