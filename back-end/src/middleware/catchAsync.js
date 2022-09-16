export function catchAsyncError(Fucn) {
   return (req, res, next) => {
      Promise.resolve(Fucn(req, res, next)).catch(next);
   };
}
