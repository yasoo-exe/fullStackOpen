export default function Message({ message, messageStyle }) {
  return !message ? null : <div className={messageStyle}>{message}</div>;
}
