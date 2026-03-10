export function BigButton(props: { content: string; link: string }) {
  return (
    <a href={props.link}>
      <button>{props.content}</button>
    </a>
  );
}