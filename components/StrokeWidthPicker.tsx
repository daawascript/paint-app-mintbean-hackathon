import React, {
  Dispatch,
  FC,
  FormEventHandler,
  SetStateAction,
  useMemo,
  useState,
} from 'react';
import { mdiChevronDown, mdiFormatLineWeight, mdiCheck } from '@mdi/js';
import Icon from '@mdi/react';
import { Listbox } from '@headlessui/react';

interface IProps {
  strokeWidth: number;
  setStrokeWidth: Dispatch<SetStateAction<number>>;
}

const StrokeWidthPicker: FC<IProps> = ({ strokeWidth, setStrokeWidth }) => {
  const [showPicker, setShowPicker] = useState(false);

  const options = useMemo(() => {
    return Array.from({ length: 30 }, (n, i) => i * 4).filter((el, i) => {
      if ((i !== 0 && i <= 13) || (i > 13 && i % 2 === 0)) {
        return true;
      }
      return false;
    });
  }, []);

  return (
    <Listbox
      as='div'
      className='relative'
      value={strokeWidth}
      onChange={setStrokeWidth}
    >
      <Listbox.Button
        className='btn'
        defaultValue={strokeWidth}
        name='strokeWidth'
        id='strokeWidth'
      >
        <Icon path={mdiFormatLineWeight} size='48px' />
        <div className='text-sm'>{strokeWidth}</div>
      </Listbox.Button>
      <Listbox.Options className='absolute z-50 w-12'>
        {options.map((option) => (
          <Listbox.Option key={option} value={option}>
            {({ active, selected }) => (
              <li
                className={`${
                  active ? 'bg-gray-800' : 'bg-gray-400'
                } flex items-center gap-1`}
              >
                {option}
                {selected && <Icon path={mdiCheck} size='16px' />}
              </li>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default StrokeWidthPicker;
