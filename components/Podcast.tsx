import { FC } from "react";

type Props = {
  episode: any;
};

const Podcast: FC<Props> = ({ episode }) => {
  return (
    <iframe
      src={`https://open.spotify.com/embed/episode/${episode}`}
      width="100%"
      height="232"
      frameBorder="0"
      allowTransparency={true}
      allow="encrypted-media"
    />
  );
};

export default Podcast;
