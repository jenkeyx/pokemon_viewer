//возвращает увеличенные размеры спрайта маленьких покемонов
function returnImgScale(height) {
    if (height < 10) {
        return "200%"
    } else if (height >= 10 && height <= 15) {
        return "150%"
    } else {
        return "100%"
    }
}

export default returnImgScale;