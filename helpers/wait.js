export const wait = (sec = 10) =>
    new Promise(resolve=> setTimeout(resolve ,(sec* 1000))) 