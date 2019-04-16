import React, { FunctionComponent } from 'react'
import { IButtonProps } from 'interfaces'
import Button from './Button'
import Link from 'next/link'

interface IBackButtonProps extends IButtonProps {
  to: string;
}

const BackButton: FunctionComponent<IBackButtonProps> = ({to, ...other}) => {
  return (
    <Link href={to}>
      <Button {...other} />
    </Link>
  )
}

BackButton.defaultProps = {
  title: 'Назад',
}

export default BackButton