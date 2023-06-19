import { useEffect } from "react";
import { sendLoginRequest, sendTextToAudioRequest } from "./anotherTaks.utils";

const AnotherTaskSection = () => {
  class GetAudio {
    constructor(text: string) {
      this.text = text;
    }

    text;

    start() {
      sendTextToAudioRequest(this.text);
    }

    onResult() {}
  }

  const getAudio = new GetAudio(
    "გამარჯობა როგორ ხართ დაგიკავშირდით ჩვენს სერვისს მადლობა"
  );

  useEffect(() => {
    getAudio.start();
  }, []);

  return (
    <div>
      <input />

      <button onClick={sendLoginRequest}>login</button>

      <button>get me audio</button>
    </div>
  );
};

export default AnotherTaskSection;
