/** @format */
import styled from "styled-components";

const Wrapper = styled.div`
  .section-tag {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.7rem;
    font-weight: 500;
    color: var(--accent);
    letter-spacing: 0.05em;
    display: block;
  }

  .avatar-frame {
    position: relative;
    width: 96px;
    height: 96px;
    flex-shrink: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      border-radius: 50%;
    }

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.15);
      pointer-events: none;
    }
  }
`;

type AvatarTagProps = {
  src: string;
  alt?: string;
  tag: string;
  className?: string;
};

const AvatarTag = ({ src, alt = "profile", tag, className }: AvatarTagProps) => (
  <Wrapper className={`flex items-center gap-5 ${className ?? ""}`}>
    <div className="avatar-frame shadow-2xl rounded-full bg-[#2D1B69] border-4 border-[#2D1B69]/10">
      <img src={src} alt={alt} loading="lazy" />
    </div>
    <span className="section-tag">{tag}</span>
  </Wrapper>
);

export default AvatarTag;
