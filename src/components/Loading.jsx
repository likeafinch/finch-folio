import tw from 'twin.macro';

const SpinnerWrapper = tw.div`
  h-screen
  w-screen
  absolute
  z-10
  inset-0
  flex
  justify-center
  items-center
  bg-transparent`;

const SpinnerInner = tw.div`
  animate-spin
  rounded-full
  h-32
  w-32
  border-b-2
  border-rose-200`;

export default function Loading() {
  return (
    <SpinnerWrapper>
      <SpinnerInner />
    </SpinnerWrapper>
  );
}
