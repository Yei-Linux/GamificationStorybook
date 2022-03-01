import React from "react"
import {
  DrawerWithCloseIconCode,
  DrawerWithCustomCloseIconCode,
  DrawerWithDefaultCode,
  DrawerWithDirectionCode,
  DrawerWithMaskCode,
} from "./code/molecules/drawer"
import {
  FloatingWithDefaultCode,
  FloatingWithCustomCloseIconCode,
  FloatingWithCloseIconCode,
  FloatingWithDirectionCode,
} from "./code/molecules/floating"
import {
  AvatarWithAlt,
  AvatarWithHeight,
  AvatarWithIcon,
  AvatarWithImage,
  AvatarWithMargin,
  AvatarWithPadding,
  AvatarWithRounded,
  AvatarWithSetsAndBreakpoints,
  AvatarWithShadow,
  AvatarWithSize,
  AvatarWithText,
  AvatarWithWidth,
} from "./examples/AvatarExa"
import {
  ButtonWithSize,
  ButtonWithWidth,
  ButtonWithHeight,
  ButtonWithRounded,
  ButtonWithShadow,
  ButtonWithTextAlign,
  ButtonWithFontWeight,
  ButtonWithPadding,
  ButtonWithMargin,
  ButtonWithDisable,
  ButtonWithVariants,
  ButtonWithBordered,
  ButtonWithGhost,
  ButtonWithLight,
  ButtonWithFlat,
} from "./examples/ButtonExa"
import { ColWithSizesAndSpacing } from "./examples/ColExa"
import {
  CollapseWithRoundeds,
  CollapseWithShadows,
  CollapseWithPaddings,
  CollapseWithMargins,
  CollapseWithGroupDividers,
  CollapseWithGroupNotDividers,
  CollapseWithGroupAccordion,
  CollapseWithTitle,
  CollapseWithSubTitle,
  CollapseWithExpanded,
  CollapseWithVariants,
  CollapseWithBordered,
  CollapseWithContentLeft,
} from "./examples/CollapseExtra"
import {
  ColWithSizes,
  ColWithWidth,
  ColWithHeight,
  ColWithRounded,
  ColWithShadow,
  ColWithTextAlign,
  ColWithFontWeight,
  ColWithFontPadding,
  ColWithFontMargin,
  ColWithAs,
} from "./examples/ContainerExa"
import {
  DrawerWithCloseIcon,
  DrawerWithCustomCloseIcon,
  DrawerWithDefault,
  DrawerWithDirection,
  DrawerWithMask,
} from "./examples/DrawerExa"
import {
  EmptyWithShadows,
  EmptyWithPadding,
  EmptyWithMargin,
  EmptyWithIconTypes,
  EmptyWithCustomIcons,
  EmptyWithText,
  EmptyWithTextColors,
  EmptyWithSize,
} from "./examples/EmptyExa"
import {
  FloatingWithDefault,
  FloatingWithCustomCloseIcon,
  FloatingWithCloseIcon,
  FloatingWithDirection,
} from "./examples/FloatingExa"
import {
  IconWithRounded,
  IconWithShadow,
  IconWithPadding,
  IconWithMargin,
  IconWithColors,
  IconWithSize,
} from "./examples/IconExa"
import {
  ImageWithRounded,
  ImageWithShadow,
  ImageWithMargin,
  ImageWithSrcAlts,
  ImageWithLink,
  ImageWithBackground,
  ImageWithSets,
  ImageWithMax,
} from "./examples/ImageExa"
import {
  LinkWithWidth,
  LinkWithHeight,
  LinkWithTextAlign,
  LinkWithFontWeight,
  LinkWithVariants,
  LinkWithBordered,
  LinkWithGhost,
  LinkWithLight,
  LinkWithFlat,
} from "./examples/LinkExa"
import {
  MessageWithWidth,
  MessageWithHeight,
  MessageWithShadow,
  MessageWithTextAligns,
  MessageWithFontWeights,
  MessageWithPadding,
  MessageWithMargin,
  MessageWithDirection,
  MessageWithBackground,
  MessageWithColorAndMarker,
} from "./examples/MessageExa"
import {
  ProgressWithShadow,
  ProgressWithMargin,
  ProgressWithTypes,
  ProgressWithBackground,
  ProgressWithMaxSize,
} from "./examples/ProgressExa"
import {
  RichTextWithSize,
  RichTextWithWidth,
  RichTextWithHeight,
  RichTextWithRounded,
  RichTextWithShadow,
  RichTextWithTextAlign,
  RichTextWithFontWeight,
  RichTextWithPadding,
  RichTextWithMargin,
  RichTextWithText,
} from "./examples/RichTextExa"
import {
  TagWithWidth,
  TagWithHeight,
  TagWithRounded,
  TagWithShadow,
  TagWithTextAlign,
  TagWithFontWeight,
  TagWithPadding,
  TagWithMargin,
  TagWithColorsAndMarker,
} from "./examples/TagExa"
import {
  TitleWithSize,
  TitleWithWidth,
  TitleWithRounded,
  TitleWithShadow,
  TitleWithTextAlign,
  TitleWithFontWeight,
  TitleWithPadding,
  TitleWithMargin,
  TitleWithChildren,
  TitleWithLevels,
} from "./examples/TitleExa"

const atoms = {
  avatar: {
    sizes: AvatarWithSize,
    width: AvatarWithWidth,
    height: AvatarWithHeight,
    rounded: AvatarWithRounded,
    shadow: AvatarWithShadow,
    padding: AvatarWithPadding,
    margin: AvatarWithMargin,
    image: AvatarWithImage,
    text: AvatarWithText,
    icon: AvatarWithIcon,
    alt: AvatarWithAlt,
    sets: AvatarWithSetsAndBreakpoints,
  },
  button: {
    sizes: ButtonWithSize,
    width: ButtonWithWidth,
    height: ButtonWithHeight,
    rounded: ButtonWithRounded,
    shadow: ButtonWithShadow,
    textalign: ButtonWithTextAlign,
    fontweight: ButtonWithFontWeight,
    padding: ButtonWithPadding,
    margin: ButtonWithMargin,
    disable: ButtonWithDisable,
    variants: ButtonWithVariants,
    bordered: ButtonWithBordered,
    ghost: ButtonWithGhost,
    light: ButtonWithLight,
    flat: ButtonWithFlat,
  },
  collapse: {
    rounded: CollapseWithRoundeds,
    shadow: CollapseWithShadows,
    padding: CollapseWithPaddings,
    margin: CollapseWithMargins,
    groupdividers: CollapseWithGroupDividers,
    groupnotdividers: CollapseWithGroupNotDividers,
    groupaccordion: CollapseWithGroupAccordion,
    title: CollapseWithTitle,
    subtitle: CollapseWithSubTitle,
    expand: CollapseWithExpanded,
    variant: CollapseWithVariants,
    bordered: CollapseWithBordered,
    contentleft: CollapseWithContentLeft,
  },
  empty: {
    shadow: EmptyWithShadows,
    padding: EmptyWithPadding,
    margin: EmptyWithMargin,
    icontype: EmptyWithIconTypes,
    customicon: EmptyWithCustomIcons,
    text: EmptyWithText,
    textcolor: EmptyWithTextColors,
    size: EmptyWithSize,
  },
  icon: {
    rounded: IconWithRounded,
    shadow: IconWithShadow,
    padding: IconWithPadding,
    margin: IconWithMargin,
    color: IconWithColors,
    size: IconWithSize,
  },
  image: {
    rounded: ImageWithRounded,
    shadow: ImageWithShadow,
    margin: ImageWithMargin,
    srcalt: ImageWithSrcAlts,
    link: ImageWithLink,
    background: ImageWithBackground,
    sets: ImageWithSets,
    max: ImageWithMax,
  },
  link: {
    sizes: IconWithSize,
    width: LinkWithWidth,
    height: LinkWithHeight,
    rounded: IconWithRounded,
    shadow: IconWithShadow,
    textalign: LinkWithTextAlign,
    fontweight: LinkWithFontWeight,
    padding: IconWithPadding,
    margin: IconWithMargin,
    variants: LinkWithVariants,
    bordered: LinkWithBordered,
    ghost: LinkWithGhost,
    light: LinkWithLight,
    flat: LinkWithFlat,
  },
  message: {
    width: MessageWithWidth,
    height: MessageWithHeight,
    shadow: MessageWithShadow,
    textalign: MessageWithTextAligns,
    fontweight: MessageWithFontWeights,
    padding: MessageWithPadding,
    margin: MessageWithMargin,
    direction: MessageWithDirection,
    background: MessageWithBackground,
    colormarker: MessageWithColorAndMarker,
  },
  progress: {
    shadow: ProgressWithShadow,
    margin: ProgressWithMargin,
    type: ProgressWithTypes,
    background: ProgressWithBackground,
    maxsize: ProgressWithMaxSize,
  },
  richtext: {
    sizes: RichTextWithSize,
    width: RichTextWithWidth,
    height: RichTextWithHeight,
    rounded: RichTextWithRounded,
    shadow: RichTextWithShadow,
    textalign: RichTextWithTextAlign,
    fontweight: RichTextWithFontWeight,
    padding: RichTextWithPadding,
    margin: RichTextWithMargin,
    text: RichTextWithText,
  },
  tag: {
    width: TagWithWidth,
    height: TagWithHeight,
    rounded: TagWithRounded,
    shadow: TagWithShadow,
    textalign: TagWithTextAlign,
    fontweight: TagWithFontWeight,
    padding: TagWithPadding,
    margin: TagWithMargin,
    color: TagWithColorsAndMarker,
  },
  title: {
    size: TitleWithSize,
    width: TitleWithWidth,
    rounded: TitleWithRounded,
    shadow: TitleWithShadow,
    textalign: TitleWithTextAlign,
    fontweight: TitleWithFontWeight,
    padding: TitleWithPadding,
    margin: TitleWithMargin,
    children: TitleWithChildren,
    level: TitleWithLevels,
  },
}

const molecules = {
  drawer: {
    default: [<DrawerWithDefault />, DrawerWithDefaultCode],
    customcloseicon: [
      <DrawerWithCustomCloseIcon />,
      DrawerWithCustomCloseIconCode,
    ],
    closeicon: [<DrawerWithCloseIcon />, DrawerWithCloseIconCode],
    mask: [<DrawerWithMask />, DrawerWithMaskCode],
    direction: [<DrawerWithDirection />, DrawerWithDirectionCode],
  },
  floating: {
    default: [<FloatingWithDefault />, FloatingWithDefaultCode],
    customcloseicon: [
      <FloatingWithCustomCloseIcon />,
      FloatingWithCustomCloseIconCode,
    ],
    closeicon: [<FloatingWithCloseIcon />, FloatingWithCloseIconCode],
    direction: [<FloatingWithDirection />, FloatingWithDirectionCode],
  },
}

const layouts = {
  col: {
    sizespacing: ColWithSizesAndSpacing,
  },
  container: {
    size: ColWithSizes,
    width: ColWithWidth,
    height: ColWithHeight,
    rounded: ColWithRounded,
    shadow: ColWithShadow,
    textalign: ColWithTextAlign,
    fontweight: ColWithFontWeight,
    padding: ColWithFontPadding,
    margin: ColWithFontMargin,
    as: ColWithAs,
  },
}

export const allComponents = {
  atoms,
  molecules,
  layouts,
}
