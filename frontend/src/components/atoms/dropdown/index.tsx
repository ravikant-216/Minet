import React, { ReactNode, useState } from 'react'
import {
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
  FormControlProps,
  Stack,
  OutlinedInput,
  styled,
} from '@mui/material'
import dropdown from '@Assets/icons/dropdown.svg'
import dropup from '@Assets/icons/dropIcon.svg'
import theme from '@/theme'

export interface DropdownProps extends Omit<FormControlProps, 'onSelect'> {
  children: ReactNode[]
  onSelect?: (value: number) => void
  padding?: string
}
const CustomFormControl = styled(FormControl)(() => ({
  '&.Mui': {
    color: theme.palette.text.lowEmphasis,
  },
  '& .MuiOutlinedInput-root': {
    color: theme.palette.text.highEmphasis,
    borderRadius: theme.spacing(2),
    '&.Mui-focused fieldset': {
      border: `${theme.spacing(0.25)} solid ${theme.palette.gamma.GREY_100}`,
    },
  },
  width: '100%',
}))

const Dropdown: React.FC<DropdownProps> = ({
  children,
  onSelect,
  padding = `${theme.spacing(3)}`,
  ...props
}) => {
  const [value, setValue] = useState<number>(0)
  const [open, setOpen] = useState<boolean>(false)

  const handleChange = (event: SelectChangeEvent<number>) => {
    setValue(event.target.value as number)
    if (onSelect) {
      onSelect(event.target.value as number)
    }
  }

  function Icon() {
    return (
      <Stack alignItems="center" justifyContent="center">
        <img src={open ? dropup : dropdown} alt="dropdown" />
      </Stack>
    )
  }

  return (
    <CustomFormControl fullWidth {...props}>
      <Select
        value={value}
        onChange={handleChange}
        sx={{ padding: padding }}
        IconComponent={Icon}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        input={
          <OutlinedInput
            sx={{
              borderRadius: theme.spacing(2),
              fontSize: theme.spacing(4.25),
              '&:hover fieldset': {
                border: `${theme.spacing(0.25)} solid ${
                  theme.palette.gamma.GREY_100
                } !important`,
                borderBottom: `${theme.spacing(0.25)} solid ${
                  theme.palette.gamma.GREY_100
                } !important`,
              },
              '&.placeholder fieldset': {
                color: 'text.lowEmphasis',
              },
              '& fieldset': {
                border: `${theme.spacing(0.25)} solid ${
                  theme.palette.gamma.GREY_100
                } !important`,
                borderRadius: `${theme.spacing(1)} !important`,
              },
            }}
          />
        }
      >
        {children.map((child, index) => (
          <MenuItem
            value={index}
            key={index}
            sx={{
              paddingY: theme.spacing(1),
              '&:not(:last-child)': {
                borderBottom: `${theme.spacing(0.25)} solid ${
                  theme.palette.gamma.GREY_100
                }`,
              },
            }}
          >
            {child}
          </MenuItem>
        ))}
      </Select>
    </CustomFormControl>
  )
}

export default Dropdown
