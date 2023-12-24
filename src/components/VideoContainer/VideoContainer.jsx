import "./videoContainer.css";

const VideoContainer = () => {
  return (
    <>
      <div className="video-container">
        <video
          autoPlay
          muted
          loop
          src="https://video.wixstatic.com/video/07836f_1332e0643d4f4dacb08c1f127b34f0f1/1080p/mp4/file.mp4"
        />
        <div className="captionDiv">
          <div className="helloDiv">Hello</div>
          <div className="vidContentDiv">
            I'm Adam, a creative leader, thinker, and maker from London; helping
            the world's best brands innovate - every day
          </div>
          <div className="exploreDiv">Explore Work</div>
        </div>
      </div>
    </>
  );
};

export default VideoContainer;
