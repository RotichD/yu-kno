interface Props {
  text: string;
}
function TextBlock({ text }: Props) {
  return (
    <div className='relative group'>
      <div className='neonGlow' />
      <p className='infoText'>{text}</p>
    </div>
  );
}

export default TextBlock;
