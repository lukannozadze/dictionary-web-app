const NounSection = () => {
  return (
    <div>
      <div className="flex items-center gap-4 mb-[31px]">
        <span className="text-[#2D2D2D] font-bold italic text-[18px] leading-[22px]">
          noun
        </span>
        <div className="w-full h-[1px] bg-[#E9E9E9]"></div>
      </div>
      <span className="text-[#757575] text-base leading-[20px]">Meaning</span>
      <ul className="list-disc ml-[19px] text-[#2D2D2D] text-[15px] leading-6 flex flex-col gap-[13px]">
        <li>
          <span>
            (etc.) A set of keys used to operate a typewriter, computer etc.
          </span>
        </li>
        <li>
          <span>
            A component of many instruments including the piano, organ, and
            harpsichord consisting of usually black and white keys that cause
            different tones to be produced when struck.
          </span>
        </li>
        <li>
          <span>
            A device with keys of a musical keyboard, used to control electronic
            sound-producing devices which may be built into or separate from the
            keyboard device.
          </span>
        </li>
      </ul>
      <div className="flex gap-6 mt-6 mb-[43px]">
        <span className="text-4 leading-5 text-[#757575]">Synonyms</span>
        <span className="text-4 leading-5 text-[#A445ED] font-bold">
          electronic keyboard
        </span>
      </div>
    </div>
  );
};

export default NounSection;
