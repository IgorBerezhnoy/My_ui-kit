import { ComponentPropsWithoutRef, ElementRef, JSX, forwardRef } from 'react'

import { FilledArrowDown } from '@/assets'
import { Typography } from '@/components/ui'
import * as RadixSelect from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './Select.module.scss'

import { SelectItem } from './SelectItem'

export type OptionType = { title: string; value: string }

export type SelectProps = {
  className?: string
  fullWidth?: boolean
  label?: string
  options: OptionType[]
  placeholder?: string
} & ComponentPropsWithoutRef<typeof RadixSelect.Root>

export const Select = forwardRef<ElementRef<typeof RadixSelect.Root>, SelectProps>(
  ({ className, fullWidth, label, options, placeholder, ...restProps }, ref): JSX.Element => {
    const classNames = {
      content: s.content,
      icon: s.icon,
      label: clsx(s.label),
      trigger: clsx(s.trigger, className),
      triggerWrapper: clsx(
        s.triggerWrapper,
        fullWidth && s.fullWidth,
        restProps.disabled && s.disabled
      ),
    }

    return (
      <>
        <RadixSelect.Root {...restProps}>
          <div className={classNames.triggerWrapper} tabIndex={1}>
            <RadixSelect.Trigger aria-label={'Select'} className={classNames.trigger} ref={ref}>
              <Typography className={s.text} variant={'bodyRegular1'}>
                <RadixSelect.Value placeholder={placeholder} />
              </Typography>
              <RadixSelect.Icon className={classNames.icon}>
                <FilledArrowDown />
              </RadixSelect.Icon>
            </RadixSelect.Trigger>
            {label && (
              <Typography as={'label'} className={classNames.label} variant={'caption'}>
                {label}
              </Typography>
            )}
          </div>

          <RadixSelect.Portal>
            <RadixSelect.Content className={classNames.content} position={'popper'}>
              <RadixSelect.Viewport>
                {options.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.title}
                  </SelectItem>
                ))}
              </RadixSelect.Viewport>
            </RadixSelect.Content>
          </RadixSelect.Portal>
        </RadixSelect.Root>
      </>
    )
  }
)
