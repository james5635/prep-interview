import {test,expect} from 'bun:test'
import { replaceSpace } from '../../../basic/string/replace-space'

test('should be pass', ()=>{
    let s 
    
    s = [..."a b c"]
    replaceSpace(s, s.length)
expect(s.join('')).toEqual("a%20b%20c\0")

    s = [..."ab ce  f   g "]
    replaceSpace(s, s.length)
    expect(s.join('')).toEqual("ab%20ce%20%20f%20%20%20g%20\0")

})