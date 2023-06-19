import { useEffect } from "react";
import {
  getSplitTextAsArray,
  renewAccessToken,
  sendLoginRequest,
  sendTextToAudioRequest,
} from "./anotherTaks.utils";
import { LOCAL_STORAGE_KEYS } from "./anotherTask.interface";

const AnotherTaskSection = () => {
  class GetAudio {
    constructor(text: string) {
      this.text = text;
    }

    text;

    start() {
      let SplitTextArray = getSplitTextAsArray(this.text);

      const sendTextToSpeechToBack = () => {
        sendTextToAudioRequest(SplitTextArray[0])
          .then((res) => {
            SplitTextArray.shift();
            console.log(res.data);
            SplitTextArray.length > 0 && sendTextToSpeechToBack();
          })
          .catch((err) => {
            console.log(err.response.status);
            err?.response?.status === 401 && renewAccessToken();
          });
      };

      sendTextToSpeechToBack();
    }
  }

  const getAudio = new GetAudio(
    "ალექსანდრე სარაჯიშვილის მსგავსი მოსაზრება შედარებით ადრე გამოთქმული აქვს ასევე ალექსანდრე ნანეიშვილსაც[2]. საპირისპიროს ამტკიცებდა რუსთველოლოგი დავით კარიჭაშვილი. მისი აზრით, ვეფხისტყაოსნის პროლოგიცა და ეპილოგიც გაყალბებულია და არანაირი საერთო არა აქვთ პოემის მთავარ ნაწილთან. დავით კარიჭაშვილის მოსაზრებით, ეს ორი ნაწილი ცალ-ცალკეც ერთიანს არაფერს წარმოადგენენ და მათი ცალკეული ტაეპები სხვადასხვა დროს სხვადასხვა პირთაგანაა დაწერილი[3]. დავით კარიჭაშვილის ეს მოსაზრება მკაცრად გააკრიტიკა ნიკოლოზ მარმა თავის რუსთველოლოგიურ ნაშრომში[4]. დავით კარიჭაშვილმა, მიუხედავად ნიკოლოზ მარის კრიტიკისა, საკუთარი მოსაზრებანი უცვლელად გაიმეორა სპეციალურ ნარკვევში „ვეფხისტყაოსნის შემადგენლობა“[5]. ეს მოსაზრებები გაიზიარა და კიდევ უფრო განავითარა რუსთველოლოგმა ალექსანდრე სვანიძემ[6]. დავით კარიჭაშვილს ერთი პერიოდი მხარს უჭერდა"
  );

  useEffect(() => {
    getAudio.start();
    !localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN) &&
      sendLoginRequest();
  }, []);

  return <div>open console</div>;
};

export default AnotherTaskSection;
