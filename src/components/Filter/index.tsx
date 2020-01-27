import React from 'react';
import { Content, FilterTitle, DropDown } from './style';

interface FilterProps {
  title: string;
  width?: string;
  options: {
    value: string,
    label: string
  }[];
  handleFilterChange: any;
}

const Filter: React.FC<FilterProps> = ({
  title,
  width,
  options,
  handleFilterChange
}: FilterProps) => (
  <Content>
    <FilterTitle>{title}</FilterTitle>
    <DropDown onChange={handleFilterChange} width={width}>
      {options?.map(({ value, label }) => (
        <option key={label} value={value}>
          {label}
        </option>
      ))}
    </DropDown>
  </Content>
);

export default Filter;

