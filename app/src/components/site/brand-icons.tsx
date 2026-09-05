type Props = { className?: string };

/** All marks render in a single neutral tone (currentColor): no competing
 * brand colors, per the credibility-strip design brief. */

export function MetaMark({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M5.3 19.2c-1.5 0-2.6-1-3.1-2.6C1.4 13.9 1 9.9 2.7 6.9 3.9 4.8 5.7 3.6 7.6 3.6c1.6 0 2.9.9 4 2.4.9-1.5 2.2-2.4 3.8-2.4 4 0 6.6 4.4 6.6 9.6 0 3.4-1.2 5.6-3.3 5.6-1.7 0-2.7-1.1-3.8-3.4l-2.1-4.2-2.1 4.2c-1 2.2-2.1 3.4-3.4 3.4H5.3Z" />
    </svg>
  );
}

export function AnthropicMark({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M14.3 4.2h-2.9l6.1 15.6h2.9L14.3 4.2Z" />
      <path d="M7.6 4.2 1.5 19.8h3l1.25-3.25h6.4L13.4 19.8h3L10.3 4.2H7.6Zm-.9 9.5 2.35-6.1 2.35 6.1H6.7Z" />
    </svg>
  );
}

export function GoogleMark({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M12 9.8v4.6h6.5c-.3 1.6-2.2 4.7-6.5 4.7-3.9 0-7.1-3.2-7.1-7.1s3.2-7.1 7.1-7.1c2.2 0 3.7.9 4.6 1.7l3.1-3C17.7 1.7 15.1.5 12 .5 5.6.5.5 5.6.5 12S5.6 23.5 12 23.5c6.9 0 11.1-4.9 11.1-11.7 0-.8-.1-1.4-.2-2H12Z" />
    </svg>
  );
}

export function OpenAIMark({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M12 2.5c-1.8 0-3.4 1-4.3 2.6a4.9 4.9 0 0 0-3.3 2.4A5 5 0 0 0 3.8 13a4.9 4.9 0 0 0 .5 4.6c1 1.6 2.8 2.5 4.6 2.4.9 1.6 2.5 2.6 4.3 2.6s3.4-1 4.3-2.6a4.9 4.9 0 0 0 3.3-2.4A5 5 0 0 0 20.2 11a4.9 4.9 0 0 0-.5-4.6c-1-1.6-2.8-2.5-4.6-2.4-.9-1.6-2.5-2.5-4.3-2.5Zm0 2.3c1 0 1.9.5 2.5 1.3l-.2.1-4 2.3a1 1 0 0 0-.5.9v5.4l-1.9-1.1V8.4c0-2 1.6-3.6 4.1-3.6Zm4.9 2.6c1.2.1 2.2.8 2.8 1.8.5.9.6 2 .3 3l-.2-.1-4-2.3a1 1 0 0 0-1 0l-4.7 2.7v-2.2l4.3-2.5c1.6-1 1.6-.9 2.5-.4ZM4.9 8.9c.3-1 1-1.9 2-2.4v.2V11c0 .3.2.6.5.8l4.7 2.7-1.9 1.1-4.3-2.5c-1.7-1-2.4-2.7-1-4.2Zm14.2 5.7c-.3 1-1 1.9-2 2.4v-.2-4.3c0-.3-.2-.6-.5-.8l-4.7-2.7 1.9-1.1 4.3 2.5c1.7 1 2.4 2.7 1 4.2ZM12 21.2c-1 0-1.9-.5-2.5-1.3l.2-.1 4-2.3c.3-.2.5-.5.5-.9v-5.4l1.9 1.1v4.3c0 2-1.6 3.6-4.1 3.6Z"
      />
    </svg>
  );
}
