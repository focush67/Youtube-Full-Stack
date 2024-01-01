"use client";

import {
  MdPause,
  MdPlayArrow,
  MdFullscreenExit,
  MdFullscreen,
  MdVolumeDown,
  MdVolumeUp,
  MdVolumeOff,
} from "react-icons/md";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
interface VideoPlayerProps {
  videoSrc: string;
}
const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeLineRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setisPlaying] = useState(false);
  const [isFullScreen, setisFullScreen] = useState(false);
  const [currentDuration, setcurrentDuration] = useState("00:00");
  const [_, setTrigger] = useState(false);
  const [completedPercentage, setCompletedPercentage] = useState(0);

  const handleClickPlay = useCallback(() => {
    if (isPlaying) {
      videoRef.current?.pause();
      console.log("Paused");
    } else {
      videoRef.current?.play();
      console.log("Playing");
    }
    setisPlaying((playing) => !playing);
  }, [isPlaying, setisPlaying]);

  const handleMuted = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setTrigger((trigger) => !trigger);
    }
  }, []);

  const handleVolumeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (videoRef.current) {
        videoRef.current.volume = Number(e.target.value);
        if (
          videoRef.current.volume === 0 ||
          (videoRef.current.volume !== 0 && videoRef.current.muted)
        ) {
          handleMuted();
        } else {
          setTrigger((trigger) => !trigger);
        }
      }
    },
    [handleMuted]
  );

  const handleKeyPressPlay = useCallback(
    (e: KeyboardEvent) => {
      if (document.activeElement?.tagName.toLocaleLowerCase() === "input") {
        return;
      }

      const { key } = e;

      switch (key.toLocaleLowerCase()) {
        case "":
          handleClickPlay();
        default:
          return;
      }
    },
    [handleClickPlay]
  );

  const handleClickFullScreen = useCallback(() => {
    if (isFullScreen) {
      document.exitFullscreen();
    } else {
      videoRef.current?.requestFullscreen();
    }

    setisFullScreen((prev) => !prev);
  }, [isFullScreen, setisFullScreen]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPressPlay);

    return () => {
      window.removeEventListener("keydown", handleKeyPressPlay);
    };
  }, [handleKeyPressPlay]);

  const timeStampFormatter = useMemo(() => {
    return new Intl.NumberFormat(undefined, {
      minimumIntegerDigits: 2,
    });
  }, []);

  const formatTimeStamp = useCallback(
    (time: number) => {
      const hours = Math.floor(time / (60 * 60));
      const minutes = Math.floor(time / 60) % 60;
      const seconds = Math.floor(time % 60);

      if (hours === 0) {
        return `${minutes}:${timeStampFormatter.format(seconds)}`;
      } else if (minutes === 0) {
        return `${timeStampFormatter.format(seconds)}`;
      } else {
        return `${hours}:${timeStampFormatter.format(
          minutes
        )}:${timeStampFormatter.format(seconds)}`;
      }
    },
    [timeStampFormatter]
  );

  const totalDuration = useMemo(
    () => formatTimeStamp(videoRef.current?.duration || 0),
    []
  );

  const updateTimeStamp = () => {
    setcurrentDuration(formatTimeStamp(videoRef.current?.currentTime || 0));

    setCompletedPercentage(
      Math.round(
        (1000 * (videoRef.current?.currentTime || 0)) /
          (videoRef.current?.duration || 1)
      ) / 1000
    );
  };

  const handleTimeUpdate = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!timeLineRef.current) {
        return;
      }

      const timeLineBounds = timeLineRef.current?.getBoundingClientRect();
      const clickPosition = e.clientX;

      const timeWidth = clickPosition - timeLineBounds?.left;
      const timeLineWidth = timeLineBounds.right - timeLineBounds.left;

      const durationFraction = timeWidth / timeLineWidth;

      if (videoRef.current) {
        videoRef.current.currentTime =
          durationFraction * videoRef.current.duration;
      }
    },
    [videoRef, timeLineRef]
  );

  return (
    <div className="relative w-full max-w-[1000px] flex justify-center m-auto group bg-black">
      <div
        className={`absolute bottom-0 left-0 right-0 text-white bg-gradient-to-t from-black/40 z-10 opacity-0 transition-opacity group-hover:opacity-100 cursor-pointer`}
      >
        <div className="cursor-pointer flex items-center mx-2 h-2 group/timeline">
          <div
            className={`w-full relative bg-gray-500 opacity-50 hover:opacity-100 h-1 group:hover/timeline:h-full`}
            onClick={handleTimeUpdate}
            ref={timeLineRef}
          >
            <span
              style={{
                right: `${100 - completedPercentage * 100}%`,
              }}
              className="absolute left-0 top-0 bottom-0 bg-red-800"
            ></span>

            <div
              style={{
                left: `${completedPercentage * 100}%`,
              }}
              className="scale-0 group-hover/timeline:scale-100 absolute h-[200%] aspect-square bg-red-600 rounded-full translate-x-[-50%] top-[-50%]"
            ></div>
          </div>
        </div>

        <div className="flex items-center justify-between text-3xl">
          <div className="flex gap-2 p-3 items-center">
            <button
              className="opacity-70 transition-opacity hover:opacity-100"
              onClick={handleClickPlay}
            >
              {isPlaying ? <MdPause /> : <MdPlayArrow />}
            </button>
            <div className="flex items-center gap-1 group/volume">
              <button
                className="opacity-70 transition-opacity hover:opacity-100"
                onClick={handleMuted}
              >
                {videoRef.current && videoRef.current.muted ? (
                  <MdVolumeOff />
                ) : videoRef.current && videoRef.current.volume <= 0.5 ? (
                  <MdVolumeDown />
                ) : (
                  <MdVolumeUp />
                )}
              </button>
              <input
                type="range"
                min={0}
                max={1}
                step="any"
                value={videoRef?.current?.volume}
                onChange={handleVolumeChange}
                className="w-0 scale-0 group-hover/volume:w-20 group-hover/volume:scale-100 transition-all duration-200 origin-left accent-white"
              />
            </div>

            <div className="text-sm">
              {currentDuration} / {totalDuration}
            </div>
          </div>
          <div className="flex gap-2 p-3 items-center">
            <button
              className="opacity-70 translation-opacity hover:opacity-100"
              onClick={handleClickFullScreen}
            >
              {isFullScreen ? <MdFullscreenExit /> : <MdFullscreen />}
            </button>
          </div>
        </div>
      </div>

      <video
        ref={videoRef}
        src={videoSrc}
        className="w-full aspect-video z-[5]"
        onTimeUpdate={updateTimeStamp}
      ></video>
    </div>
  );
};

export default VideoPlayer;
