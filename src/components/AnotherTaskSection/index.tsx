import { useEffect } from "react";
import { sendLoginRequest, sendTextToAudioRequest } from "./anotherTaks.utils";

const AnotherTaskSection = () => {
  class GetAudio {
    constructor(text: string) {
      this.text = text;
    }

    text;

    start() {
      const maxLength = 230;
      const minLength = 150;

      let textToWorkOn = this.text;
      let textToSendArray = [];

      const sliceAndSet = (rangeToSearch: string, signOfSplit: string) => {
        textToSendArray.push(
          textToWorkOn.slice(
            0,
            rangeToSearch.indexOf(signOfSplit) + minLength + 1
          )
        );

        textToWorkOn = textToWorkOn.slice(
          rangeToSearch.indexOf(signOfSplit) + minLength + 1,
          textToWorkOn.length
        );
      };

      while (textToWorkOn.length > 0) {
        const rangeToSearch = textToWorkOn.slice(minLength, maxLength);

        if (textToWorkOn.length <= minLength) {
          textToSendArray.push(textToWorkOn);
          textToWorkOn = "";
        } else if (rangeToSearch.includes(".")) {
          sliceAndSet(rangeToSearch, ".");
        } else if (rangeToSearch.includes("!")) {
          sliceAndSet(rangeToSearch, "!");
        } else if (rangeToSearch.includes("?")) {
          sliceAndSet(rangeToSearch, "?");
        } else if (rangeToSearch.includes(";")) {
          sliceAndSet(rangeToSearch, ";");
        } else if (rangeToSearch.includes(",")) {
          sliceAndSet(rangeToSearch, ";");
        } else if (rangeToSearch.includes(" ")) {
          sliceAndSet(rangeToSearch, ";");
        }
      }
      console.log(textToSendArray);
    }

    onResult() {}
  }

  const getAudio = new GetAudio(
    "ალექსანდრე სარაჯიშვილის მსგავსი მოსაზრება შედარებით ადრე გამოთქმული აქვს ასევე ალექსანდრე ნანეიშვილსაც[2]. საპირისპიროს ამტკიცებდა რუსთველოლოგი დავით კარიჭაშვილი. მისი აზრით, ვეფხისტყაოსნის პროლოგიცა და ეპილოგიც გაყალბებულია და არანაირი საერთო არა აქვთ პოემის მთავარ ნაწილთან. დავით კარიჭაშვილის მოსაზრებით, ეს ორი ნაწილი ცალ-ცალკეც ერთიანს არაფერს წარმოადგენენ და მათი ცალკეული ტაეპები სხვადასხვა დროს სხვადასხვა პირთაგანაა დაწერილი[3]. დავით კარიჭაშვილის ეს მოსაზრება მკაცრად გააკრიტიკა ნიკოლოზ მარმა თავის რუსთველოლოგიურ ნაშრომში[4]. დავით კარიჭაშვილმა, მიუხედავად ნიკოლოზ მარის კრიტიკისა, საკუთარი მოსაზრებანი უცვლელად გაიმეორა სპეციალურ ნარკვევში „ვეფხისტყაოსნის შემადგენლობა“[5]. ეს მოსაზრებები გაიზიარა და კიდევ უფრო განავითარა რუსთველოლოგმა ალექსანდრე სვანიძემ[6]. დავით კარიჭაშვილს ერთი პერიოდი მხარს უჭერდა"
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
