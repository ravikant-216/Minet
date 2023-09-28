/* eslint-disable import/no-unresolved */
import { Checkbox, CheckboxProps } from '@mui/material'
import CheckedIcon from '@Assets/icons/StarCheckBoxCheckedIcon.svg'
import UnCheckedIcon from '@Assets/icons/StarUncheckedIcon.svg'
import Image from '@Components/atoms/Image'

interface StarCheckBoxProps extends CheckboxProps {
  checked?: boolean
}

const StarCheckBox = ({ checked, ...props }: StarCheckBoxProps) => {
  return (
    <Checkbox
      checked={checked}
      {...props}
      checkedIcon={<Image src={CheckedIcon} alt="Checked Icon" />}
      icon={<Image src={UnCheckedIcon} alt="Unchecked icon" />}
    />
  )
}

export default StarCheckBox
