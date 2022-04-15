import Button from 'react-bootstrap/Button';
import React from 'react'

const butListStyles = {
    buttonList: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: '15px',
        marginTop: '25px',
        marginBottom: '10px'
    },
    button:{
        margin: '0px 5px',
        boxShadow: '0 0 7px #666'
    }
}

export default function ButtonList() {
  return (
    <div className='button_list' style={butListStyles.buttonList}>
        <Button className='btn' style={butListStyles.button}>На неделю</Button>
        <Button className='btn' style={butListStyles.button}>На 10 дней</Button>
        <Button className='btn' style={butListStyles.button}>На месяц</Button>
    </div>
  )
}
