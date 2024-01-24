export function nowDateFormat() {
  // 1. 현재 시간
  const curr = new Date();

  // 2. UTC 시간 계산
  const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;

  // 3. UTC to KST (UTC + 9시간)
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;

  // 4. Timezone 적용
  const now = new Date(utc + KR_TIME_DIFF);
  const year = now.getFullYear();
  const month = now.getMonth() + 1 + "";
  const date = now.getDate() + "";
  const hour = now.getHours() + "";
  const min = now.getMinutes() + "";
  const sec = now.getSeconds() + "";
  const today = `${year}-${month.padStart(2, "0")}-${date.padStart(
    2,
    "0"
  )} ${hour.padStart(2, "0")}:${min.padStart(2, "0")}:${sec.padStart(2, "0")}`;

  return today;
}

export function dateToString(now) {
  const year = now.getFullYear();
  const month = now.getMonth() + 1 + "";
  const date = now.getDate() + "";
  const hour = now.getHours() + "";
  const min = now.getMinutes() + "";
  const sec = now.getSeconds() + "";
  const today = `${year}-${month.padStart(2, "0")}-${date.padStart(2, "0")}`;

  return today;
}
