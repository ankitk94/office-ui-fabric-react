import * as React from 'react';
import ContextualMenu from './ContextualMenu';

export interface IContextualMenuProps extends React.Props<ContextualMenu> {
  /**
   * Collection of menu items
   */
  items: IContextualMenuItem[];

  /**
   * Element to anchor the ContextualMenu to.
   */
  targetElement?: HTMLElement;

  /**
   * Indicator of how the ContextualMenu should be anchored to its targetElement
   */
  directionalHint?: DirectionalHint;

  /**
   * TODO: Fill in comment
   */
  gapSpace?: number;

  /**
   * TODO: Fill in comment
   */
  labelElementId?: string;

  /**
   * Whether to focus on the menu when mounted
   */
  shouldFocusOnMount?: boolean;

  /**
   * Whether the beak should be visible
   */
  isBeakVisible?: boolean;

  /**
   * Callback when the ContextualMenu tries to close.
   */
  onDismiss?: (ev?: any) => void;

  /**
   * CSS class to apply to the context menu
   */
  className?: string;

  /**
   * Whether this menu is a submenu of another menu or not
   */
  isSubMenu?: boolean;
}

export enum DirectionalHint {
  topLeftEdge,
  topCenter,
  topRightEdge,
  topAutoEdge,
  bottomLeftEdge,
  bottomCenter,
  bottomRightEdge,
  bottomAutoEdge,
  leftTopEdge,
  leftCenter,
  leftBottomEdge,
  rightTopEdge,
  rightCenter,
  rightBottomEdge
};

export interface IContextualMenuItem {
  /**
   * Unique id to identify the item
   */
  key?: string;

  /**
   * Text description for the menu item to display
   */
  name: string;

  /**
   * Icon to display next to the menu item
   */
  icon?: string;

  /**
   * Whether the menu item is disabled
   * @defaultvalue false
   */
  isDisabled?: boolean;

  /**
   * [TODO] Not Yet Implemented
   */
  shortCut?: string;

  /**
   * Whether or not this menu item can be checked
   * @defaultvalue false
   */
  canCheck?: boolean;

  /**
   * Whether or not this menu item is currently checked.
   * @defaultvalue false
   */
  isChecked?: boolean;

  /**
   * Any custom data the developer wishes to associate with the menu item.
   */
  data?: any;

  /**
   * Callback issued when the menu item is invoked
   */
  onClick?: (item?: IContextualMenuItem, ev?: React.MouseEvent) => void;

  /**
   * A collection of submenu items
   */
  items?: IContextualMenuItem[];
}