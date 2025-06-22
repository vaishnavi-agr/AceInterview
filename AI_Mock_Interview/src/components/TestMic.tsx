import useSpeechToText from "react-hook-speech-to-text";
  import { useEffect } from "react";
export const TestMic = () => {
  const {
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    error,
  } = useSpeechToText({  continuous: true,
  useLegacyResults: false, });



useEffect(() => {
  const speechApiSupported =
    "SpeechRecognition" in window || "webkitSpeechRecognition" in window;
  console.log("Is Speech Recognition supported?", speechApiSupported);

  if (!speechApiSupported) {
    alert("Speech Recognition API is not supported in this browser.");
  }
}, []);

  return (
    <div>
      <h1>Mic Test</h1>
      <button onClick={startSpeechToText}>
        {isRecording ? "Recording..." : "Start"}
      </button>
      <button onClick={stopSpeechToText}>Stop</button>

      <div>
        {results.map((r, i) => (
          <p key={i}>{typeof r === "string" ? r : r.transcript}</p>
        ))}
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};
