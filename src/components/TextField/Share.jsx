import tw, { styled } from 'twin.macro';
import { TextFieldStyles } from './TextField';

export const FieldStyles = tw`
    relative
    cursor-text
    transition-all
    duration-700
    opacity-90
    px-2
    py-3
    my-1
    w-full
    bg-slate-600/10
    shadow-input
    text-tertiary
    tracking-wider
    uppercase
    border-none
    rounded-t
    focus:(
        shadow-input-focused
        bg-slate-500/10
        )
    hover:(
        shadow-input-focused
        bg-slate-500/10
        )
    disabled:shadow-input-disabled
    disabled:text-slate-500
    placeholder:text-opacity-50
    `;

export const MultiInputs = styled.div`
  ${tw`
        flex
        flex-col
        md:flex-row
        w-full
        items-center
        justify-between
    `}
  ${TextFieldStyles}:nth-of-type(odd) {
    flex-basis: 60%;
  }
`;
