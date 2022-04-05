import React from 'react';

import Select from 'react-select';
import {
  ColourOption,
  colourOptions,
  FlavourOption,
  GroupedOption,
  groupedOptions,
} from '../data';



const formatGroupLabel = (data: GroupedOption) => (
  <div >
    <span>{data.label}</span>
    <span >{data.options.length}</span>
  </div>
);

export default function Combo(){
   return(<Select
      defaultValue={colourOptions[1]}
      options={groupedOptions}
      formatGroupLabel={formatGroupLabel}
    />

   )
}
  
