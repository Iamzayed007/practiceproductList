import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart , faEye, faTrashCan} from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faPlus} from '@fortawesome/free-solid-svg-icons';

library.add(faHeart, faCartShopping,faEye, faTrashCan, faPlus)
const Icon = ({name, size}) => {
let isFab = false
  return (
    
 <FontAwesomeIcon icon={name} size={size}  color={isFab ? 'red': 'white'}/>
    
  )
}

export default Icon