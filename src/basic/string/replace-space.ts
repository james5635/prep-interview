
function replaceSpace(str: string[], length: number): void {
    let spaceCount = 0, newLenght
    for (let i = 0; i < length; i++) {
        if (str[i] == ' ')
            spaceCount++
    }
    newLenght = length + spaceCount * 2
    str[newLenght] = '\0'
    for(let i=length-1;i>=0;i--){
        if(str[i] == ' '){
            str[newLenght -1 ] = '0'
            str[newLenght -2 ] = '2'
            str[newLenght -3 ] = '%'
            newLenght = newLenght -3

        }
        else {
            str[newLenght - 1] = str[i]!
            newLenght = newLenght -1
        }
    }
}
export {replaceSpace}