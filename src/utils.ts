export function calculateRelativeTimes(date: Date): string {
  const now = new Date();
  const pastDate = new Date(date);
  const elapsedMilliseconds = now.getTime() - pastDate.getTime();

  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
  let relativeTime: string = '';
  if (elapsedMilliseconds < 1000) {
    relativeTime = rtf.format(
      -Math.floor(elapsedMilliseconds / 1000),
      'second'
    );
  } else if (elapsedMilliseconds < 60 * 1000) {
    relativeTime = rtf.format(
      -Math.floor(elapsedMilliseconds / 1000),
      'second'
    );
  } else if (elapsedMilliseconds < 60 * 60 * 1000) {
    relativeTime = rtf.format(
      -Math.floor(elapsedMilliseconds / (60 * 1000)),
      'minute'
    );
  } else if (elapsedMilliseconds < 24 * 60 * 60 * 1000) {
    relativeTime = rtf.format(
      -Math.floor(elapsedMilliseconds / (60 * 60 * 1000)),
      'hour'
    );
  } else {
    relativeTime = rtf.format(
      -Math.floor(elapsedMilliseconds / (24 * 60 * 60 * 1000)),
      'day'
    );
  }

  return relativeTime;
}