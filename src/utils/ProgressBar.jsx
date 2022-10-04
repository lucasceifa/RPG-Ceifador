
import React from 'react'
  
const Progress_bar = ({bgcolor,progress,height, bgcolor2}) => {
     
    const Parentdiv = {
        height: height,
        width: '70%',
        backgroundColor: bgcolor2,
        borderRadius: 40,
        margin: 'auto',
        marginRight: '8px',
      }
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
       borderBottomLeftRadius: 14,
       borderTopLeftRadius: 14,
        textAlign: 'right'
      }
    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
      </div>
    </div>
    )
}
  
export default Progress_bar;