function toAgeUTC(this: Date, now: Date) {
  const age = now.getFullYear() - this.getUTCFullYear();
  const m = this.getUTCMonth();
  const mNow = now.getMonth();
  const isBefore = mNow < m || (mNow === m && now.getDate() < this.getUTCDate());
  return isBefore ? age - 1 : age;
}

function toAge(this: Date, now: Date) {
  const age = now.getFullYear() - this.getFullYear();
  const m = this.getMonth();
  const mNow = now.getMonth();
  const isBefore = mNow < m || (mNow === m && now.getDate() < this.getDate());
  return isBefore ? age - 1 : age;
}

/** Returns full years amount of UTC date
 * @param isUtc point false if this date is not UTC based; defaultValue `true`
 * @param now related date; defaultValue new Date() */
export function getAge(this: Date, isUTC = true, now = new Date()) {
  // WARN: by default expected 'this' is DOB in UTC
  return isUTC ? toAgeUTC.call(this, now) : toAge.call(this, now);
}
