import React, { ComponentProps } from 'react'
import classnames from 'classnames'

interface IProps extends ComponentProps<'div'> {
  justify?: 'start' | 'center' | 'end' | 'around' | 'between';
  align?: 'start' | 'center' | 'end' | 'stretch';
  direction?: 'row' | 'column';
}

export function Flex({ className, justify, align, direction, ...other }: IProps) {

  const j = justify ? justify : false;
  const a = align ? align : false;
  const d = direction ? direction : false;

  return <div className={classnames(
    'd-flex',
    { [`justify-content-${justify}`]: j },
    { [`align-items-${align}`]: a },
    { [`flex-${direction}`]: d },
    { [className!]: className }
  )}
    {...other} />
}