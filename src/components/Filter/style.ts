import styled from 'styled-components';

interface DropDownProps {
  width?: string
}

export const Content = styled.div`
  margin-right: 10px;
`

export const FilterTitle = styled.h3`
  margin: 0 0 5px 0;
  font-size: 12px;
  font-weight: 800;
  color: #fff;
  text-transform: uppercase;
`

export const DropDown = styled.select<DropDownProps>`
  width: ${(props: DropDownProps) => props.width || '100px' };
  height: 38px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
`