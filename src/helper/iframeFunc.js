import config from "@/config";

export const getIframeUrl = ({ iframeUrl }) => {
  if (iframeUrl.type == "movie") {
    return config.personal.url + "/movie/" + iframeUrl.id;
  } else {
    return (
      config.personal.url +
      "/tv/" +
      iframeUrl.id +
      "/" +
      iframeUrl.season +
      "/" +
      iframeUrl.episode
    );
  }
};