import React, { useEffect } from "react";
import { VideoSDKMeeting } from "@videosdk.live/rtc-js-prebuilt";
import logo from "../../assets/jungaroo.png";

export default function Chatbox() {
  useEffect(() => {
    const apiKey = "d2a52301-d856-4b8f-a139-4902e27f4bc7";
    const meetingId = "milkyway";
    const name = "Type your name here";

    const config = {
      name: name,
      meetingId: meetingId,
      apiKey: apiKey,

      containerId: null,
      redirectOnLeave: "http://localhost:3000/",

      micEnabled: true,
      webcamEnabled: true,
      participantCanToggleSelfWebcam: true,
      participantCanToggleSelfMic: true,

      chatEnabled: true,
      screenShareEnabled: true,
      pollEnabled: true,
      whiteBoardEnabled: true,
      raiseHandEnabled: true,

      recordingEnabled: true,
      recordingEnabledByDefault: false,
      recordingWebhookUrl: "https://www.videosdk.live/callback",
      participantCanToggleRecording: true,

      brandingEnabled: true,
      brandLogoURL: logo,
      brandName: "Jung's Joeys",

      participantCanLeave: true, // if false, leave button won't be visible

      livestream: {
        autoStart: true,
        outputs: [
          // {
          //   url: "rtmp://x.rtmp.youtube.com/live2",
          //   streamKey: "<STREAM KEY FROM YOUTUBE>",
          // },
        ],
      },

      permissions: {
        askToJoin: false, // Ask joined participants for entry in meeting
        toggleParticipantMic: false, // Can toggle other participant's mic
        toggleParticipantWebcam: false, // Can toggle other participant's webcam
      },

      joinScreen: {
        visible: true, // Show the join screen ?
        title: "Chat Room", // Meeting title
        meetingUrl: window.location.href, // Meeting joining url
      },

      pin: {
        allowed: true, // participant can pin any participant in meeting
        layout: "SPOTLIGHT", // meeting layout - GRID | SPOTLIGHT | SIDEBAR
      },
    };

    const meeting = new VideoSDKMeeting();
    meeting.init(config);
  }, []);

  return <div id="chat"></div>;
}
