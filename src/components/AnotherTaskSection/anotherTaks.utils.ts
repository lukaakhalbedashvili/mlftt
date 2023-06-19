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

  sendLoginRequest();
};

export const sendTextToAudioRequest = (text: string) => {
  axios
    .post(
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
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      err.response.status === 401 && renewAccessToken();
    });
};
