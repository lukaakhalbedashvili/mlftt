import axios from "axios";
import { LOCAL_STORAGE_KEYS } from "./anotherTask.interface";

const baseUrl = "https://enagramm.com/API";

export const sendLoginRequest = () => {
  axios
    .post(`${baseUrl}/Account/Login`, {
      Email: "levan.lashauri1@gmail.com",
      Password: "Demo_1234",
    })
    .then(({ data }) => {
      const { AccessToken, RefreshToken } = data;
      localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, AccessToken);
      localStorage.setItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN, RefreshToken);
    });
};

export const renewAccessToken = () => {
  axios
    .post(`${baseUrl}/Account/RefreshToken`, {
      AccessToken: localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN),
      RefreshToken: localStorage.getItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN),
    })
    .then(({ data }) => {
      const { AccessToken, RefreshToken } = data;
      localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, AccessToken);
      localStorage.setItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN, RefreshToken);
    });
};

export const sendTextToAudioRequest = (text: string) => {
  return axios.post(
    `${baseUrl}/TTS/SynthesizeTextAudioPath`,

    {
      Language: "ka",
      Text: text,
      Voice: 0,
      IterationCount: 2,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(
          LOCAL_STORAGE_KEYS.ACCESS_TOKEN
        )}`,
      },
    }
  );
};

export const getSplitTextAsArray = (text: string) => {
  const maxLength = 230;
  const minLength = 150;

  let textToWorkOn = text;
  let textToSendArray = [];

  const sliceAndSet = (rangeToSearch: string, signOfSplit: string) => {
    textToSendArray.push(
      textToWorkOn.slice(0, rangeToSearch.indexOf(signOfSplit) + minLength + 1)
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
  return textToSendArray;
};
