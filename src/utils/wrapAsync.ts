export const wrapAsync = <T, E>(promise: Promise<T>) => {
  return promise
    .then((result: T) => ({ ok: true, result, error: undefined }))
    .catch((error: E) =>
      Promise.resolve({ ok: false, result: undefined, error })
    );
};
