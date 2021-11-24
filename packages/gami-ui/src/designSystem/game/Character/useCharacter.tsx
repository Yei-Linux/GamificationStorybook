import 'regenerator-runtime/runtime'

import useAssetLoad from 'hooks/useAssetLoad'
import useKeyDown from 'hooks/useKeyDown'
import useAudio from 'hooks/useAudio'
import useCollision from 'hooks/useCollision'
import useGameStore from 'hooks/store/useGameStore'

import { HeroTypes } from './constants'
import { IKeysDirection } from 'core/domain/interfaces/ICanvasContext'
import { timeout } from 'core/helpers/utilities.helper'

const useCharacter = () => {
  const {
    dirs,
    setDirs,
    canvasValue,
    setPositionX,
    setPositionY,
    positionX,
    positionY,
    mapConfig,
    heroSprite,
    keysDirection,
    currentDirection,
    setCurrentDirection,
  } = useGameStore()

  const { isInFrontOfAnyBlock } = useCollision()
  const { playAudio } = useAudio({
    audioImported:
      'https://storage.googleapis.com/cinetask.appspot.com/grass.mp3',
  })
  const { topDir, bottomDir, leftDir, rightDir }: IKeysDirection = keysDirection
  const keys = [topDir, bottomDir, leftDir, rightDir]

  const findDirection = (key: string): string | undefined =>
    Object.keys(keysDirection).find(
      (keyObject: string) => keysDirection[keyObject].keyCode == key
    )

  const doingActionsOnMoveCharacter = async (
    xPixelValue: number,
    yPixelValue: number,
    numberSpriteX: number,
    currentDirection: string
  ) => {
    setPositionX(xPixelValue)
    setPositionY(yPixelValue)
    setDirs({ x: numberSpriteX, currentDirection })
    await timeout(200)
  }

  const moveCharacter = async (key: string) => {
    const axisPositionX = getAxisPositionXorY(positionX.current)
    const axisPositionY = getAxisPositionXorY(positionY.current)

    const { xPixelValue, yPixelValue }: any = keys.find(
      (keyItem) => keyItem.keyCode == key
    )
    const direction = findDirection(key)

    const currentIndexOnMap = {
      x: axisPositionX / mapConfig.pixelSize,
      y: axisPositionY / mapConfig.pixelSize,
    }

    const isNextBlockObstacule = isInFrontOfAnyBlock(
      currentIndexOnMap,
      direction ?? ''
    )

    if (isNextBlockObstacule) return

    setCurrentDirection(direction)

    await playAudio()

    for (const dirGif of heroSprite.animation) {
      await doingActionsOnMoveCharacter(
        xPixelValue,
        yPixelValue,
        dirGif,
        direction ?? ''
      )
    }
  }

  const getAxisPositionXorY = (positionAxis: number) =>
    positionAxis * (mapConfig.pixelSize / 4)

  const chooseCharacterOnSpriteByDirection = (
    positionSpriteX = 1,
    positionSpriteY = 1
  ) => {
    const x = positionSpriteX - 1
    const y = positionSpriteY - 1
    return {
      x: heroSprite.pixelSize * x,
      y: heroSprite.pixelSize * y,
    }
  }

  const drawCharacter = (image: HTMLImageElement) => {
    const axisPositionX = getAxisPositionXorY(positionX.current)
    const axisPositionY = getAxisPositionXorY(positionY.current)

    const { x, y } = chooseCharacterOnSpriteByDirection(
      dirs[currentDirection].x,
      dirs[currentDirection].y
    )

    canvasValue.drawImage(
      image,
      x,
      y,
      heroSprite.pixelSize,
      heroSprite.pixelSize,
      axisPositionX,
      axisPositionY,
      mapConfig.pixelSize,
      mapConfig.pixelSize
    )
  }

  useKeyDown({
    keys: keys.map((key) => key.keyCode),
    action: moveCharacter,
    dependencies: [],
  })

  const { onLoadAsset } = useAssetLoad({
    action: drawCharacter,
  })

  const drawCharacterPixel = () => {
    onLoadAsset(HeroTypes[heroSprite.type])
  }

  return { drawCharacterPixel }
}

export default useCharacter