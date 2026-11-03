export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading page"
      className="fixed inset-0 z-100 flex h-dvh w-full items-center justify-center bg-background"
    >
      <span
        aria-hidden="true"
        className="size-14 animate-spin rounded-full border-[6px] border-primary border-t-transparent motion-reduce:animate-none"
      />
    </div>
  );
}
