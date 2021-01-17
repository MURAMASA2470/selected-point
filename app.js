window.onload = () => {
  const box = document.querySelector('.box')
  const selectPoint = document.querySelector('.selected-point')

  box.addEventListener('click', (e) => {
    const posX = e.offsetX - (selectPoint.clientWidth / 2)
    const posY = e.offsetY - (selectPoint.clientHeight / 2)

    const startPosX = Math.round((posX / box.clientWidth) * 100)
    const startPosY = Math.round((posY / box.clientHeight) * 100)
    const endPosX = startPosX + 33//selectPoint.clientWidth
    const endPosY = startPosY + 33//selectPoint.clientHeight
    console.log(Math.round((selectPoint.clientHeight / (box.clientHeight / 100) / 2)))

    console.log(startPosX, startPosY, endPosX, endPosY)

    selectPoint.style = `top: ${posY}px; left: ${posX}px;`
  })
}