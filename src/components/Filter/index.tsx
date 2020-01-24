import React from 'react';
import { Content, FilterTitle, DropDown  } from './style';

interface FilterProps {
  title: string;
  options: any,
  handleFilterChange: any
}

const Filter: React.FC<FilterProps> = ({ title, options, handleFilterChange }: FilterProps) => (
  <Content>
    <FilterTitle>{title}</FilterTitle>
    <DropDown onChange={handleFilterChange}>
      {options.map(({ value, label }: any) => (
        <option key={label} value={value}>{label}</option>
      ))}
    </DropDown>
  </Content>
)

export default Filter;