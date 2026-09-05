type Props = { className?: string };

export function MetaMark({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M5.3 19.2c-1.5 0-2.6-1-3.1-2.6C1.4 13.9 1 9.9 2.7 6.9 3.9 4.8 5.7 3.6 7.6 3.6c1.6 0 2.9.9 4 2.4.9-1.5 2.2-2.4 3.8-2.4 4 0 6.6 4.4 6.6 9.6 0 3.4-1.2 5.6-3.3 5.6-1.7 0-2.7-1.1-3.8-3.4l-2.1-4.2-2.1 4.2c-1 2.2-2.1 3.4-3.4 3.4H5.3Z"
        fill="url(#metaGrad)"
      />
      <defs>
        <linearGradient id="metaGrad" x1="1" y1="12" x2="23" y2="12">
          <stop stopColor="#0064E0" />
          <stop offset="1" stopColor="#00B2FF" />
        </linearGradient>
      </defs>
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
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="#4285F4"
        d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.7-2.4 3.6v3h3.9c2.3-2.1 3.5-5.2 3.5-8.8Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.2 0 6-1.1 7.9-2.9l-3.9-3c-1.1.7-2.4 1.2-4 1.2-3.1 0-5.7-2.1-6.6-4.9H1.4v3.1C3.3 21.3 7.3 24 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.4 14.4c-.2-.7-.4-1.5-.4-2.4s.1-1.6.4-2.4V6.5H1.4A12 12 0 0 0 0 12c0 1.9.5 3.8 1.4 5.5l4-3.1Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.8c1.7 0 3.3.6 4.5 1.8l3.4-3.4C17.9 1.2 15.1 0 12 0 7.3 0 3.3 2.7 1.4 6.5l4 3.1C6.3 6.9 8.9 4.8 12 4.8Z"
      />
    </svg>
  );
}

export function GoHighLevelMark({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M4 18 10 6l4 8 3-5 3 9" fill="none" stroke="url(#ghlGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="ghlGrad" x1="4" y1="6" x2="20" y2="18">
          <stop stopColor="#2FB8E8" />
          <stop offset="1" stopColor="#7ED957" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function TwilioMark({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="1" y="1" width="22" height="22" rx="6" fill="#F22F46" />
      <circle cx="9" cy="9" r="2.15" fill="#fff" />
      <circle cx="15" cy="9" r="2.15" fill="#fff" />
      <circle cx="9" cy="15" r="2.15" fill="#fff" />
      <circle cx="15" cy="15" r="2.15" fill="#fff" />
    </svg>
  );
}

export function N8nMark({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none" stroke="#EA4B71" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="5" cy="12" r="2.4" />
      <circle cx="19" cy="6" r="2.4" />
      <circle cx="19" cy="18" r="2.4" />
      <path d="M7.2 11 12 7.3M7.2 13 12 16.7M12 7.3h4.7M12 16.7h4.7" />
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
