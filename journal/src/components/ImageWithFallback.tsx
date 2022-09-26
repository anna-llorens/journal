import fallback from '../static/images/fallback.png';

export const ImageWithFallback = ({ src }: any) => (
  <img alt='Preview' src={src}
    onError={(e) => (e.currentTarget.src = fallback)}
  />
)