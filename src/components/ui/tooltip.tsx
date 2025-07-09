"use client"

import {
  Tooltip as ArkTooltip,
  type UseTooltipProps as ArkUseTooltipProps,
} from "@ark-ui/react/tooltip"
import { Portal } from "@ark-ui/react"
import * as React from "react"

export interface TooltipProps extends ArkUseTooltipProps {
  showArrow?: boolean
  portalled?: boolean
  portalRef?: React.RefObject<HTMLElement>
  content: React.ReactNode
  disabled?: boolean
  children: React.ReactNode
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  function Tooltip(props, ref) {
    const {
      showArrow,
      children,
      disabled,
      portalled = true,
      content,
      portalRef,
      ...rest
    } = props

    if (disabled) return children as React.ReactElement

    return (
      <ArkTooltip.Root {...rest}>
        <ArkTooltip.Trigger asChild>{children}</ArkTooltip.Trigger>
        <Portal disabled={!portalled} container={portalRef}>
          <ArkTooltip.Positioner>
            <ArkTooltip.Content ref={ref}>
              {showArrow && (
                <ArkTooltip.Arrow>
                  <ArkTooltip.ArrowTip />
                </ArkTooltip.Arrow>
              )}
              {content}
            </ArkTooltip.Content>
          </ArkTooltip.Positioner>
        </Portal>
      </ArkTooltip.Root>
    )
  },
)
