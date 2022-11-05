import tw from 'twin.macro';

export const AboutHeader = tw.div`
  flex
  text-rose-300
  text-xl
  md:text-2xl
  lg:text-3xl
  flex-row
  items-center
  justify-end
  m-6
  `;

export const AboutAvatar = tw.img`
  rounded-full
  hidden
  lg:inline-flex
  w-32
  xl:w-48
  shadow-lg
  -ml-1
  h-auto`;

export const AboutSubtitle = tw.div`
  text-blue-100/90
  text-left
  lg:text-right
  uppercase
  justify-center
  lg:justify-end
  items-stretch
  flex-wrap
  my-auto
  flex
  text-xl
  lg:text-2xl
  tracking-tight
  font-light`;

export const AboutSubtitleAlt = tw(AboutSubtitle)`
    -mt-2
    lg:pl-6
    text-indigo-200/90
    text-2xl
    lg:text-5xl
    font-medium
    text-left
    justify-start
    w-fill
    tracking-widest
    pt-4
  `;

export const AboutDescription = tw.p`
  text-slate-200
  relative
  text-justify
  text-base
  md:text-lg
  font-thin
  tracking-tight
  pt-6
  px-8
  whitespace-pre-line
  after:(
    absolute
    h-fill
    w-fill
    bottom-0
    inset-x-8
    border-t-slate-500
    border-t
    border-dashed
  )
  `;

export const AboutWrapper = tw.div`
  shadow-lg
  my-8
  py-4
  px-2
  lg:py-6
  lg:px-4
  relative
  w-full
  rounded-lg
  text-slate-200
  flex-col
  items-stretch
  bg-slate-800
  bg-opacity-50
  backdrop-blur
  `;
