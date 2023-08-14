import { Icon } from '@iconify/react';

interface Props{
    error:string;
}
const Error = ({error}:Props) => {
  return (
    <div
    className="flex w-full border-l-6 border-[#F87171] bg-[#F87171] bg-opacity-[15%] dark:bg-[#1B1B24] px-7 py-8 shadow-md dark:bg-opacity-30 md:p-9">
    <div className="mr-5 flex h-9 w-full max-w-[36px] items-center justify-center rounded-lg bg-[#F87171]">
    <Icon icon="ph:x-fill" width="20" height="20" color="white" />
      
    </div>
    <div className="w-full">
      <h5 className="mb-3 font-bold text-[#B45454]">
        {error}
      </h5>
      <ul>
        <li className="leading-relaxed text-[#CD5D5D]">
          Something wrong happened, Please check your connection or report bug.
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Error