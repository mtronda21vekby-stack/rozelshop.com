export function Wordmark({ subtle = false }: { subtle?: boolean }) {
  return (
    <span
      style={{
        letterSpacing: '0.55em',
        textTransform: 'uppercase',
        fontSize: '0.82rem',
        opacity: subtle ? 0.72 : 1
      }}
    >
      ROZEL
    </span>
  );
}
