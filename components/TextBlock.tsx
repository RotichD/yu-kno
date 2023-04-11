interface Props {
  text: string;
  hover?: boolean;
}
function TextBlock({ text, hover }: Props) {
  return (
    <div className='relative group'>
      <div className={`neonGlow ${hover && 'hoverGlow'}`} />
      <p className={`infoText ${hover && 'hoverDarken'} `}>{text}</p>
    </div>
  );
}

export default TextBlock;
