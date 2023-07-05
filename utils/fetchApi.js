export const baseUrl = "bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await fetch(url, {
    headers: {
      "X-RapidAPI-Key": "9b7928c1d2msha124e05e4b043abp1ede7bjsnbf13cd325843",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
};
