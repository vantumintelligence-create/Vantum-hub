type Props = { className?: string };

export function MetaMark({ className }: Props) {
  return (
    <svg viewBox="0 0 36 24" className={className} aria-hidden>
      <path
        d="M4 20c-1.6 0-2.8-1-3.4-2.7C-.6 14.3-1 9.7.9 6.4 2.3 4 4.4 2.6 6.6 2.6c1.8 0 3.2 1 4.5 2.7 1-1.7 2.5-2.7 4.3-2.7 4.6 0 7.6 5 7.6 11 0 3.9-1.4 6.4-3.8 6.4-1.9 0-3.1-1.3-4.4-3.9l-2.4-4.8-2.4 4.8C8.7 18.7 7.5 20 5.6 20H4Z"
        fill="url(#metaGrad)"
      />
      <defs>
        <linearGradient id="metaGrad" x1="0" y1="0" x2="24" y2="0">
          <stop stopColor="#0064E0" />
          <stop offset="1" stopColor="#00B2FF" />
        </linearGradient>
      </defs>
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

export function TikTokMark({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M16.5 2h-3.2v13.7a3.1 3.1 0 1 1-2.6-3.1v-3.3a6.4 6.4 0 1 0 5.8 6.4V8.9c1.1.9 2.5 1.4 4 1.4V7.1c-2.2 0-4-1.8-4-4V2Z"
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

export function ZapierMark({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="#FF4A00" d="M13 2 5 13h5l-1 9 9-13h-5l1-7Z" />
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
